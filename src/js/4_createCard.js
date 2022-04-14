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

  createCard();
}



// Evento
buttonCreateCard.addEventListener('click', handleClickButtonCreateCard);