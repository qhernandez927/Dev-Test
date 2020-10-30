const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('.nav-links li');
  /// Toggle Navs
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

navSlide();
