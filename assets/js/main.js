/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* icon */
/* phoenix */
PIcon1 = document.hetElementById('PIcon1');
PIcon2 = document.hetElementById('PIcon2');
PIcon3 = document.hetElementById('PIcon3');
PIcon4 = document.hetElementById('PIcon4');
/* jeff */
JIcon1 = document.hetElementById('JIcon1');
JIcon2 = document.hetElementById('JIcon2');
JIcon3 = document.hetElementById('JIcon3');
JIcon4 = document.hetElementById('JIcon4');
/* sova */
SVIcon1 = document.hetElementById('SVIcon1');
SVIcon2 = document.hetElementById('SVIcon2');
SVIcon3 = document.hetElementById('SVIcon3');
SVIcon4 = document.hetElementById('SVIcon4');
/* sage */
SGIcon1 = document.hetElementById('SGIcon1');
SGIcon2 = document.hetElementById('SGIcon2');
SGIcon3 = document.hetElementById('SGIcon3');
SGIcon4 = document.hetElementById('SGIcon4');
function IconDP() {
  /* phoenix */
  PIcon1.src = '/img/icon/phoenix-b1.png'
  PIcon2.src = '/img/icon/phoenix-b2.png'
  PIcon3.src = '/img/icon/phoenix-b3.png'
  PIcon4.src = '/img/icon/phoenix-b4.png'
}
function IconDJ(){
  /* jeff */
  JIcon1.src = '/img/icon/jeff-b1.png'
  JIcon2.src = '/img/icon/jeff-b2.png'
  JIcon3.src = '/img/icon/jeff-b3.png'
  JIcon4.src = '/img/icon/jeff-b4.png'
}
function IconDSV(){
  /* sova */
  SVIcon1.src = '/img/icon/sova-b1.png'
  SVIcon2.src = '/img/icon/sova-b2.png'
  SVIcon3.src = '/img/icon/sova-b3.png'
  SVIcon4.src = '/img/icon/sova-b4.png'
}
function IconDSG(){
  /* sage */
  SGIcon1.src = '/img/icon/sage-b1.png'
  SGIcon2.src = '/img/icon/sage-b2.png'
  SGIcon3.src = '/img/icon/sage-b3.png'
  SGIcon4.src = '/img/icon/sage-b4.png'
}
function IconLP() {
  /* phoenix */
  PIcon1.src = '/img/icon/phoenix-a1.png'
  PIcon2.src = '/img/icon/phoenix-a2.png'
  PIcon3.src = '/img/icon/phoenix-a3.png'
  PIcon4.src = '/img/icon/phoenix-a4.png'
}
function IconLJ(){
  /* jeff */
  JIcon1.src = '/img/icon/jeff-a1.png'
  JIcon2.src = '/img/icon/jeff-a2.png'
  JIcon3.src = '/img/icon/jeff-a3.png'
  JIcon4.src = '/img/icon/jeff-a4.png'
}
function IconLSV(){
  /* sova */
  SVIcon1.src = '/img/icon/sova-a1.png'
  SVIcon2.src = '/img/icon/sova-a2.png'
  SVIcon3.src = '/img/icon/sova-a3.png'
  SVIcon4.src = '/img/icon/sova-a4.png'
}
function IconLSG(){
  /* sage */
  SGIcon1.src = '/img/icon/sage-a1.png'
  SGIcon2.src = '/img/icon/sage-a2.png'
  SGIcon3.src = '/img/icon/sage-a3.png'
  SGIcon4.src = '/img/icon/sage-a4.png'
}