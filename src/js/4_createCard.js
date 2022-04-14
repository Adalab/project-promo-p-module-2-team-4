'use strict';

// Variables de createCard
const buttonCreateCard = document.querySelector('.js_buttonCreateCard');
const containerDone = document.querySelector('.js_containerDone');

// Funciones con "una" única acción
function createCard() {
  buttonCreateCard.classList.add('buttonCreateCard--sent');

  containerDone.classList.remove('collapsed');
}

// Función manejadora
function handleClickButtonCreateCard(event) {
  event.preventDefault();
  validationFormFields();
  createCard();
}

// Las Constantes de los elementos de la tarjeta están en g_fill.js

function ifCardCanBeCreate() {
  if (
    data.name !== '' &&
    data.job !== '' &&
    data.phone !== '' &&
    data.email !== '' &&
    data.linkedin !== '' &&
    data.github !== '' &&
    data.photo !== ''
  ) {
    return true;
  } else {
    return false;
  }
}

function validationFormFields() {
  let html = '';
  if (ifCardCanBeCreate()) {
    html += `<h2 class="containerDone__title">¡Bien hecho! Tu tarjeta ha sido creada</h2>`;
    html += `<a href="" class="containerDone__link"
    >https://awesome-profile-card.com?id=A456DF0001</a>`;
    html += `<button class="buttonShare">
    <i class="fa-brands fa-twitter"></i> Compartir en Twitter
  </button>`;
  } else {
    html = `<h2 class="containerDone__title">¡Ojo! Rellena todo el formulario</h2>`;
  }
  containerCreateCard.innerHTML = html;
}

// Evento
buttonCreateCard.addEventListener('click', handleClickButtonCreateCard);
