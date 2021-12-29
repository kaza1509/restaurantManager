let button = document.getElementById('button')

let username = document.querySelector('input[type="text"]')

let password = document.querySelector('input[type="password"]')

button.addEventListener('click', () => {
    console.log('hihi');
    if(username.value == 'chinh@gmail.com' && password.value == '1234') {
        window.location = '../index.html'
    }
})
