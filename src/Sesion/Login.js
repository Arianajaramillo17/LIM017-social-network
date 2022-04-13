import { onNavigate } from '../main.js';

export const Login = (rootElement) => {
  const button = `
      <section class="HomeView">
        <img src="./image/Logo.png" class="AppLogo"/>
        <form class="login">
          <label class="form-login">Correo Electronico :</label><br>
          <input class="inputForm" id="inputEmail"/><br><br>
          <label class="form-login">Contraseña :</label><br>
          <input class="inputForm" id="inputPassword"/><br><br><br>
        </form>
          <button class="logo" id="LogoButton">INICIAR SESIÓN</button><br><br>
          <a href="/NewUser" class="crear" id="crear">REGISTRARSE</a><br><br>
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
