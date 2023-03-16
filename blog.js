export {makeBlogPost, deleteBlogPost}
    
function makeBlogPost(root, title, date, summary, id) {
  const section = document.createElement("section");
  section.className = "blog-post";
  const t = document.createElement("h2");
  const d = document.createElement("p");
  const s = document.createElement("p");
  const edit = document.createElement("button");
  const del = document.createElement("button");
  edit.type = "button"
  edit.className = "edit";
  del.type = "button";
  del.className = "del";
  edit.innerHTML = "&#9998;";
  del.innerHTML = "&#128465;";
  section.id = id;
  t.innerText = title;
  t.className = "title";
  let text = "Date: ";
  text = text.concat(date);
  d.innerText = text;
  d.className = "date";
  text = "Summary: ";
  text = text.concat(summary);
  s.innerText = text;
  s.className = "summary";
  section.appendChild(t);
  section.appendChild(d);
  section.appendChild(s);
  section.appendChild(edit);
  section.appendChild(del);
  root.appendChild(section);
  // return these so we can use them in the module and purify input in the click event
  return [edit, del];
}

function deleteBlogPost(id, obj) {
  const post = document.querySelector(`[id="${id}"] `);
  //console.log("something was deleted");
  //console.log(post.innerHTML);
  post.remove();
  const index = obj["posts"].findIndex(o => o.id === id);
  obj["posts"].splice(index, 1);
  return obj;
}

