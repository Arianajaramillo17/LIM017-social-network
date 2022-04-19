import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"; 
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js" ;

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

  const containerLogo = ' <h1 class="titleNewUser" id="titleNewUser"> Iniciar registro </h1>';
  const containerRegistro = `<section class="board">  <p class="photoRegist">Subir foto de perfil</p>
  <button class="photoUpload"></button>
  <p class="nameRegist" >Nombre</p>
  <input class="inp" id="username"></input>
  <p class="mailRegist" >Correo</p>
  <input class="inp" id="email"></input>
  <p class="passwordRegist" >Crear contraseña</p>
  <input class="inp" id="password"></input>
  <p class="descriptRegist">Escribe tu descripción</p>
  <textarea class="writeDescrip"></textarea> </br> </section>`;
  const containerCrearCuenta =
    '<button class="button" id="sighUp">REGISTRARSE</button>'
    ;
  rootElement.innerHTML = containerLogo + containerRegistro + containerCrearCuenta

const database = getDatabase();
const auth = getAuth();
//  const database = getDatabase(app);
sighUp.addEventListener('click',(e) => {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
   
  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Signed in 
     const user = userCredential.user
     set(ref(database, 'users/' + user.uid),{
         username: username,
         email: email
     })
     alert('cuenta creada');
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     alert("errorMessage");
   });
  });
};

