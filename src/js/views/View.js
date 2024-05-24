class View {
  _data;

  clearContainer() {
    this._parentElement.innerHTML = '';
  }

  #insertMarkup(markup) {
      this.clearContainer();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);  
  }

  render(data) {
    this._data = data;
    this.#insertMarkup(this._generateMarkup());
  }
}

export default View;
