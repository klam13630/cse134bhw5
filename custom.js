export { dialogMakeAlert, dialogMakePrompt, dialogAppendInputText, dialogAppendInputDate, dialogAppendInputTextArea }

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