(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-icecream-modal-open]"),
    closeModalBtn: document.querySelector("[data-icecream-modal-close]"),
    modal: document.querySelector("[data-icecream-modal]"),
   body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is--hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-icecoffee-modal-open]"),
    closeModalBtn: document.querySelector("[data-icecoffee-modal-close]"),
    modal: document.querySelector("[data-icecoffee-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is--hidden");
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-milkshakes-modal-open]"),
    closeModalBtn: document.querySelector("[data-milkshakes-modal-close]"),
    modal: document.querySelector("[data-milkshakes-modal]"),
    body: document.querySelector("body"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is--hidden");
  }
})();