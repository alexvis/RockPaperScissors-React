
window.addEventListener("click", buttons)

function buttons() {

  let button = document.getElementsByTagName('button');

  if (button[1]) {
    button[1].remove()
  }
}
