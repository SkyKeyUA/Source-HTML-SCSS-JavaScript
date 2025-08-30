window.addEventListener('load', windowLoad);
const header = document.querySelector('.header');
const html = document.documentElement;

function windowLoad() {
  if (992 >= window.innerWidth) {
    document.addEventListener('click', documentActions);
  }
  html.classList.add('loaded');
  scrollActions();
}
function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest('.icon-menu')) {
    html.classList.toggle('menu-open');
  }
  targetElement.closest('.menu__link') && html.classList.contains('menu-open')
    ? html.classList.remove('menu-open')
    : null;
}
function scrollActions() {
  window.addEventListener('scroll', scrollAction);

  function scrollAction() {
    header?.classList.toggle('header--scroll', scrollY > header.offsetHeight / 2);
  }
  scrollAction();
}
