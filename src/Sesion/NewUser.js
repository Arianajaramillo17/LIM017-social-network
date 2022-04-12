export const NewUser = (rootElement) => {
    const containerLogo = `<p>iniciar registro</p>`;
    const containerRegistro = `<p>GMAIL</p>
                                <input></input>
                                <p>CONTRASEÑA</p>
                                <input></input>`;                            
    const containerCrearCuenta = `<p>
    <button class="button" id="BotonCrearCuenta">Crear Cuenta</button>
                              `;
   
  rootElement.innerHTML = containerLogo+containerRegistro+containerCrearCuenta
  };