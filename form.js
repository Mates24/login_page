const loginform = document.querySelector('.container .login');
const signupform = document.querySelector('.container div.signup');
const forgotform = document.querySelector('.container div.forgot');
const loginbutton = document.querySelector('p.login-btn span');
const signupbutton = document.querySelector('p.signup-btn span');
const forgotbutton = document.querySelector('p.forgot-btn');
const backtosignup = document.querySelector('p.back-to-signup-btn');
const backtologin = document.querySelector('p.back-to-login-btn');

loginbutton.onclick = () => {
    signupform.style.right = "200%";
    loginform.style.left = "50%";
    forgotform.style.left = "200%";
};
forgotbutton.onclick = () => {
    signupform.style.right = "350%";
    loginform.style.left = "-100%";
    forgotform.style.left = "50%";
}
signupbutton.onclick = () => {
    signupform.style.right = "50%";
    loginform.style.left = "200%";
    forgotform.style.left = "350%";
};
backtosignup.onclick = () => {
    signupform.style.right = "50%";
    loginform.style.left = "200%";
    forgotform.style.left = "350%";
};
backtologin.onclick = () => {
    signupform.style.right = "200%";
    loginform.style.left = "50%";
    forgotform.style.left = "200%";
};