/* ─────────────────────────────────────────
   CANVAS BACKGROUND — floating particles
───────────────────────────────────────── */
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const N = 55;
  for (let i = 0; i < N; i++) {
    particles.push({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight,
      r:  Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      a:  Math.random() * 0.35 + 0.05,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,215,255,${p.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─────────────────────────────────────────
   TYPEWRITER
───────────────────────────────────────── */
(function () {
  const el    = document.getElementById('typewriter-text');
  const roles = [
    'Backend Developer',
    'Python Engineer',
    '.NET / C# Developer',
    'Automation Engineer',
    'API Designer',
  ];
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const word = roles[ri];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, 2200);
        return;
      }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) {
        deleting = false;
        ri = (ri + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 110);
  }
  tick();
})();

/* ─────────────────────────────────────────
   NAVBAR — compact on scroll
───────────────────────────────────────── */
(function () {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('compact', window.scrollY > 60);
  }, { passive: true });
})();

/* ─────────────────────────────────────────
   MOBILE HAMBURGER / DRAWER
───────────────────────────────────────── */
(function () {
  const btn     = document.getElementById('hamburger');
  const drawer  = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const links   = drawer.querySelectorAll('.drawer-link');

  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
  }

  btn.addEventListener('click', () => {
    drawer.classList.toggle('open');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
})();

/* ─────────────────────────────────────────
   SCROLL REVEAL — IntersectionObserver
───────────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('in');
    }),
    { threshold: 0.1 }
  );
  els.forEach(el => obs.observe(el));
})();

/* ─────────────────────────────────────────
   CONTACT FORM — mailto fallback
───────────────────────────────────────── */
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name    = this.name.value;
  const email   = this.email.value;
  const message = this.message.value;
  window.location.href =
    `mailto:seu@email.com` +
    `?subject=${encodeURIComponent('Portfolio Contact from ' + name)}` +
    `&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
});

/* ─────────────────────────────────────────
   FOOTER — auto year
───────────────────────────────────────── */
document.getElementById('footer-year').textContent = new Date().getFullYear();
