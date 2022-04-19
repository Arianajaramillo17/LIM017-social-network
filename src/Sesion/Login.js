import { onNavigate } from '../main.js';

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
      </section>
      `;

  // const button2 = '<button id="botonlogin"></button>';

  rootElement.innerHTML = button;

  const Registrarse = document.getElementById('LogoButton');
  Registrarse.addEventListener('click', () => {
    // accedo al servicio de autenticación
    const authService = firebase.auth();
    // manejador de eventos para loguearse
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    console.log('Aqui');
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
};
