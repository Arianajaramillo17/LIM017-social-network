import { onNavigate } from "../main.js";

export const MenuHome = (rootElement)=>{
  const button2 = ` <button id="CloseSesion">Cerrar Sesion</button>  `  
rootElement.innerHTML= button2;

const IniciarSecion = document.getElementById('CloseSesion'); 
IniciarSecion.addEventListener('click', function(){
   onNavigate('/');
}
); 
}