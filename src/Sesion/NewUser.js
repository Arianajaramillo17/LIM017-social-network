export const NewUser = (rootElement) => {
  const containerLogo = ' <h1 class="titleNewUser" id="titleNewUser"> Iniciar registro </h1>';
  const containerRegistro = `<section class="board">  <p class="photoRegist">Subir foto de perfil</p>
  <button class="photoUpload"></button>
  <p class="nameRegist">Nombre</p>
  <input class="inp"></input>
  <p class="mailRegist">Correo</p>
  <input class="inp"></input>
  <p class="passwordRegist">Crear contraseña</p>
  <input class="inp"></input>
  <p class="descriptRegist">Escribe tu descripción</p>
  <textarea class="writeDescrip"></textarea> </br> </section>`;
  const containerCrearCuenta =
    '<button class="button" id="BotonCrearCuenta">REGISTRARSE</button>'
    ;

  rootElement.innerHTML = containerLogo + containerRegistro + containerCrearCuenta
};