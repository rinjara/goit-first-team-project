(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-modal-open]'),
    closeModalBtn: document.querySelector('[buy-modal-close]'),
    modal: document.querySelector('[buy-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
  }

})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[buy-mobile-open]'),
    closeModalBtn: document.querySelector('[buy-mobile-close]'),
    modal: document.querySelector('[buy-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('modal-open');
  }
  
})();