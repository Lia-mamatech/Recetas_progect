const buscador = document.querySelector('header input');
buscador.addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  const recetas = document.querySelectorAll('.receta-card');

  recetas.forEach(card => {
    const titulo = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = titulo.includes(query) ? '' : 'none';
  });
});
