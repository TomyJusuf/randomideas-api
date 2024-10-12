class Modal {
  constructor() {
    this._modal = document.getElementById('modal')
    this._modalBtn = document.getElementById('modal-btn')
    this.addEventListener()
  }

  addEventListener() {
    this._modalBtn.addEventListener('click', this.open.bind(this))
    window.addEventListener('click', this.outSideClick.bind(this))
  }

  open() {
    this._modal.style.display = 'block'
  }
  close() {
    this._modal.style.display = 'none'
  }

  outSideClick(e) {
    if (e.target === this._modal) {
      this.close()
    }
  }
}

export default Modal
