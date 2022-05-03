//import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"; 
import { getFirestore,  collection, addDoc  } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword,sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js" ;

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
          <input class="inputFormNewUser" id="newUserName"></input><br>

          <label class="form-newUser">Correo Electrónico:</label><br>
          <input class="inputFormNewUser" id="newUserEmail"></input><br>
          
          <div class="passwordcreate"><label class="form-newUser">Crear contraseña :</label><br>
          <span class="icon-eye">
          <i class="fa-solid fa-eye-slash"></i></span>
          <input type="password" class="inputFormNewUser" id="newUserPassword"></input><br></div>

          <label class="form-newUser">Escribe tu descripción :</label><br>
          <textarea class="writeDescript" id="newUserDescription"></textarea> </br>
        </form>
        <button class="registerBtn" id="sighUp">REGISTRARSE</button>
      </section>
      `;

  rootElement.innerHTML = containerRegistro;
//Ocultar contraseña
const iconEye= document.querySelector(".icon-eye");
iconEye.addEventListener("click", function () {
  const icon = this.querySelector("i");

 if(this.nextElementSibling.type === "password"){
   this.nextElementSibling.type = "text";
   icon.classList.remove("fa-eye-slash");
   icon.classList.add ("fa-eye");
 } else {
    this.nextElementSibling.type = "password";
    icon.classList.remove ("fa-eye");
   icon.classList.add("fa-eye-slash");
 }
});


const auth = getAuth();
const db = getFirestore();


//const sighUp= document.getElementById("sighUp") 
sighUp.addEventListener('click',() => {
  var newUserName = document.getElementById('newUserName').value;
  var newUserEmail = document.getElementById('newUserEmail').value;
  var newUserPassword = document.getElementById('newUserPassword').value;
  var newUserDescription = document.getElementById('newUserDescription').value;
 
  createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword)
   .then(() => {
   try {
    const register =  addDoc(collection(db, "register"), {
      newUserName:newUserName,
      newUserEmail:newUserEmail,
      newUserDescription:newUserDescription
    });
    console.log("Registro realizado ", register.newUserName);
    swal({
      title: "Registro realizado",
      text: "Su cuenta a sido creada con exito!!",
      icon: "success",
      button: "Iniciar Sesion" ,
      dangerMode: true,

    })
    .then((result) => {
      //volver al inicio
      if(result){
      location.href=("./Login")
      }
    })
  } 
  catch (e){
    console.error("Error, no se pudo registrar ", e);
  }
})
   .catch((error) => {
     swal({
      title: "No se pudo registrar",
      text: "Verifique tus datos",
      icon: "error",
      button: "Volver" ,
      dangerMode: true,
    })

   });
  });
  

  
 /* sighUp.addEventListener('click',(e) => {
    var newUserEmail = document.getElementById('newUserEmail').value;
    var newUserPassword = document.getElementById('newUserPassword').value;
    var newUserName = document.getElementById('newUserName').value;

    try {
    const register =  addDoc(collection(db, "register"), {
      newUserName:newUserName,
      newUserEmail:newUserEmail
    });
    alert('cuenta creada');
    console.log("Document written with ID: ", register.id);
  } 
  catch (e) {
    console.error("Error adding document: ", e);
  }
    });*/

   

    
}


