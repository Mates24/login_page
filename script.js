const loginform = document.querySelector('.container .login');
const signupform = document.querySelector('.container .signup');
const loginbutton = document.querySelector('p.login-btn span');
const signupbutton = document.querySelector('p.signup-btn span');

loginbutton.addEventListener('click', () => {
    signupform.style.right = "200%";
    loginform.style.left = "50%";
});
signupbutton.addEventListener('click', () => {
    signupform.style.right = "50%";
    loginform.style.left = "200%";
})