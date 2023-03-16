class ButtonCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // sets and returns 'this.shadowRoot'
    const wrapper = document.createElement("span");
    wrapper.className = "wrapper";
    
    let numClicks = 0;
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `Times Clicked ${numClicks}`;

    function changeClicks() {
      button.textContent = `Times Clicked: ${++numClicks}`
    }

    button.addEventListener("click", 
    function(){
      changeClicks()
    }, false);
    const style = document.createElement("style");
    style.textContent = `
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      color: var(--font-color);
      background-color: var(--bg-color);
      border: none;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }`;
    wrapper.appendChild(button);
    this.shadowRoot.append(style, wrapper);
  }
}

customElements.define("button-count", ButtonCount);
