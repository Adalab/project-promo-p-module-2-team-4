'use strict';

console.log(data);

fetch('//awesome-profile-cards.herokuapp.com/card', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    /* if (result.success) {
      urlCard.innerHTML = result.cardURL;
      urlCard.href = result.cardURL;
      createCard.classList.remove('collapsed');
      cardMessage.innerHTML = 'La tarjeta ha sido creada:';
    } else {
      cardMessage.innerHTML = 'Rellena todos los datos del formulario';
    } */
  });