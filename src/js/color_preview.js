'use strict';

//CONSTANTES del PREVIEW.HTML
//OPCIÓN DEFINITIVA PARA LAS PALETTES
const radioButton1 = document.querySelector('.js_radio-1');
const radioButton2 = document.querySelector('.js_radio-2');
const radioButton3 = document.querySelector('.js_radio-3');
const previewContainer = document.querySelector('.js_preview');


function handleClickRadio1 (event) {
  previewContainer.classList.add('palette-1');
}
function handleClickRadio2 (event) {
  previewContainer.classList.add('palette-2');
}
function handleClickRadio3 (event) {
  previewContainer.classList.add('palette-3');
}


radioButton1.addEventListener('click', handleClickRadio1);
radioButton2.addEventListener('click', handleClickRadio2);
radioButton3.addEventListener('click', handleClickRadio3);

//OPCIÓN "dificil" IVAN
/*const allRadioButtons = document.querySelectorAll('.js_radio');


for( const  eachRadioButton   of    allRadioButtons   ) {
  eachRadioButton.addEventListener('click', handleClickRadioUnique);
}*/


