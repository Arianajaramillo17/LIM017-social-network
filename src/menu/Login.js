export const Login = () => {
  const containerLogo = `<p>iniciar secion</p>`;
  const containerRegistro = `<p>INGRESE SU GMAIL</p>
                              <input></input>
                              <p>INGRESE SU CONTRASEÑA</p>
                              <input></input>`;                            
  const containerIniciarSecion = `<p>
  <button class="button" id="BtnIniciarSecion">INICIAR SECION</button>`;
                            
  const IniciarSecionConCuenta = containerLogo + containerRegistro + containerIniciarSecion ;
  return IniciarSecionConCuenta;
};