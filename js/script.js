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
        setErrorFor(username, 'Username can\'t be blank')
    } else {
        setSuccessFor(username)
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email can\'t be blank')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email isn\'t valid')
    }
    else {
        setSuccessFor(email)
    }
    if (passwordValue === '') {
        setErrorFor(password, 'Password can\'t be blank')
    } else {
        setSuccessFor(password)
    }
    if (password2Value === '') {
        setErrorFor(password2, 'Password check can\'t be blank')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords doesn\'t match')
    } else {
        setSuccessFor(password2)
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

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
