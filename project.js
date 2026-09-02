
document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /*  THEME  */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const THEME_KEY = "portfolio-theme";

  function applyTheme(theme) {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
      themeToggle.innerHTML = '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
      themeToggle.setAttribute("aria-pressed", "true");
      themeToggle.setAttribute("aria-label", "Switch to dark theme");
    } else {
      root.removeAttribute("data-theme");
      themeToggle.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
      themeToggle.setAttribute("aria-pressed", "false");
      themeToggle.setAttribute("aria-label", "Switch to light theme");
    }
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(savedTheme || (systemPrefersLight ? "light" : "dark"));

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });

  /*  MOBILE NAVIGATION   */
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  function closeMobileNav() {
    navToggle.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", closeMobileNav));

  function onScroll() {
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /*  SCROLL REVEAL */
  function observeReveal(el) {
    if (prefersReducedMotion) {
      el.classList.add("in-view");
      return;
    }
    revealObserver.observe(el);
  }

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(observeReveal);

  /*PROJECTS DETAIL*/
  const PROJECTS = [
    { 
      /*VOYAGEIQ*/
      id: "voyageiq",
      index: "01",
      category: "Web and cloud Project",
      name: "VoyageIQ",
      tagline: "Smart Travel Intelligence Platform",
      description:
        "An end-to-end travel planning platform that brings flight search, hotel search, weather intelligence and goal-based trip planning into one personalized dashboard.",
      role: "Full-Stack / AI &amp; ML",
      type: "Travel Intelligence Platform",
      stack: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Flask", icon: "devicon-flask-original" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "REST API", icon: "fa-solid fa-diagram-project skill-fa" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      ],
      features: [
        { name: "Flight Search", note: "Search and compare flight options in real time." },
        { name: "Hotel Search", note: "Find and filter accommodation by location, price and rating." },
        { name: "Weather Intelligence", note: "Surfaces destination weather to help time a trip." },
        { name: "Target Trip", note: "Goal-based trip planning around a budget or date." },
        { name: "Personalized Dashboard", note: "One view of saved trips, bookings and preferences." },
      ],
      mainImage: { src: "images/VoyageIQ/Home.png", label: "VoyageIQ — Home" },
      gallery: [
        { src: "images/VoyageIQ/Flight.png", label: "Flight Search" },
        { src: "images/VoyageIQ/Hotel.png", label: "Hotel Search" },
        { src: "images/VoyageIQ/Dashboard.png", label: "Dashboard" },
        { src: "images/VoyageIQ/Target-Trip.png", label: "Target Trip" },
        { src: "images/VoyageIQ/Profile.png", label: "Profile" },
        { src: "images/VoyageIQ/Login.png", label: "Login" },
        { src: "images/VoyageIQ/Registration.png", label: "Registration" },
        { src: "images/VoyageIQ/Contact.png", label: "Contact" },
      ],
      links: { demo: "https://voyageiq-argah5bwdhhcarhz.centralindia-01.azurewebsites.net/",
               docs: "VoyageIQ Documentation.pdf", 
               github: "https://github.com/Aryan-Dongre/VoyageIQ" },
    },

    {/* SALON ERP */
      id: "salon-erp",
      index: "02",
      category: "ERP System",
      name: "Salon ERP System",
      tagline: "Multi-Branch Salon Operations Platform",
      description:
        "Staff, inventory, billing and multi-branch oversight from a single admin panel — built to run a real salon's day-to-day operations.",
      role: "Full-Stack Developer",
      type: "ERP System",
      stack: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Flask", icon: "devicon-flask-original" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
      ],
      features: [
        { name: "Service Management", note: "Manage the service catalog offered across branches." },
        { name: "Appointment Booking", note: "Book and track appointments per branch and staff member." },
        { name: "Booking Summary", note: "A clear summary view of every booking's status." },
        { name: "Payment Processing", note: "Record and reconcile customer payments." },
        { name: "Admin Dashboard", note: "Multi-branch oversight from a single admin panel." },
      ],
      mainImage: { src: "images/ERP photos/Home-page.png", label: "Salon ERP — Home" },
      gallery: [
        { src: "images/ERP photos/Service page.png", label: "Service Page" },
        { src: "images/ERP photos/Appointment card.png", label: "Appointment Card" },
        { src: "images/ERP photos/Booking summary.png", label: "Booking Summary" },
        { src: "images/ERP photos/Payment.png", label: "Payment" },
        { src: "images/ERP photos/admin_dashboard.png", label: "Admin Dashboard" },
        { src: "images/ERP photos/manager_dashboard.png", label: "Branch Management" },
        { src: "images/ERP photos/recep_dashboard.png", label: "Receptionist Interface" },
      ],
      links: { demo: "https://salon-erp-system-pi6r.onrender.com", docs: "", github: "https://github.com/Aryan-Dongre/Salon-ERP-System" },
    },

    {
      /*LOAN APPROVAL PREDICTION*/
      id: "loan-approval-prediction",
      index: "03",
      category: "Machine Learning",
      name: "Loan Approval Prediction",
      tagline:"Machine Learning Base Credit Decision System",
      description:
             "A machine learning classification project that predicts whether a loan application is likely to be approved using applicant financial, demographic and credit-related information.",
      role: "Machine Learning Developer",
      type: "ML Classification Project",

      stack :[
        {name: "Python",icon: "devicon-python-plain colored" },
        {name: "Pandas",icon: "devicon-pandas-plain colored" },
        {name: "NumPy",icon: "devicon-numpy-plain colored" },
        {name: "Scikit-learn",icon: "devicon-scikit-learn-plain colored" },
        {name: "Matplotlib",icon: "devicon-matplotlib-plain colored" },
        {name: "Seaborn",icon: "devicon-seaborn-plain colored" },
      ],
      features: [
        {name: "Data Preprocessing", note:"Cleaned and prepared applicant data for machine learning." },
        {name: "Exploratory Data Analysis", note:"Visualized and analyzed data to identify patterns and relationships." },
        {name: "Feature Engineering", note:"Created new features from existing data to improve model performance." },
        {name: "Classification Model", note:"Trained machine learning models to predict loan approval."},
        {name:"Model Evaluation", note:"Evaluated model performance using metrics such as accuracy, precision, recall and F1 score."},
      ],
      mainImage: { src: "images/ML Project Image/Loan_approval.png" label: "Loan Approval Prediction" },
      gallery: [],
      links: {
        github: "https://github.com/Aryan-Dongre/Loan_approval_Prediction"
      }
    },

    {
      /*NETFLIX_-ANALYSIS */
      id: "netflix-analysis",
      index: "04",
      category: "Data Analysis",
      name: "Netflix Data Analysis",
      tagline: "Exploring Netflix Content &amp; Viewing Trends",
      description:
        "An exploratory data analysis project examining Netflix movies and TV shows to uncover patterns across content type, genres, countries, release years and other attributes.",
      role: "Data Analyst",
      type: "Exploratory Data Analysis",

      stack: [
        {name: "Python", icon: "devicon-python-plain colored"},
        {name: "Pandas", icon: "devicon-pandas-plain colored"},
        {name: "NumPy", icon: "devicon-numpy-plain colored"},
        {name: "Matplotlib", icon: "devicon-matplotlib-plain colored"},
        {name: "Seaborn", icon: "devicon-seaborn-plain colored"},
      ],

      features: [
        {name: "Content Analysis", note: "Explored the distribution of movies and TV shows available on Netflix."},
        {name: "Genre Analysis", note: "Analyzed the popularity and performance of different genres on Netflix."},
        {name: "Country Analysis", note: "Examined content distribution across different countries."},
        {name: "Release Trends", note: "Studied how Netflix content changed across release years."},
        {name:"Data Visualization", note: "Created visualizations to communicate important patterns and trends."}
      ],

      mainImage: { src: "images/ML Project Image/Netflix.png", label: "Netflix Data Analysis" },
      gallery: [],
      links: {github: "https://github.com/Aryan-Dongre/Netflix-Data-Analysis-"}
    },

    {/*Zomato Analysis*/
      id: "zomato-analsis",
      index: "05",
      category: "Data Analysis",
      name: "Zomato Data Analysis",
      tagline: "Restaurant & Customer Behaviour Analysis",
      description:
        "An exploratory data analysis project using Zomato restaurant data to understand restaurant types, ratings, votes, spending patterns and online ordering behaviour.",
      role: "Data Analyst",
      type: "Exploratory Data Analysis",

      stack : [
        {name: "Python", icon: "devicon-python-plain colored"},
        {name: "Pandas", icon: "devicon-pandas-plain colored"},
        {name: "NumPy", icon: "devicon-numpy-plain colored"},
        {name: "Matplotlib", icon: "devicon-matplotlib-plain colored"},
        {name: "Seaborn", icon: "devicon-seaborn-plain colored"},
      ],

      features: [
        {name: "Restaurant Type Analysis", note: "Analyzed the distribution of different restaurant types."},
        {name: "Rating Analysis", note: "Explored restaurant ratings and their relationship with customer engagement."},
        {name: "Vote Analysis", note: "Studied customer voting patterns across restaurants."},
        {name: "Cost Analysis", note: "Examined approximate spending patterns for customers."},
        {name: "Online Ordering", note: "Analysis online versus offline ordering behaviour."}
      ],
      mainImage: {src: "images/ML Project Image/Zomato.png", label: "Zomato Data Analysis"},
      gallery: [],
      links: {github: "https://github.com/Aryan-Dongre/Zomato-Analysis-Project-"}



    },

    {/* BEAUTY PARLOR */
      id: "beauty-parlor",
      index: "06",
      category: "Web Application",
      name: "Beauty Parlor Management System",
      tagline: "Appointments, Payments &amp; Service Management",
      description:
        "Appointments, payments and services, with a dedicated customer flow and an admin control center for daily operations.",
      role: "Full-Stack Developer",
      type: "Web Application",
      stack: [
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Flask", icon: "devicon-flask-original" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
      ],
      features: [
        { name: "Appointment Booking", note: "A simple flow for customers to book a service." },
        { name: "Service & Payment Tracking", note: "Track services rendered and payments received." },
        { name: "Customer-Facing Flow", note: "A dedicated experience for walk-in and returning customers." },
        { name: "Admin Control Center", note: "Day-to-day operations managed from one place." },
      ],
      mainImage: { src: "images/salon photos/beauty-home.png", label: "Beauty Parlor — Home" },

      gallery: [
        { src: "images/salon photos/beauty-service.png", label: "Service Page" },
        { src: "images/salon photos/appointment.png", label: "Appointment Booking" },
        { src: "images/salon photos/payment.png", label: "Payment " },
        { src: "images/salon photos/pay success.png", label: "Payment Success" },
        { src: "images/salon photos/Login.png", label: "Login" },
        { src: "images/salon photos/dashboard.png", label: "Admin Dashboard" },
        { src: "images/salon photos/calendar.png", label: "Admin Appointment Calendar View" },
        { src: "images/salon photos/ser_analytics.png", label: "Service Analytics" },
        { src: "images/salon photos/booking-admin.png", label: "Booking Analytics" },
        { src: "images/salon photos/add_ser.png", label: "Add Service" },
        { src: "images/salon photos/beauty-myappointment.png", label: "My Appointments" },
        { src: "images/salon photos/app_history.png", label: "Appointment History" }

      ],
      links: { demo: "", docs: "Beauty Parlor.pdf", github: "https://github.com/Aryan-Dongre/Beauty-Parlor-Management-Systems-" },
    },
  ];

  function renderStack(stack) {
    return stack
      .map((t) => `<span class="stack-chip"><i class="${t.icon}" aria-hidden="true"></i>${t.name}</span>`)
      .join("");
  }

  function renderFeatures(features) {
    return features
      .map(
        (f, i) => `
        <div class="feature-row">
          <span class="feature-num">${String(i + 1).padStart(2, "0")}</span>
          <div class="feature-body">
            <h4>${f.name}</h4>
            <p>${f.note}</p>
          </div>
        </div>`
      )
      .join("");
  }

  function renderGalleryCard(shot, projectName, hidden) {
    return `
    <button
      type="button"
      class="shot-card${hidden ? " shot-hidden" : ""}"
      data-src="${shot.src}"
      data-label="${shot.label}"
      data-project="${projectName}"
      data-view-hidden="${hidden ? "true" : "false"}"
      ${hidden ? "hidden" : ""}
    >
      <span class="shot-card-media">
        <img
          src="${shot.src}"
          alt="${projectName} — ${shot.label} screenshot"
          loading="lazy"
        >
      </span>

      <span class="shot-card-body">
        <h5>${shot.label}</h5>
      </span>
    </button>
  `;
  }

  function renderActions(links) {
    let out = "";
    if (links.demo) out += `<a href="${links.demo}" class="btn btn-primary" target="_blank" rel="noopener">View Project <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`;
    if (links.docs) out += `<a href="${links.docs}" class="btn btn-outline" target="_blank" rel="noopener">Documentation</a>`;
    if (links.github) out += `<a href="${links.github}" class="btn btn-outline" target="_blank" rel="noopener"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub Repository</a>`;
    return out;
  }

  const chaptersRoot = document.getElementById("projectChapters");
  const indexList = document.getElementById("projIndexList");
  const metaCount = document.querySelector(".proj-meta-row dd");
  if (metaCount) metaCount.textContent = String(PROJECTS.length).padStart(2, "0");

  PROJECTS.forEach((project) => {
    /* -- overview nav item -- */
    const navItem = document.createElement("li");
    navItem.className = "proj-index-item";
    navItem.innerHTML = `
      <a href="#${project.id}" class="proj-index-link" data-target="${project.id}">
        <span class="proj-index-num">${project.index}</span>
        <span class="proj-index-name">${project.name}</span>
        <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </a>`;
    indexList.appendChild(navItem);

    /* -- chapter -- */
    const chapter = document.createElement("article");
    chapter.className = "chapter reveal";
    chapter.id = project.id;

    const visibleGallery = project.gallery.slice(0, 4);
    const hiddenGallery = project.gallery.slice(4);

    const galleryMarkup =
      project.gallery.length > 0
        ? `
      <div class="chapter-gallery">
        <div class="chapter-gallery-label">Feature / Module Showcase</div>
        <div class="shot-grid" id="grid-${project.id}">
          ${visibleGallery.map((s) => renderGalleryCard(s, project.name, false)).join("")}
          ${hiddenGallery.map((s) => renderGalleryCard(s, project.name, true)).join("")}
        </div>
        ${hiddenGallery.length > 0
          ? `<button type="button" class="btn btn-outline view-more-btn" data-target="grid-${project.id}">
                <span class="vm-label">View More</span> <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
              </button>`
          : ""
        }
      </div>`
        : "";

    chapter.innerHTML = `
      <span class="chapter-index" aria-hidden="true">${project.index}</span>
      <div class="wrap">
        <div class="chapter-head">
          <div class="chapter-info">
            <div class="chapter-kicker">
              <span class="chapter-num">${project.index}</span>
              <span class="chapter-category">${project.category}</span>
            </div>
            <h2 class="chapter-title">${project.name}</h2>
            <p class="chapter-tagline">${project.tagline}</p>
            <p class="chapter-desc">${project.description}</p>

            <dl class="chapter-metadata">
              <div><dt>Role</dt><dd>${project.role}</dd></div>
              <div><dt>Type</dt><dd>${project.type}</dd></div>
            </dl>

            <div class="chapter-stack-wrap">
              <div class="chapter-stack-label">Stack</div>
              <div class="chapter-stack">${renderStack(project.stack)}</div>
            </div>

            <div class="chapter-actions">${renderActions(project.links)}</div>
          </div>

          <button type="button" class="chapter-hero-shot" data-src="${project.mainImage.src}" data-label="${project.mainImage.label}" data-project="${project.name}" aria-label="View larger screenshot of ${project.mainImage.label}">
            <img src="${project.mainImage.src}" alt="${project.mainImage.label} screenshot" loading="lazy">
          </button>
        </div>

        <div class="chapter-features">
          <div class="chapter-features-label">Key Features</div>
          <div class="feature-list">${renderFeatures(project.features)}</div>
        </div>

        ${galleryMarkup}
      </div>
    `;

    chaptersRoot.appendChild(chapter);
    observeReveal(chapter);
  });

  /* 5. PROJECT NAVIGATION  */
  document.querySelectorAll(".proj-index-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.target);
      if (!target) return;
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });

  /* 6. SCREENSHOT MODAL */
  const shotModal = document.getElementById("shotModal");
  const shotModalImg = document.getElementById("shotModalImg");
  const shotModalTitle = document.getElementById("shotModalTitle");
  const shotModalProject = document.getElementById("shotModalProject");
  const shotModalClose = document.getElementById("shotModalClose");
  let lastFocusedEl = null;

  function openShotModal(src, label, projectName) {
    lastFocusedEl = document.activeElement;
    shotModalImg.src = src;
    shotModalImg.alt = `${label} screenshot`;
    shotModalTitle.textContent = label;
    shotModalProject.textContent = projectName;
    shotModal.hidden = false;
    document.body.style.overflow = "hidden";
    shotModalClose.focus();
  }

  function closeShotModal() {
    shotModal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".chapter-hero-shot, .shot-card");
    if (trigger) {
      openShotModal(trigger.dataset.src, trigger.dataset.label, trigger.dataset.project);
    }
  });

  shotModal.querySelectorAll("[data-close-shot-modal]").forEach((el) => el.addEventListener("click", closeShotModal));
  shotModalClose.addEventListener("click", closeShotModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !shotModal.hidden) closeShotModal();
  });

  /*  VIEW MORE / VIEW LESS  */
  /* =========================================================
   VIEW MORE / VIEW LESS
   ========================================================= */

  document.querySelectorAll(".view-more-btn").forEach((btn) => {

    btn.setAttribute("aria-expanded", "false");

    btn.addEventListener("click", () => {

      const grid = document.getElementById(btn.dataset.target);

      if (!grid) return;

      const hiddenCards = grid.querySelectorAll(".shot-hidden");

      const isOpening = !btn.classList.contains("is-open");

      if (isOpening) {

        /* SHOW ALL HIDDEN CARDS */
        hiddenCards.forEach((card) => {
          card.classList.remove("shot-hidden");
          card.hidden = false;
        });

        btn.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");

        const label = btn.querySelector(".vm-label");
        const icon = btn.querySelector("i");

        if (label) {
          label.textContent = "View Less";
        }

        if (icon) {
          icon.className = "fa-solid fa-chevron-up";
        }

      } else {

        /*
         * IMPORTANT:
         * We need to remember which cards were originally hidden.
         * Therefore we use data-view-hidden instead of relying
         * on .shot-hidden after the cards have been revealed.
         */

        const allCards = grid.querySelectorAll(".shot-card");

        allCards.forEach((card) => {

          if (card.dataset.viewHidden === "true") {
            card.classList.add("shot-hidden");
            card.hidden = true;
          }

        });

        btn.classList.remove("is-open");
        btn.setAttribute("aria-expanded", "false");

        const label = btn.querySelector(".vm-label");
        const icon = btn.querySelector("i");

        if (label) {
          label.textContent = "View More";
        }

        if (icon) {
          icon.className = "fa-solid fa-chevron-down";
        }

      }

    });

  });

  /*  ACTIVE PROJECT TRACKING */
  const chapterEls = Array.from(document.querySelectorAll(".chapter"));
  const indexLinkEls = Array.from(document.querySelectorAll(".proj-index-link"));

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          indexLinkEls.forEach((link) => link.classList.toggle("is-active", link.dataset.target === id));
        }
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );
  chapterEls.forEach((chapter) => activeObserver.observe(chapter));
});
