document.addEventListener('DOMContentLoaded', () => {
  const revealItems = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));

  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.sidebar__toggle');
  const menu = document.querySelector('.topbar__menu');

  const closeSidebar = () => {
    if (sidebar) sidebar.classList.remove('open');
  };

  if (toggle) {
    toggle.addEventListener('click', () => sidebar?.classList.toggle('open'));
  }

  if (menu) {
    menu.addEventListener('click', () => sidebar?.classList.toggle('open'));
  }

  document.addEventListener('click', (event) => {
    if (window.innerWidth <= 992 && sidebar && !sidebar.contains(event.target) && !toggle?.contains(event.target) && !menu?.contains(event.target)) {
      closeSidebar();
    }
  });
});
