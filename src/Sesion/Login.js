import { onNavigate } from "../main.js";

  export const Login = (rootElement)=>{
    const button = `  <button id="botonlogin">Haz login con Google</button>  ` 
    const button2 = ` <button id="crear">crear cuenta</button>  `

  rootElement.innerHTML = button + button2;

  const Registrarse = document.getElementById('botonlogin'); 
  Registrarse.addEventListener('click', function() { 
     // accedo al servicio de autenticación 
     var authService = firebase.auth(); 
    // manejador de eventos para loguearse 
    var provider = new firebase.auth.GoogleAuthProvider(); 
    provider.addScope('email'); 
    authService.signInWithPopup(provider) 
    .then(function(result) {
      // logueado con éxito 
      console.log('Hemos autenticado al usuario ', result.user); 
      onNavigate('/MenuHome')    
      }) 
     .catch(function(error) { 
     // Fallo de login 
     console.log('Se ha encontrado un error:', error); 
     }); 
 }); 

 const IniciarSecion = document.getElementById('crear'); 
IniciarSecion.addEventListener('click', function(){
   onNavigate('/NewUser');
}
);
  }
  
