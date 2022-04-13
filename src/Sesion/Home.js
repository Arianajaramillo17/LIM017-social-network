import { onNavigate } from '../main.js';

export const Home = (rootElement) => {
  const ContainerHome = `<body id="redireccionamiento">
                          <img class="ImageLogo" src="../image/Logo.png" />
                          </body> `;
  rootElement.innerHTML = ContainerHome;

  // redireccionamienro
  setTimeout(Redireccionamiento, 5000);
  function Redireccionamiento() {
    onNavigate('/Login');
  }
};
