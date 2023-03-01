export {showAlert, showConfirm, showPrompt, closeYes, closeNo, closeDialog, pressYes, pressNo};
let type;
// When the user clicks on the button, open the dialog
function showAlert(msg) {
  document.getElementById("myDialog").style.display = "block";
  document.getElementById("dialog-input").style.display = "none";
  document.querySelector(".yes").style.display = "none";
  document.querySelector(".no").style.display = "none";
  document.querySelector(".close").style.display = "block";
  document.querySelector("#myDialog > .dialog-content > p").innerText = msg;
  document.getElementById("out").innerHTML = "";
}

function showConfirm(msg) {
  document.getElementById("myDialog").style.display = "block";
  document.getElementById("dialog-input").style.display = "none";
  document.querySelector(".yes").style.display = "block";
  document.querySelector(".no").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.querySelector("#myDialog > .dialog-content > p").innerText = msg;
  document.getElementById("out").innerHTML = "";
  type = "confirm";
}

function showPrompt(msg, placeholder, safe) {
  document.getElementById("myDialog").style.display = "block";
  document.getElementById("dialog-input").style.display = "block";
  document.getElementById("dialog-input").placeholder = placeholder;
  document.querySelector(".yes").style.display = "block";
  document.querySelector(".no").style.display = "block";
  document.querySelector(".close").style.display = "none";
  document.getElementById("safe").checked = safe;
  document.querySelector("#myDialog > .dialog-content > p").innerText = msg;
  document.getElementById("out").innerHTML = "";
  type = "prompt-";
  type = type.concat(safe ? "safe" : "unsafe");
  console.log(type);
}

function pressYes(){
  closeDialog();
  return type == "confirm" ? true : document.getElementById("dialog-input").value;
}

function pressNo() {
  closeDialog();
  return type == "confirm" ? false : null;
}
function closeYes() {
  let msg = document.getElementById("dialog-input").value;
  msg = type == "confirm" ? "true" : msg;
  document.getElementById("out").innerHTML = `The value returned by the ${type} method is: ${msg}.`;
  closeDialog();
}

function closeNo() {
  let msg = document.getElementById("dialog-input").value;
  msg = type == "confirm" ? "false" : "User did not enter a value";
  document.getElementById("out").innerHTML = `The value returned by the ${type} method is: ${msg}.`;
  closeDialog();
}

function closeDialog() {
  document.getElementById("dialog-input").value = "";
  document.getElementById("myDialog").style.display = "none";
}

