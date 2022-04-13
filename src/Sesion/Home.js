import { onNavigate } from '../main.js';

export const Home = (rootElement) => {
  const button2 = `
          <section class="HomeView">
            <img src="./image/Logo.png" class="AppLogo"/>
            <form class="login">
              <label class="form-login">Correo Electronico :</label><br>
              <input class="inputForm" id="inputEmail"/><br><br>
              <label class="form-login">Contraseña :</label><br>
              <input class="inputForm" id="inputPassword"/><br><br><br>
              <button class="logo" id="LogoButton">INICIAR SESIÓN</button><br><br>
              <a href="\NewUser" class="Register" id="RegisterButton">REGISTRARSE</a><br><br>
              <a href=""><img src="./image/logoGmail.png" id="LoginGmail"/></a>
              </form>
          </section>
          `;
  rootElement.innerHTML = button2;

  const IniciarSecion = document.getElementById('LogoButton');
  IniciarSecion.addEventListener('click', () => {
    onNavigate('/Login');
  });
};
