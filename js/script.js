const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')


form.addEventListener('submit', (e) => {
    e.preventDefault()




    checkInputs()
})


function checkInputs() {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()


    if (usernameValue === '') {

        setErrorFor(username, 'Username cannot be blank')

    } else {
        setSuccessFor(username)
    }
}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message
    formControl.className = 'form-control error'
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}
