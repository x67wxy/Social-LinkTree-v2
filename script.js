const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.open(link.getAttribute('href'), '_blank');
  });
});
