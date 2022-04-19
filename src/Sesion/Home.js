//import { onNavigate } from './Login';

export const Home = (rootElement) => {
  const ContainerHome = `<body id="redireccionamiento">
                          <a href="./Login"><img class="ImageLogo" src="../image/Logo.png" /></a>
                          </body> `;
  rootElement.innerHTML = ContainerHome;

  // redireccionamienro
 /*setTimeout(Redireccionamiento, 1000);
  function Redireccionamiento() {
    onNavigate('/Login');
  }*/
};
