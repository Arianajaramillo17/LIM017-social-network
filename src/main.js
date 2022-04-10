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
};
const root = document.getElementById('root');
root.innerHTML = routes[window.location.pathname]();

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.innerHTML = routes[pathname]();
};

const Registrarse = document.getElementById('BotonCrearCuenta');
Registrarse.addEventListener('click', () => onNavigate('/NewUser'));

const IniciarSecion = document.getElementById('BtnIniciarSecion');
IniciarSecion.addEventListener('click', () => onNavigate('/Login'));
