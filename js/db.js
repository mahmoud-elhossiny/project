//realtime data listener
db.collection('Students').onSnapshot(snapshot =>{
    snapshot.docChanges().forEach(change => {

        if(change.type === "added"){
            renderStudent(change.doc.data(), change.doc.id);
        }

        if(change.type === "removed"){
            removeStudent(change.doc.id);
        }
        
    });

});

//add students
const form = document.querySelector('form');
form.addEventListener('submit', evt =>{
    evt.preventDefault();

    const student = {
        name: form.name.value,
        id: form.id.value
    };

    db.collection('Students').add(student)
    .catch(er => console.log(er));

    form.name.value = '';
    form.id.value = '';

});

//delete student
const studentContainer = document.querySelector('.students');

studentContainer.addEventListener('click', evt => {

    if(evt.target.textContent === 'delete_outline'){
        const ID = evt.target.getAttribute('data-id');
        db.collection('Students').doc(ID).delete();

    }                

});