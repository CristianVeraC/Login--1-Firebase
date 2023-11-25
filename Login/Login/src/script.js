const signInBtnLink = document.querySelector('.signIn-link');
const signUpBtnLink = document.querySelector('.signUp-link');


const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
