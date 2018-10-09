//Ciblage du DOM
const tabLinks = document.getElementsByClassName('tabLink');
const sections = document.getElementsByTagName('section');

let activeTabIndex = 0;

/**
*@desc met un écouteur d'évenement sur les liens
*/
function addEvents(){
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener('click', e =>{
      sections[activeTabIndex].style.display = 'none';
      tabLinks[activeTabIndex].classList.remove('active');
      sections[i].style.display = 'block';
      tabLinks[i].classList.add('active');
      activeTabIndex = i;
    });
  }
}

/**
*@desc initialisation
*/
function init(){
  tabLinks[activeTabIndex].classList.add('active');
  addEvents();
}

init();
