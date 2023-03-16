export {getFormData, makeRequest}
function getFormData() {
  const id = document.getElementById("id").value;
  const name = document.getElementById("article_name").value;
  const body = document.getElementById("article_body").value;
  const date = document.getElementById("article_date").value;
  return `id=${encodeURI(id)}&article_name=${encodeURI(name)}&article_body=${encodeURI(body)}&article_date=${encodeURI(date)}`;
}

function makeRequest(type) {
  const url = type == "get" || type =="delete" ? "?" +  getFormData()  : "";
  const bod = type == "post" || type == "put" ? getFormData() : null;
  fetch( `https://httpbin.org/${type}${url}`, {
    method: `${type.toUpperCase()}`,
    body: bod
  })
  .catch(() => {
    console.log("Fail zone");
  })
  .then((res) => {
    if (res) {
      res.json().then((json) => {
        document.getElementById("response").innerHTML = JSON.stringify(json, null, 2);
      });
    } else {
      console.log("error", res);
    }     
  });
}