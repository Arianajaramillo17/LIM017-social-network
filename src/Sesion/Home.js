import { onNavigate } from "../main.js";

 export const Home = (rootElement)=>{
   const button2 = ` <button class="logo" id="LogoButton">Asia Maniaxd</button>  `  
 rootElement.innerHTML= button2;
 
 const IniciarSecion = document.getElementById('LogoButton'); 
 IniciarSecion.addEventListener('click', function(){
    onNavigate('/Login');
 }
 ); 
 }
