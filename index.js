const hamburger = document.querySelector('.menu-bars');
const cross = document.querySelector('.cross');
hamburger.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.menu');
  const header = document.querySelector('.header');
  mobileMenu.style.display = 'flex';
  header.style.display = 'none';
});

cross.addEventListener('click', () => {
  const mobileMenu = document.querySelector('.menu');
  const header = document.querySelector('.header');
  mobileMenu.style.display = 'none';
  header.style.display = 'flex';
});
