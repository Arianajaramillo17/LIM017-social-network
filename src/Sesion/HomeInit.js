import { onNavigate } from '../main.js';
export const HomeInit = (rootElement) => {
  const ContainerHome = `<body id="redireccionamiento">
                            <a href="./Login"><img class="ImageLogo" src="../image/Logo.png"/></a>
                            <img class="ImageCharge" src="../image/charge.gif"/> 
                                                    
                          </body> `;
  rootElement.innerHTML = ContainerHome;
  // redireccionamienro
 setTimeout(Redireccionamiento, 3500);
  function Redireccionamiento() {
    onNavigate('/Login');
  }
};
