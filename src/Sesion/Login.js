import { onNavigate } from '../main.js';
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

export const Login = (rootElement) => {
  const button = `
      <section class="HomeView">

        <section class="logoWelcome">
          <img src="./image/Logo.png" class="AppLogo"/>
          <h2>1, 2, 3, Hello! Bienvenidx!</h2>
        </section>
        <section class="containerLogin">
          <form class="login">
            <label class="form-login">Correo Electronico :</label><br>
            <input class="inputForm" id="inputEmail"/><br>

            <label class="form-login">Contraseña :</label><br>
            <input class="inputForm" id="inputPassword"/><br>
          </form>

          <section class="loginButtons">
            <button class="logo" id="LogoButton">INICIAR SESIÓN</button><br><br>
            <button class="LoginGmail" type="image"> <img src="./image/LogoGmail.jpg" height ="21"/>  INICIAR SESIÓN CON GOOGLE</button><br><br>
            <h1>¿No tienes una cuenta?</h1>
            <a href="/NewUser" class="crear" id="crear">Registrate</a><br>
            </section>
        </section>
      </section>`;
      
rootElement.innerHTML = button;

const database = getDatabase();
const auth = getAuth();
const btnLogin = document.getElementById("LogoButton")

//funcion iniciar sesion
  btnLogin.addEventListener('click',(e)=>{
    var inputEmail = document.getElementById('inputEmail').value;
    var inputPassword = document.getElementById('inputPassword').value;

       signInWithEmailAndPassword(auth, inputEmail, inputPassword)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         const dt = new Date();
          update(ref(database, 'users/' + user.uid),{
           last_login: dt,
         })
          alert("iniciaste sesions");
          onNavigate('/MenuHome');
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert("error al iniciar sesion");
   });
   });

   //iniciar con google
 /*registro con google 
 const Registrarse = document.getElementById('LogoButton');
  Registrarse.addEventListener('click', () => {
    // accedo al servicio de autenticación
    const authService = firebase.auth();
    // manejador de eventos para loguearse
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    authService.signInWithPopup(provider)
      .then((result) => {
      // logueado con éxito
        console.log('Hemos autenticado al usuario ', result.user);
        onNavigate('/MenuHome');
      })
      .catch((error) => {
        // Fallo de login
        console.log('Se ha encontrado un error:', error);
      });
  });

  const IniciarSecion = document.getElementById('crear');
  IniciarSecion.addEventListener('click', () => {
    onNavigate('/NewUser');
  });
*/
  }
