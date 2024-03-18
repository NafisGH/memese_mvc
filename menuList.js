// Код выпадающего списка категории
const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

let selectedCategory; // Переменная для хранения выбранной категории

// Toggle menu Меню переключения
selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Закрыть при нажатии на опцию
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener("click", (evt) => {
      // selectSingle_title.textContent = evt.target.textContent;
      selectedCategory = evt.target.textContent; // Записываем выбранную категорию в переменную
      selectSingle_title.textContent = selectedCategory; // Обновляем текст заголовка
      selectSingle.setAttribute("data-state", ""); // Закрываем меню
    });
  }