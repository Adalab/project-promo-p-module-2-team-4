'use strict';


function handleClickButtonCreateCard(event) {
  event.preventDefault();

  containerDone.innerHTML = '';

    fetch('//awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        if(result.success) {
        
          containerDone.classList.remove('collapsed');

          // Crear <h2>
          const containerDoneTitle = document.createElement('h2');containerDoneTitle.classList.add('containerDone__title');
          const containerDoneTitleContent = document.createTextNode('¡Bien hecho! Tu tarjeta ha sido creada');
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
          buttonShare.classList.add('buttonShare');
          const iconShare = document.createElement('i');
          iconShare.classList.add('fa-brands', 'fa-twitter');
          const buttonShareContent = document.createTextNode(' Compartir en Twitter');
          buttonShare.append(iconShare, buttonShareContent);

          // Insertar los elementos en el containerDone
          containerDone.append(containerDoneTitle, containerDoneLink, buttonShare);

        } else {

          containerDone.classList.remove('collapsed');

          // Crear <h2>
          const containerDoneTitle = document.createElement('h2');containerDoneTitle.classList.add('containerDone__title');
          const containerDoneTitleContent = document.createTextNode('¡Ojo! Rellena todo el formulario');
          containerDoneTitle.appendChild(containerDoneTitleContent);

          containerDone.appendChild(containerDoneTitle);

        }

      });

}


  buttonCreateCard.addEventListener('click', handleClickButtonCreateCard);
