'use strict';
// Colapsar DISEÑA
designLegend.addEventListener('click', () => {
  design.classList.toggle('collapsed');
  arrowDesign.classList.toggle('rotate');
});

// Colapsar RELLENA
fillLegend.addEventListener('click', () => {
  fill.classList.toggle('collapsed');
  arrowFill.classList.toggle('rotate');
});

// Colapsar COMPARTE
shareLegend.addEventListener('click', () => {
  share.classList.toggle('collapsed');
  arrowShare.classList.toggle('rotate');
});
