const filters = document.querySelector('.filters');
const cards = [...document.querySelectorAll('.card')];
const status = document.querySelector('#filter-status');

filters.hidden = false;
filters.addEventListener('click', (event) => {
  const selected = event.target.closest('button[data-filter]');
  if (!selected) return;

  for (const button of filters.querySelectorAll('button')) {
    button.setAttribute('aria-pressed', String(button === selected));
  }

  let shown = 0;
  for (const card of cards) {
    card.hidden = selected.dataset.filter !== 'all' && card.dataset.service !== selected.dataset.filter;
    if (!card.hidden) shown += 1;
  }
  status.textContent = shown === 1 ? "1 service shown" : `${shown} services shown`;
});
