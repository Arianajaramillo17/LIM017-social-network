import { onNavigate } from '../main.js';
import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,

} from "../firebase/conectorFB.js";

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
    <form id="task-form">
      <textarea class="input-post" id="task-description" placeholder="¿Qué estas pensando?"></textarea>
      <button class="btnPost" type="image"> <img src="./image/loadImage.png" height ="40"/></button>
      <button class="btnPost" id="btn-task-form" type="image"> <img src="./image/finishPost.png" height ="40"/></button>
      </form><br>
      <p>LO MÁS VISTO HOY:</p><br>
      <div class="col-md-6" id="tasks-container"></div>
      </div>
  </section>

  </section>     `;
 
  rootElement.innerHTML = button2;

  const SignOff = document.getElementById('finishSesion');
  SignOff.addEventListener('click', () => {
    swal({
      text: "Seguro que desea cerrar sesion?",
      icon: "error",
      buttons: ["SI","NO"] ,
      dangerMode: true,
    })
    .then((result) => {
      //no salir
      if(result){
       // window.location.reload()
    }else{
      //volver al inicio
        location.href=("/")
    }
    })
  });

  const hamburguer = document.getElementById('iconBurger');
  const navMenu = document.querySelector('.containerCategories');

  hamburguer.addEventListener('click', responsive);
  function responsive() {
    navMenu.classList.toggle('active');
  }
/////////////////////////////
const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const newPost = doc.data();
      tasksContainer.innerHTML += `
       <div class="showPost">
      <p><h4 class="post-text">${newPost.description}</h4><p><br>
       <button class="btn btn-primary btn-delete" data-id="${doc.id}">
      🗑 Eliminar
    </button>
    <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
    📌 Editar
    </button>
      </div>
    </div>
  </div>
  <br> `;
    });
    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {
        try {
          await deleteTask(dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );

    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          taskForm["task-description"].value = task.description;

          editStatus = true;
          id = doc.id;
          taskForm["btn-task-form"];
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const description = taskForm["task-description"]
  try {
    if (!editStatus) {
      await saveTask( description.value);
    } else {
      await updateTask(id, {
        description: description.value,
      });
      editStatus = false;
      id = "";
      taskForm["btn-task-form"];
    }
    taskForm.reset();
    //title.focus();
  } catch (error) {
    console.log(error);
  }
});
};

/* ejemplo de post
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
*/