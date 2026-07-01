
document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var icon = themeToggle.querySelector('.icon');

  function applyTheme(isLight){
    document.body.classList.toggle('light-mode', isLight);
    icon.textContent = isLight ? '☀️' : '🌙';
  }

  var savedTheme = localStorage.getItem('aryan-theme');
  applyTheme(savedTheme === 'light');

  themeToggle.addEventListener('click', function () {
    var isLight = !document.body.classList.contains('light-mode');
    applyTheme(isLight);
    localStorage.setItem('aryan-theme', isLight ? 'light' : 'dark');
  });

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) { revealObserver.observe(el); });

  /* ---------- Active section: navbar links + signal rail ---------- */
  var sections = document.querySelectorAll('section[id]');
  var navLinkEls = document.querySelectorAll('.nav-links a');
  var railTicks = document.querySelectorAll('.rail-tick');
  var railGlow = document.getElementById('railGlow');

  function setActive(id){
    navLinkEls.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
    railTicks.forEach(function (t, i) {
      var active = t.getAttribute('data-section') === id;
      t.classList.toggle('active', active);
      if (active) {
        railGlow.style.top = (i * 34) + 'px';
      }
    });
  }

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(function (s) { sectionObserver.observe(s); });

  // initialize rail position
  setActive('home');

  railTicks.forEach(function (tick) {
    tick.addEventListener('click', function () {
      var target = document.getElementById(tick.getAttribute('data-section'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ---------- Certificate group toggle ---------- */
  document.querySelectorAll('.cert-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = document.getElementById(btn.getAttribute('data-target'));
      box.classList.toggle('open');
      var isOpen = box.classList.contains('open');
      btn.innerHTML = isOpen
        ? 'View Less <i class="fa-solid fa-chevron-up"></i>'
        : 'See More <i class="fa-solid fa-chevron-down"></i>';
    });
  });

});
