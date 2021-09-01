

window.addEventListener("click", buttons)

function buttons() {
  let buttons = document.getElementsByTagName('button');
  if (buttons.length !== 0) {
    buttons[1].remove()
  }
}
