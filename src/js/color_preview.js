'use strict';

//CONSTANTES del PREVIEW.HTML

/* OPCIONES INICIALES
//Constantes campos para cumplimentar
const nameLastname = document.querySelector ('.js_cardName');
const description = document.querySelector ('.js_cardJob');

//Constantes elementos estéticos
const elementBorder = document.querySelector ('.js_cardInfo');

//Constantes circulo iconos redes sociales
const circleIcons = document.querySelector ('.js_cardIcon');

//Constantes icons redes sociales
const rrssIcons = document.querySelector ('.js_cardLink');
*/

//Constantes palette colors
/*const palette1 = document.querySelector ('.radio01');
const palette2  = document.querySelector ('.radio02');
const palette3 = document.querySelector ('.radio03');*/

//OPCIÓN DEFINITIVA PARA LAS PALETTES
const radioButton1 = document.querySelector('.js_radio-1');
const radioButton2 = document.querySelector('.js_radio-2');
const radioButton3 = document.querySelector('.js_radio-3');
const previewContainer = document.querySelector('.js_preview');

function handleClickRadio1 (event){
  previewContainer.classList.add('palette1');
}
function handleClickRadio2 (event){
  previewContainer.classList.add('palette2');
}
function handleClickRadio3 (event){
  previewContainer.classList.add('palette3');
}


radioButton1.addEventListener('click', handleClickRadio1);
radioButton2.addEventListener('click', handleClickRadio2);
radioButton3.addEventListener('click', handleClickRadio3);

//OPCIÓN "dificil" IVAN
/*const allRadioButtons = document.querySelectorAll('.js_radio');


for( const  eachRadioButton   of    allRadioButtons   ) {
  eachRadioButton.addEventListener('click', handleClickRadioUnique);
}*/


