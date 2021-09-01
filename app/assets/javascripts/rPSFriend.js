

window.addEventListener("click", buttons)

function buttons() {
  let button = document.getElementsByTagName('button');
  if (button.length !== 0) {
    button[1].remove()
  }
}
