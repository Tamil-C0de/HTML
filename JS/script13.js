// document.querySelector('.toggle-btn').addEventListener('click', function () {
//     // document.body.classList.add('dark-mode');
//     // document.body.classList.remove('dark-mode');
//     document.body.classList.toggle('dark-mode');
// })

// const input = document.getElementById('input');
// const show = document.getElementById('show');

// show.addEventListener('click', function () {
//     console.log(input.value);
// })

const form = document.getElementById('testform');
const errorMessage = document.getElementById('error');

// console.log(form[0], form[1], form[2]);

form.addEventListener('submit', function (event) {
    errorMessage.textContent = '';

    const email = form[0].value;
    const password = form[1].value;

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Email is invalid';
        event.preventDefault();
    }
    else if (password.length < 6) {
        errorMessage.textContent = 'Password must be greater than 6 characters';
        event.preventDefault();
    }

    console.log("Form Data: ", email, password);
});

function validateEmail(email) {
    if (email.includes('@')) return true;
    else return false;
}