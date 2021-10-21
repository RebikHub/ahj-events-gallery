export default class Gallery {
  constructor(inputName, inputSrc) {
    this.inputName = inputName;
    this.inputSrc = inputSrc;
    this.textName = null;
    this.textSrc = null;
  }

  init(inputButton) {
    this.inputName.addEventListener('input', this.inputNameValue);
    this.inputSrc.addEventListener('input', this.inputSrcValue);
    this.inputName.addEventListener('keyup', this.inputEnter);
    this.inputSrc.addEventListener('keyup', this.inputEnter);

    inputButton.addEventListener('click', this.addBlockWithImg);
  }

  inputNameValue(e) {
    this.textName = e.target.value;
    console.log(this.textName);
  }

  inputSrcValue(e) {
    this.textSrc = e.target.value;
    console.log(this.textSrc);
  }

  inputEnter(e) {
    if (e.key === 'Enter' && this.textTask !== null) {
      this.addBlockWithImg();
      this.inputName.value = null;
      this.inputSrc.value = null;
    }
  }

  // inputButtonClick() {
  //   this.addBlockWithImg();
  // }

  addBlockWithImg() {
    const widget = document.querySelector('.images-list');
    const divImg = document.createElement('div');
    const span = document.createElement('span');
    divImg.classList.add('image');
    span.classList.add('close-image');
    divImg.appendChild(span);
    widget.appendChild(divImg);
    console.log(this.textSrc);
    divImg.style = `background-image: url(${this.textSrc});`;
    // style="background-image: url(https://cdn-icons-png.flaticon.com/128/3089/3089803.png);"
  }
}
