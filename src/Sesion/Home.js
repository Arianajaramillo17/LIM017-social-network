//import { onNavigate } from './Login';

export const Home = (rootElement) => {
  const ContainerHome = `<body id="redireccionamiento">

                            <img class="ImageLogo" src="../image/Logo.png"/>
                            <img class="ImageCharge" src="../image/charge.gif"/>

                          <a href="./Login"><img class="ImageLogo" src="../image/Logo.png" /></a>

                          </body> `;
  rootElement.innerHTML = ContainerHome;

  // redireccionamienro

  setTimeout(Redireccionamiento, 2500);

 /*setTimeout(Redireccionamiento, 1000);

  function Redireccionamiento() {
    onNavigate('/Login');
  }*/
};
