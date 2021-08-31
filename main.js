//Selecionar os elementos
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const darkModeClass = 'dark-mode'

function changeMode() {
  changeClasses()
  changeText()
}

function changeClasses() {
  button.classList.toggle(darkModeClass)
  h1.classList.toggle(darkModeClass)
  body.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
}

function changeText() {
  if (button.classList.contains(darkModeClass)) {
    button.innerHTML = 'Light Mode'
    h1.innerHTML = 'Dark Mode ON'
    return //necessário pra sair da função
  }

  button.innerHTML = 'Dark Mode'
  h1.innerHTML = 'Light Mode ON'
}

button.addEventListener('click', changeMode)
