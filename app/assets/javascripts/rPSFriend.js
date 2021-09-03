
window.addEventListener("click", buttons)

function buttons() {

  var button = document.getElementsByTagName('button');
  var userInputBoxOne = document.getElementsByClassName("userInputBox");

  if (button[1]) {
    userInputBoxOne[0].classList = "userInputBox one";
    button[1].remove()
  } else {
    userInputBoxOne[0].classList = "userInputBox";

  }
}
