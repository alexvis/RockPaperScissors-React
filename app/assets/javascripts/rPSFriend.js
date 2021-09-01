
window.addEventListener("click", buttons)

function buttons() {

  let button = document.getElementsByTagName('button');

  if (button.length === 2 ) {
    debugger
    button[1].remove()
  }
}
