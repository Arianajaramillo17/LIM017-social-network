// Este es el punto de entrada de tu aplicacion
/* import { myFunction } from './lib/index.js';
myFunction();
*/
import { Home } from './Sesion/Home.js';
import { NewUser } from './Sesion/NewUser.js';
import { Login } from './Sesion/Login.js';
import { MenuHome } from './Menu/MenuHome.js';
import { NavMenu } from './Sesion/NavMenu.js';
//import {firebaseConfig} from  './firebase/conectorFB.js';

// Router
// const pageOne = document.getElementById('welcome');
export const routes = {
  '/': Home,
  '/NewUser': NewUser,
  '/Login': Login,
  '/MenuHome': MenuHome,
  '/NavMenu': NavMenu,
 // '/firebaseConfig': conectorFB,
};

const root = document.getElementById('root');
routes[window.location.pathname](root);

//const app = initializeApp(firebaseConfig);

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  routes[pathname](root);
};


