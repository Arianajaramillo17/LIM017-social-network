import { onNavigate } from '../main.js';
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";


export const Login = (rootElement) => {
  const button = `
      <section class="HomeView">
        <img src="./image/Logo.png" class="AppLogo"/>
        <form class="login">
          <label class="form-login">Correo Electronico :</label><br>
          <input class="inputForm" id="email"/><br><br>
          <label class="form-login">Contraseña :</label><br>
          <input class="inputForm" id="password"/><br><br><br>
        </form>
          <button class="logo" id="login">INICIAR SESIÓN</button><br><br>
          <a href="/NewUser" class="crear" id="btnRegistrarse">REGISTRARSE</a><br><br>
      </section>`;  
rootElement.innerHTML = button;

const database = getDatabase();
const auth = getAuth();

const login = document.getElementById("login")
//const database = getDatabase(app);
//funcion iniciar sesion
  login.addEventListener('click',(e)=>{
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed in 
         const user = userCredential.user;
         const dt = new Date();
          update(ref(database, 'users/' + user.uid),{
           last_login: dt,

         })
          alert("iniciaste sesion s");
          onNavigate('/MenuHome');

       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert("error al iniciar sesion");
   });
   });
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
