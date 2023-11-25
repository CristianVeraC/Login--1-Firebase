import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from 'firebase.js'

const signupLogin = document.querySelector('#signupLogin')

signupLogin.addEventListener('submit', async (e) => {
    e.preventDefault()

    console.log(signupLogin);
    const Email = signupLogin['Login-Email'].value;
    const Password = signupLogin['Login-Password'].value;
    console.log(Email, Password);
    

    console.log(Email, Password)
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, Email, Password)
        console.log('Usuario registrado con éxito:', userCredentials)
    } catch (error) {
        console.error('Error al registrar usuario:', error.message);
    }
    
})
