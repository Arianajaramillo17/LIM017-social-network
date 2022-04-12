export const NewUser = () => {
    const containerLogo = `<p class="titleNewUser">iniciar registro</p>`;
    const containerRegistro = `<p>Subir foto de perfil</p>
                                <input></input>
                                <p>Nombre</p>
                                <input></input>
                                <p>Correo</p>
                                <input></input>
                                <p>Contraseña</p>
                                <input></input>`;                            
    const containerCrearCuenta = `<p>
    <button class="button" id="BotonCrearCuenta">Crear Cuenta</button>
                              `;
   
    const RegisterNewUser = containerLogo + containerRegistro + containerCrearCuenta ;
    return RegisterNewUser;
  };