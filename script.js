// Clicking a layer in the stack diagram scrolls to the matching project section
document.querySelectorAll('.stack-layer').forEach(layer => {
  layer.addEventListener('click', () => {
    const id = layer.getAttribute('data-layer');
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
