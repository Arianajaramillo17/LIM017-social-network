import { onNavigate } from "../main.js";

/*export const Login = () => {
  const containerLogo = `<button id="botonlogout">Haz logout</button> `;
                        
  const containerIniciarSecion = `<p>
  <button class="button" id="BtnIniciarSecion">INICIAR SECION</button>`;
                            
  const IniciarSecionConCuenta = containerLogo  + containerIniciarSecion ;
  return IniciarSecionConCuenta;
};*/
export const Login = (rootElement)=>{
  const button2 = ` <button id="botonlogout">Haz logout</button>  `  
rootElement.innerHTML= button2;

const IniciarSecion = document.getElementById('botonlogout'); 
IniciarSecion.addEventListener('click', function(){
   onNavigate('/');
}
); 
}

// manejador de eventos para los cambios del estado de autenticación
/*authService.onAuthStateChanged(function(user) {
  if (user) {
    console.log('AuthStateChanged', user)
    document.getElementById('datosuser').innerHTML = JSON.stringify(user);
    document.getElementById('botonlogin').style.display = 'none';
    document.getElementById('botonlogout').style.display = 'block';
  } else {
   
    document.getElementById('datosuser').innerHTML = 'Sin usuario logueado...'
    document.getElementById('botonlogin').style.display = 'block';
    document.getElementById('botonlogout').style.display = 'none';
  }
});*/