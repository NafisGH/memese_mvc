class View {
  constructor() {
    this.memsNode = document.querySelector(".column-setup__mems");
    this.wrapperMemesNode = document.querySelector(".__select__content");
    this.memeFotoImg = document.querySelector(".meme-foto");

    this.inputTextUpNode = document.querySelector(
      ".column-setup__input-text-up"
    );
    this.inputTextDawnNode = document.querySelector(
      ".column-setup__input-text-dawn"
    );
    this.textUp = document.querySelector(".text-up");
    this.textDawn = document.querySelector(".text-dawn");
    this.btnAddText = document.querySelector(".btn-add-text");

    // Код выпадающего списка категории
    this.selectSingle = document.querySelector(".__select");
    this.selectSingle_title = document.querySelector(".__select__title");
    this.selectOption = document.querySelectorAll(".__select__option");
    this.selectedCategory;

    this.handleClickMeme = this.handleClickMeme.bind(this); // Привязываем контекст к методу класса
    this.handleClickOpenCloseMenu = this.handleClickOpenCloseMenu.bind(this); // Привязываем контекст к методу класса
    this.handleRenderText = this.handleRenderText.bind(this); // Привязываем контекст к методу класса

    this.wrapperMemesNode.addEventListener("click", this.handleClickMeme);

    this.selectSingle_title.addEventListener(
      "click",
      this.handleClickOpenCloseMenu
    );

    this.btnAddText.addEventListener("click", this.handleRenderText);
  }

  clearInput() {
    this.inputTextUpNode.value = "";
    this.inputTextDawnNode.value = "";
  }
  clearTextContent() {
    this.textUp.textContent = "";
    this.textDawn.textContent = "";
  }

  handleRenderText() {
    this.textUp.textContent = this.inputTextUpNode.value;
    this.textDawn.textContent = this.inputTextDawnNode.value;
    this.clearInput();
  }

  render(mems) {
    this.mems = mems; // Сохраняем массив mems в свойстве экземпляра класса
    mems.forEach((mem) => {
      const nameMem = document.createElement("p");
      nameMem.classList.add("__select__option");
      nameMem.textContent = mem.name;
      this.wrapperMemesNode.append(nameMem);
      this.memsNode.append(this.wrapperMemesNode);
    });
  }

  handleClickOpenCloseMenu() {
    if ("active" === this.selectSingle.getAttribute("data-state")) {
      this.selectSingle.setAttribute("data-state", "");
    } else {
      this.selectSingle.setAttribute("data-state", "active");
    }
  }

  handleClickMeme(event) {
    this.clearTextContent();
    let indexMem = Array.from(event.target.parentElement.children).indexOf(
      event.target
    );
    let clickedObject = this.mems[indexMem];
    this.memeFotoImg.src = clickedObject.url;

    this.selectSingle_title.textContent = clickedObject.name;
    this.clearInput();
    this.selectSingle.setAttribute("data-state", "");
  }
}
