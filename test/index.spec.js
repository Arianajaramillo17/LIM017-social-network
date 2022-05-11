/* import { onNavigate } from '../src/main.js';

jest.mock('../src/firebase/mocks.js');

describe('Función onNavigate', () => {
  it('vista login', () => {
    document.body.innerHTML = '<div id="root"></div>';
    onNavigate('/Login');
    const divRoot = document.querySelector('#login-btn');
    expect(divRoot.textContent).toBe('Iniciar sesion');
  });
});
import {
  NewUser,
} from '../src/Sesion/NewUser.js';

jest.mock('../src/firebase/importFB.js');

describe('Autenticar', () => {
  it('debería ser una funciónn que crea cuenta con google', () => {
    expect(typeof NewUser).toBe('function');
  });
});  */

import { NewUser } from '../src/Sesion/NewUser.js';

jest.mock('../src/firebase/importFB.js');

describe('NewUser()', () => {
  it('El botón de Registrarse se encuentra en register()', () => {
    const result = NewUser();
    const sighUp = result.querySelector('#sighUp');
    sighUp.dispatchEvent(new Event('click'));
    expect(sighUp.textContent).toBe('REGISTRARSE');
  });
});

describe('Autenticar', () => {
  it('crea una cuenta ', () => {
    expect(typeof NewUser).toBe('function');
  });
});
