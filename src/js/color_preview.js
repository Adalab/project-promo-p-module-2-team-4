'use strict';

//CONSTANTES del PREVIEW.HTML
//OPCIÓN DEFINITIVA PARA LAS PALETTES
const radioButton1 = document.querySelector('.js_radio-1');
const radioButton2 = document.querySelector('.js_radio-2');
const radioButton3 = document.querySelector('.js_radio-3');
const previewContainerCard = document.querySelector('.js_preview');


function handleClickRadio1(event) {
  previewContainerCard.classList.remove('palette-2');
  previewContainerCard.classList.remove('palette-3');

  previewContainerCard.classList.add('palette-1');
}

function handleClickRadio2(event) {
  previewContainerCard.classList.remove('palette-1');
  previewContainerCard.classList.remove('palette-3');

  previewContainerCard.classList.add('palette-2');
}

function handleClickRadio3(event) {
  previewContainerCard.classList.remove('palette-1');
  previewContainerCard.classList.remove('palette-2');

  previewContainerCard.classList.add('palette-3');
}


radioButton1.addEventListener('click', handleClickRadio1);
radioButton2.addEventListener('click', handleClickRadio2);
radioButton3.addEventListener('click', handleClickRadio3);
