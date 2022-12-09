const students = document.querySelector('.students');
document.addEventListener('DOMContentLoaded', function(){

    //access nav menu
    const menu = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menu, {edge: 'left'});

    //access add student form
    const form = document.querySelectorAll('.side-form');
    M.Sidenav.init(form, {edge: 'right'});
});

const renderStudent = (data, ID) => {

    const html = `
            <div class="card-panel student white row" data-id=${ID}>
                    <img src="img/student.png" alt="Student 1">
                    <div class="student-details">

                        <div class="student-name">${data.name}</div>
                        <div class="student-id">${data.id}</div>
                    </div>
                    <div class="student-delete">
                        <i class="material-icons" data-id=${ID}>delete_outline</i>
                    </div>
                </div>
    `;

    students.innerHTML += html;
};

const removeStudent = (ID) => {
    const student = document.querySelector(`.student[data-id=${ID}]`);
    student.remove();
}
