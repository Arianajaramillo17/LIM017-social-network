/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import {
  onGetTasks,
  saveTask,
  deleteTask,
  getTask,
  updateTask,
} from './datosCrud.js';

export const MenuHome = (rootElement) => {
  const button2 = `
  <section class="MenuHome">
  <section>
      <nav class="navUp">
      <ol class="nav-sesionFinish">
        <img class="iconSesionFinish" id="imageUserProfile" src="./image/User.jpg" height="50" />
        <p class="iconSesionFinish" id="nameUser">al </p> <br/>
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
     <button class="btnPost" type="image" id="selbtn"> <img src="./image/loadImage.png" height ="40"/></button>
      <button class="btnPost" id="btn-task-form" type="image"> <img src="./image/finishPost.png" height ="40"/></button>
      
      </form><br>
      <p>LO MÁS VISTO HOY:</p><br>
      <div class="col-md-6" id="tasks-container"></div>
      </div>
  </section>
  </section> `;
  /* eslint-disable no-param-reassign */
  rootElement.innerHTML = button2;

  const SignOff = document.getElementById('finishSesion');
  SignOff.addEventListener('click', () => {
    // eslint-disable-next-line
    swal({
      text: 'Seguro que desea cerrar sesion?',
      icon: 'error',
      buttons: ['SI', 'NO'],
      dangerMode: true,
    })
      .then((result) => {
        if (result) {
          console.log('no cerro sesion');
        } else {
          /* volver al inicio */
          onNavigate('/');
        }
      });
  });

  const hamburguer = document.getElementById('iconBurger');
  const navMenu = document.querySelector('.containerCategories');

  function responsive() {
    navMenu.classList.toggle('active');
  }
  hamburguer.addEventListener('click', responsive);

  const taskForm = document.getElementById('task-form');
  const tasksContainer = document.getElementById('tasks-container');

  let editStatus = false;
  let id = '';

  window.addEventListener('DOMContentLoaded', async () => {
    onGetTasks((querySnapshot) => {
      tasksContainer.innerHTML = '';
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
      const btnsDelete = tasksContainer.querySelectorAll('.btn-delete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          try {
            await deleteTask(e.target.dataset.id);
          } catch (error) {
            console.log(error);
          }
        });
      });

      const btnsEdit = tasksContainer.querySelectorAll('.btn-edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          try {
            const doc = await getTask(e.target.dataset.id);
            const task = doc.data();
            taskForm['task-description'].value = task.description;

            editStatus = true;
            id = doc.id;
            /* eslint-disable no-unused-expressions */
            taskForm['btn-task-form'];
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });

  taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const description = taskForm['task-description'];
    try {
      if (!editStatus) {
        await saveTask(description.value);
      } else {
        await updateTask(id, {
          description: description.value,
        });
        editStatus = false;
        id = '';
        taskForm['btn-task-form'];
      }
      taskForm.reset();
    } catch (error) {
      console.log(error);
    }
  });
};
