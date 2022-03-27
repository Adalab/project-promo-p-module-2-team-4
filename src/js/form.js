'use strict';

const design = document.querySelector('.js_design');
/* const fill = document.querySelector('.js_fill');
const share = document.querySelector('.js_share'); */
const designLegend = document.querySelector('.js_designLegend');
/* const fillLegend = document.querySelector('.js_fillLegend');
const shareLegend = document.querySelector('.js_shareLegend');
const arrowDesign = document.querySelector('.js_arrowDesign');
const arrowFill = document.querySelector('.js_arrowFill');
const arrowShare = document.querySelector('.js_arrowShare'); */


function toggleCollapsed() {

  design.classList.toggle('collapsed');
  console.log('Holiskiwiskis!');

}

designLegend.addEventListener('click', toggleCollapsed);

/* function turnArrow(arrowIcon) {

  arrowIcon.classList.toggle('legend__icon--arrowTurn');

}


function addCollapsed(section) {

  if (section.classList.contains('collapsed')) {

  console.log('Holis!');

} else {

  section.classList.add('collapsed');

}

}


function handleClick(section, section2, section3, arrowIcon) {

  toggleCollapsed(section);

  addCollapsed(section2);
  addCollapsed(section3);

  turnArrow(arrowIcon);

}

designLegend.addEventListener('click', handleClick(design, fill, share, arrowDesign));
fillLegend.addEventListener('click', handleClick(fill, design, share, arrowFill));
shareLegend.addEventListener('click', handleClick(share, fill, design, arrowShare)); */