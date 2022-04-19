export const NewUser = (rootElement) => {
  const containerRegistro = `
      <section class="logoWelcomeViewRegister">
        <img src="./image/Logo.png" class="AppLogoRegister"/>
      </section>
      <section class="newUserView">
        <h1 class="titleNewUser" id="titleNewUser">Iniciar Registro</h1><br>
        <section class="newUserImageProfile">
          <p class="photoRegist">Subir foto de perfil</p><br>
          <button class="photoUpload"></button>
        </section>
        <form class="newUserForm">
          <label class="form-newUser">Nombre :</label><br>
          <input class="inputFormNewUser"></input><br>
          <label class="form-newUser">Correo Electrónico:</label><br>
          <input class="inputFormNewUser"></input><br>
          <label class="form-newUser">Crear contraseña :</label><br>
          <input class="inputFormNewUser"></input><br>
          <label class="form-newUser">Escribe tu descripción :</label><br>
          <textarea class="writeDescript"></textarea> </br>
        </form>
        <button class="registerBtn" id="BotonCrearCuenta">REGISTRARSE</button>
      </section>
      `;

  rootElement.innerHTML = containerRegistro;
};
