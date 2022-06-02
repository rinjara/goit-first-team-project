(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-modal-open]'),
    closeModalBtn: document.querySelector('[data-buy-modal-close]'),
    modal: document.querySelector('[data-buy-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-buy-mobile-open]'),
    closeModalBtn: document.querySelector('[data-buy-mobile-close]'),
    modal: document.querySelector('[data-buy-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  
})();