(() => {
  const refs = {
    openMenuBtn: document.querySelector(".about__btn"),
    closeMenuBtn: document.querySelector(".about__btn--close"),
    menu: document.querySelector(".about__modal"),
    body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle('no-scroll')
  }
})();