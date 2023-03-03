
export {addLabel, addText, addInputDate, addInputText, addInputTextArea}

function addLabel(root, text, id) {
  const label = document.createElement("label");
  label.for = id;
  label.innerText = text;
  root.appendChild(label);
  return label;
}

function addText(root, text) {
  const p = document.createElement("p");
  p.innerText = text;
  root.appendChild(p);
  return p;
}

function addInputDate(root, id) {
    const input = document.createElement("input");
    input.type = "date";
    input.className = "dialog-input";
    input.id = id;
    root.appendChild(input);
    return input;
}

function addInputText(root, placeholder, id) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  input.name = id;
  input.id = id;
  input.className = "dialog-input";
  root.appendChild(input);
  return input;
}

function addInputTextArea(root, placeholder, id) {
  const input = document.createElement("textarea");
  input.placeholder = placeholder;
  input.name = id;
  input.id = id;
  input.className = "dialog-input";
  root.appendChild(input);
  return input;
}
