class View {
  _data;

  #clearContainer() {
    this._parentElement.innerHTML = '';
  }

  #insertMarkup(markup) {
      this.#clearContainer();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);  
  }

  render(data) {
    this._data = data;
    this.#insertMarkup(this._generateMarkup());
  }

  // Вместо полного ререндеринга, как в методе render, тут меняется только текст в элементах
  // + их атрибуты, что повышает производительность кода + позволяет обращаться к одним и
  // тем же элементам много раз
  update(data) {
    const newMarkup = this._generateMarkup(data);
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const currentElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newElement, i) => {
      const currentElement = currentElements[i];

      if (currentElement.classList.contains('parameter-value__input')) {
        currentElement.readOnly = data.readOnly;
      }

      if (!newElement.isEqualNode(currentElement) && newElement.firstChild?.nodeValue.trim() !== '') {
        currentElement.textContent = newElement.textContent;
      }

      if (!newElement.isEqualNode(currentElement)) {
        Array.from(newElement.attributes).forEach((attribute) => {
          currentElement.setAttribute(attribute.name, attribute.value);
        })
      }
    });
  }
}

export default View;
