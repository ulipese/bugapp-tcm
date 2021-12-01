//DARK MODE
const html = document.querySelector('html')
const darkBtn = document.querySelector('.dark-mode-icon')

darkBtn.addEventListener('click', () => {
  html.classList.toggle('dark-mode')
  if(html.classList.contains('dark-mode')) {
    darkBtn.src = "../../assets/icons/sun.svg"
  } else {
    darkBtn.src = "../../assets/icons/moon.svg"
  }
})

// BURGER MENU
const menuBtn = document.querySelector('.header__menu') //seleciona o elemento do button
const asideModal = document.querySelector('.aside-modal')
let menuOpen = false
menuBtn.addEventListener('click', () => {
  //cria uma função anônima onde ao ocorrer o  evento 'click', a função é ativada
  menuBtn.classList.toggle('open') //tira ou coloca a class 'open' se estiver ou não com ela
  asideModal.classList.toggle('selected') //faz com que o aside apareça tirando e colocando a classe 'selected'
})

//MUDAR AS CORES DOS LINKS AO CLICAR
setInterval(function () {
  //setInterval dispara a função anônima a cada 500ms
  for (let i = 0; i < 5; i++) {
    //se 'i' for menor que o o tamanho de 'links', 'i' aumenta em 1
    if (document.links[i].href == document.URL) {
      //compara o href de cada link com o url do site
      document.links[i].style.color = 'var(--dark-yellow)'
    } else {
      document.links[i].style.color = 'var(--very-white)'
    }
  }
}, 500)

// FAZ COM QUE SÓ UM FAQ SEJA SELECIONADO POR VEZ
