import { onNavigate } from '../main.js';

export const Home = (rootElement) => {
  const ContainerHome = `<body id="redireccionamiento">
                            <img class="ImageLogo" src="../image/Logo.png"/>
                            <img class="ImageCharge" src="../image/charge.gif"/>
                          </body> `;
  rootElement.innerHTML = ContainerHome;

  // redireccionamienro
  setTimeout(Redireccionamiento, 2500);
  function Redireccionamiento() {
    onNavigate('/Login');
  }
};
