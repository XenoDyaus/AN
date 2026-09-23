/* ================================================================
   RENDER — builds the page from CONFIG (see config.js).
   You shouldn't need to edit anything below this line to change
   your content — edit config.js instead.
   ================================================================ */

/* ================================================================
   ICONS — simple line/fill icons, colored via CSS `currentColor`
   so they go white → brand color on hover (see .social-dot in CSS).
   ================================================================ */
const ICONS = {
  gmail: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5.5C2 4.67 2.67 4 3.5 4h17c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-17C2.67 20 2 19.33 2 18.5v-13zm1.5.5v.379l8.5 6.145 8.5-6.145V6h-17zm17 2.06-7.65 5.534a1.5 1.5 0 0 1-1.7 0L3.5 8.56V18.5h17V8.56z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.53-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.42 0-4.08 1.48-4.08 4.2v2.13H7.4v3.1h2.76V21h3.34z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="1"/></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 3.5 2.7 10.8c-.9.35-.9 1.65.02 1.98l4.53 1.6 1.75 5.6c.28.9 1.42 1.1 2 .35l2.35-3.02 4.6 3.4c.78.58 1.9.16 2.1-.8l3.1-14.7c.22-1.03-.75-1.9-1.65-1.63zM8.9 14.9l-1.2-4.05 9.9-6.2-8 8.7z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"/><path d="M7.2 8.809H4V19.5h3.2V8.809Z"/></svg>`,
};

document.title = CONFIG.pageTitle;

// ---- Nav ----
document.getElementById('navBrand').textContent = CONFIG.nav.brand;

const navLinks = document.getElementById('navLinks');
const mobileMenu = document.getElementById('mobile-menu');
CONFIG.nav.links.forEach(link => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = link.href;
  a.textContent = link.label;
  li.appendChild(a);
  navLinks.appendChild(li);

  const mobileA = document.createElement('a');
  mobileA.href = link.href;
  mobileA.textContent = link.label;
  mobileMenu.appendChild(mobileA);
});

// ---- Hero ----
document.getElementById('heroEyebrow').textContent = CONFIG.hero.eyebrow;
document.getElementById('heroSub').textContent = CONFIG.hero.subtitle;

const heroActions = document.getElementById('heroActions');
CONFIG.hero.actions.forEach(action => {
  const a = document.createElement('a');
  a.href = action.href;
  a.textContent = action.label;
  a.className = `btn btn--${action.style}`;
  heroActions.appendChild(a);
});

// ---- About ----
document.getElementById('aboutLabel').textContent = CONFIG.about.label;
document.getElementById('aboutHeading').textContent = CONFIG.about.heading;
document.getElementById('aboutLocation').textContent = CONFIG.about.location;
document.getElementById('aboutCvActions').innerHTML = CONFIG.about.cvOptions.map(cv =>
  `<a href="${cv.href}" class="btn btn--outline" download="${cv.downloadName}">${cv.label}</a>`
).join('');

const aboutPhoto = document.getElementById('aboutPhoto');
aboutPhoto.src = CONFIG.about.photo;
aboutPhoto.alt = CONFIG.about.photoAlt;

const aboutBio = document.getElementById('aboutBio');
CONFIG.about.bio.forEach(paragraph => {
  const p = document.createElement('p');
  p.textContent = paragraph;
  aboutBio.appendChild(p);
});

// ---- Skills ----
// Each skill entry can be a plain string (renders a small colored dot,
// as before) or an object like { name, logo } to show an icon instead.
function renderSkillList(containerId, items) {
  const ul = document.getElementById(containerId);
  items.forEach(item => {
    const li = document.createElement('li');
    const isObject = typeof item === 'object' && item !== null;
    const name = isObject ? item.name : item;
    const marker = isObject && item.logo
      ? `<span class="skill-logo"><img src="${item.logo}" alt="${name} logo" loading="lazy"></span>`
      : `<span class="dot"></span>`;
    li.innerHTML = `${marker}${name}`;
    ul.appendChild(li);
  });
}
renderSkillList('skillsHardware', CONFIG.skills.hardware);
renderSkillList('skillsSoftware', CONFIG.skills.software);

// ---- Education ----
const educationList = document.getElementById('educationList');
CONFIG.education.forEach(edu => {
  const card = document.createElement('div');
  card.className = 'edu-card';
  card.innerHTML = `
    <h3>${edu.title}</h3>
    <p class="edu-meta">${edu.meta}</p>
    ${edu.desc ? `<p>${edu.desc}</p>` : ''}
  `;
  educationList.appendChild(card);
});

// ---- Projects ----
const projectGrid = document.getElementById('projectGrid');
CONFIG.projects.forEach(project => {
  const card = document.createElement('article');
  card.className = 'project-card';

  const media = (project.images && project.images.length)
    ? buildCarouselHTML(project.images, project.title)
    : `<div class="project-card__icon">${project.icon || '◆'}</div>`;

  const stack = (project.stack && project.stack.length)
    ? `<div class="project-card__stack">${project.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}</div>`
    : '';

  card.innerHTML = `
    ${media}
    <h3>${project.title}</h3>
    <p>${project.desc}</p>
    ${stack}
    <a href="${project.link}" class="project-card__link">View →</a>
  `;
  projectGrid.appendChild(card);
});

// Builds the markup for a Play Store-style screenshot carousel.
// Arrows/dots only render when there's more than one image.
function buildCarouselHTML(images, altBase) {
  const slides = images.map((src, i) =>
    `<div class="project-carousel__slide"><img src="${src}" alt="${altBase} screenshot ${i + 1}" loading="lazy"></div>`
  ).join('');

  const dots = images.length > 1
    ? `<div class="project-carousel__dots">${images.map((_, i) =>
        `<button class="project-carousel__dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Go to screenshot ${i + 1}"></button>`
      ).join('')}</div>`
    : '';

  const arrows = images.length > 1 ? `
    <button class="project-carousel__arrow project-carousel__arrow--prev" aria-label="Previous screenshot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
    </button>
    <button class="project-carousel__arrow project-carousel__arrow--next" aria-label="Next screenshot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>
    </button>` : '';

  return `
    <div class="project-carousel" data-autoplay="4000">
      <div class="project-carousel__track">${slides}</div>
      ${arrows}
      ${dots}
    </div>
  `;
}

// Wires up autoplay + manual prev/next/dot navigation for every
// carousel on the page. Manual interaction restarts the autoplay
// timer rather than fighting it, and hovering pauses it.
function initProjectCarousels() {
  document.querySelectorAll('.project-carousel').forEach(root => {
    const track = root.querySelector('.project-carousel__track');
    const slides = root.querySelectorAll('.project-carousel__slide');
    const dots = root.querySelectorAll('.project-carousel__dot');
    const prevBtn = root.querySelector('.project-carousel__arrow--prev');
    const nextBtn = root.querySelector('.project-carousel__arrow--next');
    const total = slides.length;
    if (total <= 1) return;

    const autoplayMs = parseInt(root.dataset.autoplay, 10) || 4000;
    let index = 0;
    let timer = null;

    function goTo(i) {
      index = (i + total) % total;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    }
    function next() { goTo(index + 1); }
    function prev() { goTo(index - 1); }
    function stopAutoplay() { if (timer) clearInterval(timer); }
    function startAutoplay() {
      stopAutoplay();
      timer = setInterval(next, autoplayMs);
    }

    prevBtn?.addEventListener('click', () => { prev(); startAutoplay(); });
    nextBtn?.addEventListener('click', () => { next(); startAutoplay(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { goTo(i); startAutoplay(); }));

    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);

    goTo(0);
    startAutoplay();
  });
}
initProjectCarousels();

// ---- Button cursor-glow — tracks pointer position inside each .btn
// so the CSS radial-gradient glow (see .btn::before) follows it. ----
function initButtonGlow() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--x', `${e.clientX - rect.left}px`);
      btn.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });
}
initButtonGlow();

// ---- Certifications ----
const certRow = document.getElementById('certRow');
CONFIG.certifications.forEach((cert, i) => {
  const btn = document.createElement('button');
  btn.className = 'cert-card';
  btn.dataset.cert = i;
  btn.innerHTML = `
    <div class="cert-card__logo"><img src="${cert.image}" alt="${cert.title} certificate" loading="lazy"></div>
    <span>${cert.title}</span>
  `;
  btn.addEventListener('click', () => openModal(cert, 'cert', CONFIG.certifications, i));
  certRow.appendChild(btn);
});

// ---- Experience ----
const expRow = document.getElementById('expRow');
CONFIG.experience.forEach((exp, i) => {
  const btn = document.createElement('button');
  btn.className = 'exp-card';
  btn.innerHTML = `
    <div class="exp-card__logo"><img src="${exp.logo}" alt="${exp.title} logo" loading="lazy"></div>
    <span>${exp.title}</span>
    <small>${exp.meta}</small>
  `;
  btn.addEventListener('click', () => openModal(exp, 'exp', CONFIG.experience, i));
  expRow.appendChild(btn);
});

// ---- Contact ----
document.getElementById('contactHeading').textContent = CONFIG.contact.heading;
document.getElementById('contactText').textContent = CONFIG.contact.text;

// ---- Footer ----
const footerSocials = document.getElementById('footerSocials');
CONFIG.socials.forEach(social => {
  const a = document.createElement('a');
  a.href = social.href;
  a.className = 'social-dot';
  a.setAttribute('aria-label', social.label);
  a.style.setProperty('--social-color', social.color);
  a.innerHTML = ICONS[social.icon] || '';
  footerSocials.appendChild(a);
});

document.getElementById('footerNote').innerHTML =
  `© <span id="year"></span> ${CONFIG.hero.name}. ${CONFIG.footerNote}`;
document.getElementById('year').textContent = new Date().getFullYear();


/* ================================================================
   INTERACTIONS
   ================================================================ */

// ---- Hero name — fade + rise-in on load ----
const typedNameEl = document.getElementById('typedName');
typedNameEl.textContent = CONFIG.hero.name;

// ---- Portrait shine sweep — plays once when scrolled into view ----
const portraitFrame = document.querySelector('.portrait-frame');
if (portraitFrame) {
  const shineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        portraitFrame.classList.add('shine');
        shineObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  shineObserver.observe(portraitFrame);
}

// ---- Mobile hamburger menu ----
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ---- Trace rail — scroll progress line (rAF-throttled for smoothness) ----
const traceProgress = document.getElementById('traceRailProgress');
const traceRail = document.getElementById('traceRail');
let traceRailTicking = false;

function updateTraceRail() {
  if (!traceRail) return;
  const railTop = traceRail.getBoundingClientRect().top + window.scrollY;
  const railHeight = traceRail.getBoundingClientRect().height;
  const scrolled = window.scrollY + window.innerHeight - railTop;
  const progress = Math.min(Math.max(scrolled / railHeight, 0), 1);
  const dashLength = 2400;
  traceProgress.style.strokeDashoffset = dashLength - (dashLength * progress);
  traceRailTicking = false;
}

function requestTraceRailUpdate() {
  if (traceRailTicking) return;
  traceRailTicking = true;
  requestAnimationFrame(updateTraceRail);
}

window.addEventListener('scroll', requestTraceRailUpdate, { passive: true });
window.addEventListener('resize', requestTraceRailUpdate);
updateTraceRail();

// ---- Scroll reveal — sections fade + rise in like frosted glass
// coming into focus as you scroll to them (once, then stays visible). ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.section').forEach(section => {
  revealObserver.observe(section);
});

// ---- Modal (shared for certs + experience, with prev/next) ----
const modalBackdrop = document.getElementById('modalBackdrop');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalLogo = document.getElementById('modalLogo');
const modalCount = document.getElementById('modalCount');
const modalClose = document.getElementById('modalClose');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

// Tracks whatever list is currently open (CONFIG.certifications or
// CONFIG.experience) so the arrows know what to step through.
let modalState = { list: null, index: 0, type: null };

function renderModalItem(item, type) {
  const image = type === 'cert' ? item.image : item.logo;
  modalTitle.textContent = item.title;
  modalMeta.textContent = item.meta;
  modalDesc.textContent = item.desc;
  modalLogo.innerHTML = image ? `<img src="${image}" alt="${item.title}">` : '◆';

  // Certificates get a large, fully-visible image (contain) and a
  // wider modal so the text on the certificate is actually readable.
  // Experience logos stay small and square.
  const isCert = type === 'cert';
  modalLogo.classList.toggle('modal__logo--doc', isCert);
  modalBackdrop.querySelector('.modal').classList.toggle('modal--wide', isCert);
}

function openModal(item, type, list, index) {
  modalState = { list: list || null, index: index || 0, type };
  renderModalItem(item, type);
  updateModalNav();

  modalBackdrop.classList.add('open');
  modalClose.focus();
  document.body.style.overflow = 'hidden';
}

function updateModalNav() {
  const { list, index } = modalState;
  const hasMultiple = !!(list && list.length > 1);
  modalPrev.hidden = !hasMultiple;
  modalNext.hidden = !hasMultiple;
  modalCount.textContent = hasMultiple ? `${index + 1} / ${list.length}` : '';
}

function stepModal(delta) {
  const { list, type } = modalState;
  if (!list || list.length < 2) return;
  const newIndex = (modalState.index + delta + list.length) % list.length;
  modalState.index = newIndex;
  renderModalItem(list[newIndex], type);
  updateModalNav();
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => stepModal(-1));
modalNext.addEventListener('click', () => stepModal(1));
modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (!modalBackdrop.classList.contains('open')) return;
  if (e.key === 'Escape') closeModal();
  if (e.key === 'ArrowRight') stepModal(1);
  if (e.key === 'ArrowLeft') stepModal(-1);
});

// ---- Contact form ----
// This just simulates a submission. Wire it up to Formspree, EmailJS,
// or your own backend endpoint to actually receive messages —
// replace the setTimeout below with a real fetch() call.
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formStatus.textContent = 'Sending…';
  setTimeout(() => {
    formStatus.textContent = "Message sent — thanks! I'll get back to you soon.";
    contactForm.reset();
  }, 700);
});
