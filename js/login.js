var email = document.getElementById('email');

var senha = document.getElementById('senha');

email.addEventListener('focus', () => {
    email.style.borderColor = "#ff4500";
})

email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
})

senha.addEventListener('focus', () => {
    senha.style.borderColor = "#ff4500";
})

senha.addEventListener('blur', () => {
    senha.style.borderColor = "#ccc";
})