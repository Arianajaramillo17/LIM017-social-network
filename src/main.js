// Este es el punto de entrada de tu aplicacion 
/*import { myFunction } from './lib/index.js'; 
myFunction(); 
*/ 
import { Home } from './menu/Home.js'; 
import { NewUser } from './menu/NewUser.js'; 
import { Login } from './menu/Login.js'; 
// Router 
// const pageOne = document.getElementById('welcome'); 
export const routes = {
  '/': Home, 
  '/NewUser': NewUser, 
  '/Login': Login,
}

const root = document.getElementById('root'); 
routes[window.location.pathname](root); 

export const onNavigate = (pathname) => {
   window.history.pushState(
     {},
     pathname, 
     window.location.origin + pathname,
  );
  routes[pathname](root); 
};   

 
 
 


/* 
const Registrarse = document.getElementById('botonlogin'); 
Registrarse.addEventListener('click', () => onNavigate('/Login')); 
const IniciarSecion = document.getElementById('BtnIniciarSecion'); 
IniciarSecion.addEventListener('click', () => onNavigate('/Login')); 
*/ 

 
