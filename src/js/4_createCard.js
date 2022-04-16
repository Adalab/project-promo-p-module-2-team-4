'use strict';

// Variables de createCard
const buttonCreateCard = document.querySelector('.js_buttonCreateCard');
const containerDone = document.querySelector('.js_containerDone');

// Funciones con "una" única acción

function fetchCardLink() {
  fetch('//awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      containerDone.classList.remove('collapsed');

      // Crear <h2>
      const containerDoneTitle = document.createElement('h2');
      containerDoneTitle.classList.add('containerDone__title');
      const containerDoneTitleContent = document.createTextNode(
        '¡Bien hecho! Tu tarjeta ha sido creada'
      );
      containerDoneTitle.appendChild(containerDoneTitleContent);

      // Crear <a>
      const containerDoneLink = document.createElement('a');
      containerDoneLink.href = result.cardURL;
      containerDoneLink.target = '_blanck';
      containerDoneLink.classList.add('containerDone__link');
      const containerDoneLinkContent = document.createTextNode(result.cardURL);
      containerDoneLink.appendChild(containerDoneLinkContent);

      // Crear <button>
      const buttonShare = document.createElement('button');
      buttonShare.classList.add('js-buttonShare');
      const iconShare = document.createElement('i');
      iconShare.classList.add('fa-brands', 'fa-twitter');
      const buttonShareContent = document.createTextNode(
        ' Compartir en Twitter'
      );
      buttonShare.append(iconShare, buttonShareContent);

      // Insertar los elementos en el containerDone
      containerDone.append(containerDoneTitle, containerDoneLink, buttonShare);
    });
}

function validateFormFields() {
  if (
    data.name !== '' &&
    data.job !== '' &&
    data.phone !== '' &&
    data.email !== '' &&
    data.linkedin !== '' &&
    data.github !== '' &&
    data.photo !== ''
  ) {
    fetchCardLink();
  } else {
    containerDone.classList.remove('collapsed');

    // Crear <h2> error
    const containerDoneTitle = document.createElement('h2');
    containerDoneTitle.classList.add('containerDone__title');
    const containerDoneTitleContent = document.createTextNode(
      '¡Ojo! Rellena todo el formulario'
    );
    containerDoneTitle.appendChild(containerDoneTitleContent);

    containerDone.appendChild(containerDoneTitle);
  }
}

/* function validationFormFields() {
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
  containerDone.innerHTML = html;
} */

// Función manejadora
function handleClickButtonCreateCard(event) {
  event.preventDefault();

  validateFormFields();
  createCard();
}

// Evento
buttonCreateCard.addEventListener('click', handleClickButtonCreateCard);
