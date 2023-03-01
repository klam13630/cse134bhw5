export { dialogMakeAlert, dialogMakePrompt, dialogAppendYes, dialogAppendNo, dialogAppendInputText, dialogAppendInputDate, dialogAppendInputTextArea, showDialog, closeDialog }

function dialogMakeAlert() {
  const content = document.getElementById("dialog-content");
  content.textContent = '';
  const text = document.createElement("p");
  text.className = "dialog-text";
  content.appendChild(text);
}

function dialogMakePrompt() {
  const content = document.getElementById("dialog-content");
  content.textContent = '';
  const text = document.createElement("p");
  text.className = "dialog-text";
  const no = document.createElement("button");
  content.appendChild(text);
}

function dialogAppendInputDate(id) {
  const content = document.getElementById("dialog-content");
  const lab = document.createElement("label");
  lab.className = "dialog-label";
  lab.innerText = "Date:";
  lab.htmlFor = id;
  const input = document.createElement("input");
  input.type = "date";
  input.className = "dialog-input";
  input.id = id;
  const br = document.createElement("br");
  const br2 = document.createElement("br");
  content.appendChild(lab);
  content.appendChild(br2);
  content.appendChild(input);
  content.appendChild(br);
  return input;
}

function dialogAppendInputText(label, placeholder, id) {
  const content = document.getElementById("dialog-content");
  const lab = document.createElement("label");
  lab.className = "dialog-label";
  lab.innerText = label.concat(":");
  lab.htmlFor = id;
  const input = document.createElement("input");
  input.type = "text";
  input.className = "dialog-input";
  input.placeholder = placeholder;
  input.id = id;
  const br = document.createElement("br");
  const br2 = document.createElement("br");
  content.appendChild(lab);
  content.appendChild(br2);
  content.appendChild(input);
  content.appendChild(br);
  return input;
}

function dialogAppendInputTextArea(label, placeholder, id) {
  const content = document.getElementById("dialog-content");
  const lab = document.createElement("label");
  lab.className = "dialog-label";
  lab.innerText = label.concat(":");
  lab.htmlFor = id;
  const input = document.createElement("textarea");
  input.className = "dialog-input";
  input.placeholder = placeholder;
  input.id = id;
  const br = document.createElement("br");
  const br2 = document.createElement("br");
  content.appendChild(lab);
  content.appendChild(br2);
  content.appendChild(input);
  content.appendChild(br);
  return input;
}

function dialogAppendYes() {
  const content = document.getElementById("dialog-content");
  const yes = document.createElement("button");
  yes.type = "button";
  yes.innerText = "OK";
  yes.className = "yes";
  content.appendChild(yes);
  return yes;
}

function dialogAppendNo() {
  const content = document.getElementById("dialog-content");
  const no = document.createElement("button");
  no.type = "button";
  no.innerText = "Cancel";
  no.className = "no";
  content.appendChild(no);
  return no;
}

function showDialog() {
  const dialog = document.getElementById("myDialog");
  const out = document.getElementById("out");
  if (out) out.value = "";
  dialog.style.display = "block";
}


function closeDialog() {
  const dialog = document.getElementById("myDialog");
  dialog.style.display = "none";
}
