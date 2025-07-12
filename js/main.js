const inner = document.getElementById('header-inner');
window.addEventListener('scroll', () => {
  inner.classList.toggle('scrolled', window.scrollY > 50);
});