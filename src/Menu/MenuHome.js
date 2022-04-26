import { onNavigate } from '../main.js';

export const MenuHome = (rootElement) => {
  const button2 = `
  <section class="MenuHome">
  <section>
      <nav class="navUp">
      <ol class="nav-sesionFinish">
        <img class="iconSesionFinish" id="imageUserProfile" src="./image/User.jpg" height="50" />
        <p class="iconSesionFinish" id="nameUser">ALICIA</p> <br/>
        <a class="iconSesionFinish" id="finishSesion" href="#"><img src="./image/finishSesion.png" height ="45"/></a>
      </ol>
      </nav>

      <nav class="navPhone">
        <ol class="nav-bar">
          <img class="logoMenu" src="./image/logoSinLetras.png"  height ="240"/>
          <a class="navMenuHome" id="iconBurger" href="/NavMenu"><img src="./image/iconBurger.png" height ="45"/></a>
          <a class="navMenuHome" id="iconHome" href="/MenuHome"><img src="./image/iconHome.png" height ="45"/><h1 class= "description">INICIO</h1></a>
          <a class="navMenuHome" id="IconProfile" href="#"><img src="./image/iconProfile.png" height ="43"/><h1 class= "description"> MI PERFIL</h1></a>
          <hr>
            <div class="containerCategories">
              <h1 class="titleCategories">Categorías :</h1><br/>
              <li><a class="categories" id="AnimeSelector" href="#"><img class="iconMenu" src="./image/anime.jpg" height ="60"/>ANIME</a></li><br>
              <li><a class="categories" id="DoramasSelector" href="#"><img class="iconMenu" src="./image/doramas.jpg" height ="60"/>DORAMAS</a></li><br>
              <li><a class="categories" id="KpopSelector" href="#"><img class="iconMenu" src="./image/kpop.jpg" height ="60"/>KPOP</a></li><br>
              <li><a class="categories" id="NewsSelector" href="#"><img class="iconMenu" src="./image/news.jpg" height ="60"/>NEWS</a></li>
            </div>
        </ol>
      </nav>
  </section>

  <section class="containerPost">
    <div class="createPost">
      <textarea class="input-post" id="text-post" placeholder="¿Qué estas pensando?"></textarea>
      <button class="btnPost" type="image"> <img src="./image/loadImage.png" height ="40"/></button>
      <button class="btnPost" id="btnPost" type="image"> <img src="./image/finishPost.png" height ="40"/></button>
    </div>

    <div class="newPost">
      <p>LO MÁS VISTO HOY:</p><br>
      <div class="showPost">
        <img class="iconSesionFinish" id="imageUserProfile" src="./image/User.jpg" height="40"/><br>
        <p class="iconSesionFinish" id="nameUser">ALICIA</p><br><br>
        <h4 class="post-text">Bla bla bla bla ... </h4><br>
        <img id="imagePost" src="./image/imagePostA.jpg" width="100%"/><br><br>

        <textarea class="comment-post" id="comment-post" placeholder="Agregar comentario"></textarea>
        <button class="btnPost" id="btnCommentPost" type="image"> <img src="./image/finishPost.png" height ="40"/></button>
      </div>
    </div>
  </section>

  </section>
      `;
  rootElement.innerHTML = button2;

  const IniciarSecion = document.getElementById('finishSesion');
  IniciarSecion.addEventListener('click', () => {
    onNavigate('/');
  });

  const hamburguer = document.getElementById('iconBurger');
  const navMenu = document.querySelector('.containerCategories');

  hamburguer.addEventListener('click', responsive);

  function responsive() {
    navMenu.classList.toggle('active');
  }
};
