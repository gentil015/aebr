/**
 * AEBR Cyivugiza Church – script.js
 * Features: Language switching (EN/KIN), Sticky navbar,
 *           Mobile menu, Smooth scroll, Scroll animations
 */

/* ============================================================
   1. TRANSLATIONS (i18n)
   ============================================================ */

const translations = {

  en: {
    /* Nav */
    nav_about:    "About",
    nav_mission:  "Mission",
    nav_programs: "Programs",
    nav_impact:   "Impact",
    nav_gallery:  "Gallery",
    nav_contact:  "Contact",

    /* Hero */
    hero_tag:       "Welcome to Our Church",
    hero_subtitle:  "Faith – Health – Development",
    hero_verse_text: '"Nuko rero, umuntu wese uri muri Kristo aba ari icyaremwe gishya…"',
    hero_cta_learn: "Learn More",
    hero_cta_visit: "Visit Us",

    /* About */
    about_label: "About Us",
    about_title: "A Church Rooted in Faith & Community",
    about_body:  "AEBR Cyivugiza Church is a Christ-centered rural church located in Nyabirasi Sector, Rutsiro District, Western Province of Rwanda. We are committed to preaching the Gospel and transforming lives.",
    stat_pillars: "Core Pillars",
    stat_district: "District",
    stat_hope:     "Hope",

    /* Mission */
    mission_label:      "Our Purpose",
    mission_title:      "Mission & Vision",
    mission_card_title: "Our Mission",
    mission_1:          "Preach the Gospel",
    mission_2:          "Transform lives",
    mission_3:          "Promote health",
    mission_4:          "Develop communities",
    vision_card_title:  "Our Vision",
    vision_text:        '"A transformed community living in Christ, health, and development."',

    /* Programs */
    programs_label:     "What We Do",
    programs_title:     "Our Programs",
    prog_sunday_title:  "Sunday Service",
    prog_sunday_body:   "Weekly worship, praise, and the Word every Sunday morning.",
    prog_prayer_title:  "Prayer Meetings",
    prog_prayer_body:   "Regular gatherings for corporate prayer and intercession.",
    prog_evang_title:   "Evangelism",
    prog_evang_body:    "Outreach and gospel sharing in surrounding communities.",
    prog_youth_title:   "Youth Ministry",
    prog_youth_body:    "Empowering the next generation through faith and fellowship.",
    prog_outreach_title:"Community Outreach",
    prog_outreach_body: "Health education, economic empowerment, and social support.",

    /* Impact */
    impact_label: "Our Impact",
    impact_title: "Gospel + Action",
    impact_body:  "We combine the Gospel with practical actions such as health education and economic empowerment.",
    pillar_faith:  "Faith",
    pillar_health: "Health",
    pillar_dev:    "Development",

    /* Gallery */
    gallery_label:     "Our Moments",
    gallery_title:     "Gallery",
    gallery_see_all:   "See All Photos",
    gal_worship:       "Worship",
    gal_prayer:        "Prayer",
    gal_youth:         "Youth",
    gal_outreach:      "Outreach",
    gal_health:        "Health",
    gal_community:     "Community",

    /* Contact */
    contact_label:       "Get In Touch",
    contact_title:       "Contact Us",
    contact_phone_label: "Phone",
    contact_loc_label:   "Location",
    contact_loc_val:     "Nyabirasi Sector, Rutsiro District,<br />Western Province, Rwanda",
    contact_email_label: "Email",
    contact_map_label: "Our Location",
    form_name:    "Full Name",
    form_email:   "Email Address",
    form_message: "Message",
    form_submit:  "Send Message",
    form_success: "✓ Message sent! We'll be in touch soon.",
    form_error:   "✗ Something went wrong. Please try again.",

    /* Footer */
    footer_tagline: "Faith – Health – Development",
    footer_quick:   "Quick Links",
    footer_connect: "Connect",
    footer_rights:  "All rights reserved.",
  },

  kin: {
    /* Nav */
    nav_about:    "Abo turi bo",
    nav_mission:  "Inshingano",
    nav_programs: "Ibikorwa",
    nav_impact:   "Ingaruka",
    nav_gallery:  "Amafoto",
    nav_contact:  "Twandikire",

    /* Hero */
    hero_tag:       "Murakaza neza mu Itorero",
    hero_subtitle:  "Kwizera – Ubuzima bwiza – Iterambere",
    hero_verse_text: '"Nuko rero, umuntu wese uri muri Kristo aba ari icyaremwe gishya…"',
    hero_cta_learn: "Menya Byinshi",
    hero_cta_visit: "Tugendeye",

    /* About */
    about_label: "Abo turi bo",
    about_title: "Itorero Rishingiye kuri Kristo n'Umuryango",
    about_body:  "Murakaza neza mu Itorero rya AEBR Cyivugiza, itorero ry'imidugudu rigira ubukirisu mu Murenge wa Nyabirasi, Akarere ka Rutsiro, Intara y'Iburengerazuba mu Rwanda. Twiyemeje kwamamaza ubutumwa bwiza bwa Yesu Kristo no guhindura ubuzima bwa benshi binyuze mu kwizera, igitsure, n'ishyirahamwe. Inshingano yacu irenze kubungabunga imyuka y'umwuka—dutanga ikiganiro cy'ubuzima bwiza n'iterambere ry'ubukungu mu baturage twakira.",
    stat_pillars: "Inkingi 3",
    stat_district: "Akarere",
    stat_hope:     "Ibyiringiro",

    /* Mission */
    mission_label:      "Intego yacu",
    mission_title:      "Inshingano & Icyifuzo",
    mission_card_title: "Inshingano yacu",
    mission_1:          "Kwamamaza ubutumwa bwiza",
    mission_2:          "Guhindura ubuzima bw'abantu",
    mission_3:          "Guteza imbere ubuzima bwiza",
    mission_4:          "Gutera imbere imirimo mu miryango",
    vision_card_title:  "Icyifuzo cyacu",
    vision_text:        '"Umuryango wahindutse utuye muri Kristo, ubuzima bwiza, n\'iterambere."',

    /* Programs */
    programs_label:     "Ibikorwa byacu",
    programs_title:     "Porogaramu Zacu",
    prog_sunday_title:  "Amateraniro Yo Ku  Cyumweru",
    prog_sunday_body:   "Gusenga, gushimira no Kumva Ijambo Ry' Imana buri cyumweru mu gitondo saa mbiri.",
    prog_prayer_title:  "Amateraniro yo Gusenga",
    prog_prayer_body:   "Amateraniro ahoraho yo gusenga hamwe no gusaba.",
    prog_evang_title:   "Ubutumwa bwiza",
    prog_evang_body:    "Kwamamaza ubutumwa bwiza mu miryango Yose.",
    prog_youth_title:   "Ubusaza bw'Urubyiruko",
    prog_youth_body:    "Gutera inkunga itsinda riz'ejo hazaza binyuze mu kwizera.",
    prog_outreach_title:"Serivisi mu Muryango",
    prog_outreach_body: "Ubuzima bwiza, iterambere ry'ubukungu, no guteza imbere imibereho Myiza.",

    /* Impact */
    impact_label: "Ibikorwa byacu",
    impact_title: "Ubutumwa + Ibikorwa",
    impact_body:  "Duhuza ubutumwa bwiza n'ibikorwa bifatika birimo ubuzima bwiza n'iterambere ry'ubukungu.",
    pillar_faith:  "Kwizera",
    pillar_health: "Ubuzima",
    pillar_dev:    "Iterambere",

    /* Gallery */
    gallery_label:     "Ibihe byacu",
    gallery_title:     "Amafoto",
    gallery_see_all:   "Reba Byose",
    gal_worship:       "Gusenga",
    gal_prayer:        "Amasengesho",
    gal_youth:         "Urubyiruko",
    gal_outreach:      "Serivisi",
    gal_health:        "Ubuzima",
    gal_community:     "Umuryango",

    /* Contact */
    contact_label:       "Twandikire",
    contact_title:       "Twandikire",
    contact_phone_label: "Telefone",
    contact_loc_label:   "Aho tubakarere",
    contact_loc_val:     "Murenge wa Nyabirasi, Akarere ka Rutsiro,<br />Intara y'Iburengerazuba, Rwanda",
    contact_email_label: "Imeli",
    contact_map_label: "Aho turi",
    form_name:    "Amazina yawe",
    form_email:   "Aderesi ya imeli",
    form_message: "Ubutumwa",
    form_submit:  "Ohereza ubutumwa",
    form_success: "✓ Ubutumwa bwoherejwe! Tuzaguhura vuba.",
    form_error:   "✗ Hari ikibazo. Mwirengereze.",

    /* Footer */
    footer_tagline: "Kwizera – Ubuzima bwiza – Iterambere",
    footer_quick:   "Ihuza Byihuse",
    footer_connect: "Duhuze",
    footer_rights:  "Uburenganzira bwose bwihariwe.",
  }
};


/* ============================================================
   2. LANGUAGE SYSTEM
   ============================================================ */

let currentLang = localStorage.getItem('aebr_lang') || 'en';

/**
 * Apply all i18n strings to DOM elements that have [data-i18n]
 */
function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  if (!dict) return;

  // Update all tagged elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Update lang toggle button UI
  const elEN  = document.getElementById('langEN');
  const elKIN = document.getElementById('langKIN');
  if (elEN && elKIN) {
    elEN.classList.toggle('active',  lang === 'en');
    elKIN.classList.toggle('active', lang === 'kin');
  }

  // Update html lang attribute
  document.documentElement.lang = lang === 'kin' ? 'rw' : 'en';

  // Persist choice
  localStorage.setItem('aebr_lang', lang);
}


/* ============================================================
   AEBR CYIVUGIZA CHURCH — script.js
   Handles: navbar scroll state, hamburger menu,
            scroll-reveal animations, form feedback, year
   ============================================================ */

/* ── Year in footer ──────────────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── Navbar scroll state ─────────────────────────────────── */
const navbar = document.getElementById('navbar');
const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

/* ── Hamburger / mobile nav ──────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu when a link is clicked
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ── Scroll reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Language toggle ────────────────────────────────────── */
const langEN  = document.getElementById('langEN');
const langKIN = document.getElementById('langKIN');
const langToggle = document.getElementById('langToggle');

if (langToggle) {
  // Apply saved language on load
  applyLanguage(currentLang);

  langToggle.addEventListener('click', () => {
    // Toggle between EN and KIN
    const newLang = currentLang === 'en' ? 'kin' : 'en';
    applyLanguage(newLang);
  });
}

/* ============================================================
   EMAILJS CONFIGURATION
   ============================================================
   Replace these placeholders with your actual EmailJS credentials:
   
   1. Go to https://www.emailjs.com/
   2. Create an account (free tier available)
   3. Add Email Service (e.g., Gmail, Outlook)
   4. Create an Email Template
   5. Get your Service ID, Template ID, and Public Key
   
   Replace below:
   - 'YOUR_SERVICE_ID'     → e.g., 'service_xxxxx'
   - 'YOUR_TEMPLATE_ID'    → e.g., 'template_xxxxx'
   - 'YOUR_PUBLIC_KEY'     → e.g., 'xxxxxxxxxxxxx'
   ============================================================ */
const EMAILJS_SERVICE_ID = 'service_hu6yv47';
const EMAILJS_TEMPLATE_ID = 'template_ew6fzw8';
const EMAILJS_PUBLIC_KEY = '4cLu4MPf6ThfVxDni';

/* ── Contact form with EmailJS ───────────────────────────── */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');
const submitBtn = document.getElementById('submitBtn');

// Initialize EmailJS (only if credentials are set)
if (EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Client-side validation
  const fromName = document.getElementById('from_name')?.value.trim();
  const fromEmail = document.getElementById('from_email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();

  if (!fromName || !fromEmail || !message) {
    showError(currentLang === 'kin' ? 'Nyandikire ibisobanuro byose.' : 'Please fill in all fields.');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(fromEmail)) {
    showError(currentLang === 'kin' ? 'Email ntibyo.' : 'Invalid email address.');
    return;
  }

  // Disable button and show loading
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === 'kin' ? 'Birakora...' : 'Sending...';
  }

  // If EmailJS is not configured, show demo message
  if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    // Demo mode - simulate success
    setTimeout(() => {
      contactForm.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = currentLang === 'kin' ? 'Ohereza ubutumwa' : 'Send Message';
      }
      showSuccess(currentLang === 'kin' 
        ? '✓ Ubutumwa bwoherejwe! (Demo mode - configure EmailJS)' 
        : '✓ Message sent! (Demo mode - configure EmailJS)');
    }, 1500);
    return;
  }

  // Send email via EmailJS
  try {
    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      to_email: 'turimumahoroetienne@gmail.com',
      message: message
    };

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

    // Success
    contactForm.reset();
    showSuccess(currentLang === 'kin' 
      ? '✓ Ubutumwa bwoherejwe! Tugutezera hazaza.' 
      : '✓ Message sent! We\'ll be in touch soon.');

  } catch (error) {
    console.error('EmailJS Error:', error);
    showError(currentLang === 'kin' 
      ? '✗ Hari ikibazo. Mwirengereze.' 
      : '✗ Something went wrong. Please try again.');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === 'kin' ? 'Ohereza ubutumwa' : 'Send Message';
    }
  }
});

function showSuccess(msg) {
  formSuccess.textContent = msg;
  formSuccess.classList.add('show');
  formError?.classList.remove('show');
  setTimeout(() => formSuccess.classList.remove('show'), 5000);
}

function showError(msg) {
  if (formError) {
    formError.textContent = msg;
    formError.classList.add('show');
    formSuccess?.classList.remove('show');
    setTimeout(() => formError.classList.remove('show'), 5000);
  }
}

/* ── Gallery Modal Popup ─────────────────────────────────── */
const seeAllBtn = document.getElementById('seeAllBtn');
const galleryModal = document.getElementById('galleryModal');
const galleryModalClose = document.getElementById('galleryModalClose');
const modalImage = document.getElementById('modalImage');
const modalCounter = document.getElementById('modalCounter');
const modalThumbs = document.getElementById('modalThumbs');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const galleryNodes = document.querySelectorAll('#galleryGrid .gallery-item');

const galleryImages = [
  { src: 'images/g1.jpg', alt: 'Worship', caption: 'Worship' },
  { src: 'images/g2.jpg', alt: 'Prayer', caption: 'Prayer' },
  { src: 'images/g3.jpg', alt: 'Youth', caption: 'Youth' },
  { src: 'images/g4.jpg', alt: 'Outreach', caption: 'Outreach' },
  { src: 'images/g5.jpg', alt: 'Health', caption: 'Health' },
  { src: 'images/g6.jpg', alt: 'Community', caption: 'Community' },
  { src: 'images/g7.jpg', alt: 'Fellowship', caption: 'Fellowship' },
  { src: 'images/g8.jpg', alt: 'Service', caption: 'Service' },
  { src: 'images/g10.jpg', alt: 'Community work', caption: 'Community work' },
  { src: 'images/g11.jpg', alt: 'Church family', caption: 'Church family' },
  { src: 'images/g12.jpg', alt: 'Event', caption: 'Event' },
  { src: 'images/g13.jpg', alt: 'Outreach', caption: 'Outreach' },
  { src: 'images/g14.jpg', alt: 'Worship', caption: 'Worship' },
  { src: 'images/g15.jpg', alt: 'Celebration', caption: 'Celebration' },
  { src: 'images/g17.jpg', alt: 'Prayer circle', caption: 'Prayer circle' },
  { src: 'images/g18.jpg', alt: 'Community gathering', caption: 'Community gathering' },
  { src: 'images/g19.jpg', alt: 'Leadership', caption: 'Leadership' },
  { src: 'images/g20.jpg', alt: 'Youth group', caption: 'Youth group' },
  { src: 'images/g21.jpg', alt: 'Mission work', caption: 'Mission work' },
  { src: 'images/g22.jpg', alt: 'Support', caption: 'Support' },
  { src: 'images/g23.jpg', alt: 'Service', caption: 'Service' },
  { src: 'images/g24.jpg', alt: 'Faith gathering', caption: 'Faith gathering' },
  { src: 'images/about-us.jpeg', alt: 'About us', caption: 'About us' },
  { src: 'images/banner.jpeg', alt: 'Church banner', caption: 'Church banner' },
  { src: 'images/home-image.jpeg', alt: 'Church community', caption: 'Church community' },
  { src: 'images/igitaramo.jpeg', alt: 'Event performance', caption: 'Event performance' }
];

let currentGalleryIndex = 0;

function updateGalleryModal(index) {
  const image = galleryImages[index];
  if (!image) return;

  currentGalleryIndex = index;
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalCounter.textContent = `${index + 1}/${galleryImages.length}`;

  modalThumbs.querySelectorAll('.modal-thumb').forEach((thumb, thumbIndex) => {
    thumb.classList.toggle('active', thumbIndex === index);
  });
}

function openGalleryModal(index = 0) {
  if (!galleryModal) return;
  updateGalleryModal(index);
  galleryModal.classList.add('active');
  galleryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
  if (!galleryModal) return;
  galleryModal.classList.remove('active');
  galleryModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function changeGalleryImage(direction) {
  let nextIndex = currentGalleryIndex + direction;
  if (nextIndex < 0) nextIndex = galleryImages.length - 1;
  if (nextIndex >= galleryImages.length) nextIndex = 0;
  updateGalleryModal(nextIndex);
}

function buildGalleryThumbnails() {
  if (!modalThumbs) return;
  modalThumbs.innerHTML = '';

  galleryImages.forEach((image, index) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'modal-thumb';
    thumb.innerHTML = `
      <img src="${image.src}" alt="${image.alt}" />
      <span>${image.caption}</span>
    `;
    thumb.addEventListener('click', () => updateGalleryModal(index));
    modalThumbs.appendChild(thumb);
  });
}

buildGalleryThumbnails();

if (seeAllBtn) {
  seeAllBtn.addEventListener('click', () => openGalleryModal(0));
}

galleryNodes.forEach(node => {
  node.addEventListener('click', () => {
    const index = Number(node.dataset.index ?? 0);
    openGalleryModal(index);
  });
});

galleryModal?.addEventListener('click', (event) => {
  if (event.target === galleryModal) {
    closeGalleryModal();
  }
});
galleryModalClose?.addEventListener('click', closeGalleryModal);
modalPrev?.addEventListener('click', () => changeGalleryImage(-1));
modalNext?.addEventListener('click', () => changeGalleryImage(1));
window.addEventListener('keydown', (event) => {
  if (!galleryModal || !galleryModal.classList.contains('active')) return;
  if (event.key === 'Escape') closeGalleryModal();
  if (event.key === 'ArrowLeft') changeGalleryImage(-1);
  if (event.key === 'ArrowRight') changeGalleryImage(1);
});

/* ── Active nav link on scroll ───────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}`
            ? 'var(--gold-light)'
            : '';
        });
      }
    });
  },
  { threshold: 0.45 }
);

sections.forEach(s => sectionObserver.observe(s));