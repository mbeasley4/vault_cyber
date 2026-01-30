(function () {
  const toggle = document.getElementById('mobile-menu-toggle');
  const close = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');

  function openMenu() {
    menu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    toggle.classList.add('active');
    document.body.classList.add('overflow-hidden');
  }

  function closeMenu() {
    menu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    toggle.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
  }

  toggle?.addEventListener('click', openMenu);
  close?.addEventListener('click', closeMenu);
  overlay?.addEventListener('click', closeMenu);

  // Auto-close on navigation
  document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();
