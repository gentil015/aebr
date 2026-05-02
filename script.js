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

    /* Pastor */
    pastor_label:       "Leadership",
    pastor_title:       "Our Pastor",
    pastor_position:    "Senior Pastor",
    pastor_period:      "Leading Since:",
    pastor_badge_since: "Since 2015",
    pastor_desc_en:     "Pastor Turimumahoro Etienne has been leading AEBR Cyivugiza Church with dedication and spiritual vision since 2015. His heart is devoted to preaching the Gospel of Jesus Christ, shepherding the flock with compassion, and fostering community development through faith-centered initiatives. Under his leadership, the church has grown in faith, health programs, and community outreach.",
    pastor_quote:       '"Serving with love, leading with faith, building a stronger community together."',

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

    /* Gallery Page */
    gallery_back:              "Back to Home",
    gallery_subtitle:          "Our Photo Collection",
    gallery_filter_all:        "All",
    gallery_filter_community:  "Community Work",
    gallery_filter_events:     "Events",
    gallery_filter_services:   "Services",
    gallery_filter_leadership: "Leadership",
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

    /* Pastor */
    pastor_label:       "Ubwiyunge",
    pastor_title:       "Umuyobozi wacu",
    pastor_position:    "Reveland",
    pastor_period:      "Yayoboye Kuva:",
    pastor_badge_since: "Kuva 2013",
    pastor_desc_kin:    "Pastor Turimumahoro Etienne n'ishingiro ry'uru gwanaj rwa AEBR Cyivugiza mu mahoro n'ubwenge bwa sipiritueri kuva 2013. Umutima we warimo kumubisha Ijambo ry'Iyesu Kristo, kuyobora inyama z'Imana mu mahoro n'ubwenge, no gutera imbere iterambere ry'umuntu mu mahoro. Mu mahoro ye, uru gwanaj rwiyongere mu mahoro, mu mubaka w'ubuzima, n'ubufatanye bw'uru gihugu.",
    pastor_quote:       '"Gusezerera mu mahoro, kuyobora mu kwizera, n\'kubaka umuryango uranaga hamwe."',

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

    /* Gallery Page */
    gallery_back:              "Garuka ku rugo",
    gallery_subtitle:          "Inyandiko y'amafoto yacu",
    gallery_filter_all:        "Byose",
    gallery_filter_community:  "Serivisi y'Umuryango",
    gallery_filter_events:     "Ibihe",
    gallery_filter_services:   "Serivisi",
    gallery_filter_leadership: "Ubuyobozi",
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

  // Handle language-specific elements (pastor description)
  document.querySelectorAll('.lang-en').forEach(el => {
    el.classList.toggle('hidden', lang !== 'en');
  });
  document.querySelectorAll('.lang-kin').forEach(el => {
    el.classList.toggle('hidden', lang !== 'kin');
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
const isGallery = document.querySelector('.gallery-page') !== null;
const onScroll = () => {
  if (isGallery) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
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
const EMAILJS_TEMPLATE_ID = 'template_nu9efn9';
const EMAILJS_PUBLIC_KEY = '4cLu4MPf6ThfVxDni';

/* ── Contact form with EmailJS ───────────────────────────── */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const formError = document.getElementById('formError');
const submitBtn = document.getElementById('submitBtn');

// Initialize EmailJS (only if credentials are set and emailjs is available)
if (typeof emailjs !== 'undefined' && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
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
      title: "Contact Form Submission",
      name: fromName,
      time: new Date().toLocaleString(),
      message: message,
      email: fromEmail
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

/* ── Gallery lightbox modal ──────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
let visiblePhotos = [];
let currentIndex = 0;

const updateVisiblePhotos = () => {
  visiblePhotos = Array.from(document.querySelectorAll('.gallery-item img'));
};

const openLightbox = index => {
  updateVisiblePhotos();
  const photo = visiblePhotos[index];
  if (!photo || !lightbox) return;
  lightboxImg.src = photo.src;
  lightboxImg.alt = photo.alt;
  lightboxCaption.textContent = photo.alt;
  currentIndex = index;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
};

const showPhoto = index => {
  if (!lightbox) return;
  updateVisiblePhotos();
  if (!visiblePhotos.length) return;
  const nextIndex = (index + visiblePhotos.length) % visiblePhotos.length;
  openLightbox(nextIndex);
};

if (lightbox) {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const currentPhoto = item.querySelector('img');
      updateVisiblePhotos();
      const clickIndex = visiblePhotos.indexOf(currentPhoto);
      if (clickIndex !== -1) openLightbox(clickIndex);
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => showPhoto(currentIndex - 1));
  lightboxNext?.addEventListener('click', () => showPhoto(currentIndex + 1));
  lightboxImg?.addEventListener('click', () => showPhoto(currentIndex + 1));

  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', event => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') showPhoto(currentIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(currentIndex + 1);
  });
}

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