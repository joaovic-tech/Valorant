/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    document.querySelector('#menu-news').style.display = 'none'
    document.querySelector('#menu-discover').style.display = 'none'
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('.menu-link')
for (const link of links) {
  if(link.id == 'dis' || link.id == 'new'){
    aparecerMenu()
  }else{
    link.addEventListener('click', function () {
      nav.classList.remove('show')
    })
  }
}

/* change icon to dark */
/* phoenix */
function IconDP() {
  for(pnx = 1; pnx <= 4; pnx++){    
    document.getElementById(`PIcon${pnx}`).src = `/img/icon/phoenix-b${pnx}.png`
  }
}
/* jett */
function IconDJ() {
  for(jt = 1; jt <= 4; jt++){
    document.getElementById(`JIcon${jt}`).src = `/img/icon/jett-b${jt}.png`
  }
}
/* sova */
function IconDSV() {
  for(sv = 1; sv <= 4; sv++){
    document.getElementById(`SVIcon${sv}`).src = `/img/icon/sova-b${sv}.png`
  }
}
/* sage */
function IconDSG() {
  for(sg = 1; sg <= 4; sg++){
    document.getElementById(`SGIcon${sg}`).src = `/img/icon/sage-b${sg}.png`
  }
}
/* change icon to light */
function IconLP() {
  for(pnx = 1; pnx <= 4; pnx++){    
    document.getElementById(`PIcon${pnx}`).src = `/img/icon/phoenix-a${pnx}.png`
  }
}
/* jett */
function IconLJ() {
  for(jt = 1; jt <= 4; jt++){
    document.getElementById(`JIcon${jt}`).src = `/img/icon/jett-a${jt}.png`
  }
}
/* sova */
function IconLSV() {
  for(sv = 1; sv <= 4; sv++){
    document.getElementById(`SVIcon${sv}`).src = `/img/icon/sova-a${sv}.png`
  }
}
/* sage */
function IconLSG() {
  for(sg = 1; sg <= 4; sg++){
    document.getElementById(`SGIcon${sg}`).src = `/img/icon/sage-a${sg}.png`
  }
}

/* Aparecer/Desaparecer Mneu do menu */
function aparecerMenu(menu) {
  document.getElementById(menu).style.display = 'grid';
}

function desapareserMenu(menu){
  document.getElementById(menu).style.display = 'none';
}