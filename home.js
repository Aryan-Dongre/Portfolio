
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* DATA */
  const DATA = {
    /* Skills  */
    skills: [
      {
        group: "Languages",
        items: [
          { name: "Python", icon: "devicon-python-plain colored", level: 4 },
          { name: "Java", icon: "devicon-java-plain colored", level: 2 },
          { name: "C", icon: "devicon-c-plain colored", level: 2 },
          { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 2 },
          { name: "R", icon: "devicon-r-plain colored", level: 2 },
        ],
      },
      {
        group: "Backend",
        items: [
          { name: "Flask", icon: "devicon-flask-original", level: 4 },
          { name: "REST API", icon: "fa-solid fa-diagram-project skill-fa", level: 2 },
          { name: "HTML", icon: "devicon-html5-plain colored", level: 4 },
          { name: "CSS", icon: "devicon-css3-plain colored", level: 4 },
        ],
      },
      {
        group: "Database",
        items: [
          { name: "MySQL", icon: "devicon-mysql-plain colored", level: 4 },
          { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 3 },
          { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 1 },
        ],
      },
      {
        group: "Data / ML",
        items: [
          { name: "NumPy", icon: "devicon-numpy-plain colored", level: 2 },
          { name: "Pandas", icon: "devicon-pandas-plain colored", level: 3 },
          { name: "Matplotlib", icon: "devicon-matplotlib-plain colored", level: 2 },
          { name: "Seaborn", icon: "fa-solid fa-chart-column skill-fa", level: 2 },
          { name: "Scikit-learn", icon: "fa-solid fa-diagram-project skill-fa", level: 2 },
        ],
      },
      {
        group: "AI / Cloud",
        items: [
          { name: "Azure AI", icon: "fa-brands fa-microsoft skill-fa", level: 1 },
          { name: "Generative AI", icon: "fa-solid fa-brain skill-fa", level: 1 },
          // { name: "Computer Vision", icon: "fa-solid fa-eye skill-fa", level: 2 },
        ],
      },
    ],

    levelLabels: ["", "Learner", "Intermediate", "Advanced", "Expert"],

    certificates: [
      {
        issuer: "Microsoft Azure",
        icon: "fa-brands fa-microsoft",
        items: [
          { title: "Generative AI and Agents by Azure", year: "2025", img: "images/certificates/Generative AI and Agents in Azure.jpeg" },
          { title: "Get started with AI on Azure", year: "2025", img: "images/certificates/Fundation of azure.jpeg" },
          { title: "AI-Powered Information Extraction", year: "2025", img: "images/certificates/AI powered information by Azure.jpeg" },
          { title: "Computer Vision on Azure", year: "2025", img: "images/certificates/Computer Vision in Azure.jpeg" },
          { title: "Speech Analysis on Azure", year: "2025", img: "images/certificates/Speech analysis in Azure.jpeg" },
          { title: "Text Analysis on Azure", year: "2025", img: "images/certificates/Text Analysis in Azure.jpeg" },
        ],
      },
      {
        issuer: "Deloitte",
        icon: "fa-solid fa-certificate",
        items: [
          { title: "Data Analysis Job Simulation", year: "2026", img: "images/certificates/Deloitte.png" },
        ],
      },
    ],

    /* Project  */

    projects: [
      {
        name: "VoyageIQ Smart Flight Web",
        category: "Web Application",
        description: "A smart flight booking web application that leverages AI to provide personalized flight recommendations and insights.",
        features: ["AI-powered flight recommendations", "User-friendly booking interface", "Real-time flight data integration", "Personalized travel insights"],
        stack: [
          { name: "Python", icon: "devicon-python-plain colored" },
          { name: "Flask", icon: "devicon-flask-original" },
          { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
          { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
          { name: "JavaScript", icon: "devicon-javascript-plain colored" },
          { name: "Rest API", icon: "fa-solid fa-diagram-project skill-fa" },
        ],
        images: ["images/VoyageIQ/home.png", "images/VoyageIQ/flight.png", "images/VoyageIQ/Target-Trip.png"],
        links: { view: "project.html", github: "https://github.com/Aryan-Dongre/VoyageIQ" },
      },

      {
        name: "Salon ERP System",
        category: "ERP System",
        description: "Staff, inventory, billing and multi-branch oversight from a single admin panel — built to run a real salon's day-to-day operations.",
        features: ["Staff & role management", "Inventory tracking", "Billing & invoicing", "Multi-branch oversight", "Admin dashboard"],
        stack: [
          { name: "Python", icon: "devicon-python-plain colored" },
          { name: "Flask", icon: "devicon-flask-original" },
          { name: "MySQL", icon: "devicon-mysql-plain colored" },
          { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
        ],
        images: ["images/ERP photos/Home-page.png", "images/ERP photos/admin_app.png"],
        links: { view: "project.html", github: "https://github.com/Aryan-Dongre/Salon-ERP-System" },
      },

      {
        name: "Beauty Parlor Management System",
        category: "Web Application",
        description: "Appointments, payments and services, with a dedicated customer flow and an admin control center for daily operations.",
        features: ["Appointment booking", "Service & payment tracking", "Customer-facing flow", "Admin control center"],
        stack: [
          { name: "Python", icon: "devicon-python-plain colored" },
          { name: "Flask", icon: "devicon-flask-original" },
          { name: "MySQL", icon: "devicon-mysql-plain colored" },
          { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
        ],
        images: ["images/salon photos/beauty-home.png"],
        links: { view: "project.html", github: "https://github.com/Aryan-Dongre/Beauty-Parlor-Management-Systems-" },
      },

      {
        name: "Loan Approval Prediction",
        category: "Machine Learning",
        description:
          "A machine learning project that analyzes applicant financial, demographic and credit information to predict loan approval outcomes.",
        features: [
          "Loan approval prediction",
          "Data preprocessing",
          "Exploratory data analysis",
          "Feature engineering",
          "Machine learning classification"
        ],
        stack: [
          { name: "Python", icon: "devicon-python-plain colored" },
          { name: "Pandas", icon: "devicon-pandas-plain colored" },
          { name: "NumPy", icon: "devicon-numpy-plain colored" },
          { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
          { name: "Scikit-learn", icon: "fa-solid fa-diagram-project skill-fa" }
        ],

        images: [
          "images/ML Project Image/Loan_approval.png"
        ],

        links: {view: "project.html",github: "https://github.com/Aryan-Dongre/Loan_Approval_Prediction"
        }
      },

      {
        name: "Netflix Data Analysis",
        category: "Data Analysis",
        description:
          "An exploratory data analysis project examining Netflix movies and TV shows to uncover patterns across content types, genres, countries and release trends.",

        features: [
          "Netflix content analysis",
          "Movie vs TV show analysis",
          "Genre analysis",
          "Country-wise analysis",
          "Content release trends"
        ],

        stack: [
          { name: "Python", icon: "devicon-python-plain colored" },
          {
            name: "Pandas", icon: "devicon-pandas-plain colored"
          },
          {
            name: "NumPy", icon: "devicon-numpy-plain colored"
          },
          {
            name: "Matplotlib", icon: "devicon-matplotlib-plain colored"
          },
          {
            name: "Seaborn", icon: "fa-solid fa-chart-column skill-fa"
          }
        ],

        images: [
          "images/ML Project Image/Netflix.png"
        ],

        links: {
          view: "project.html",
          github:
            "https://github.com/Aryan-Dongre/Netflix-Data-Analysis-"
        }
      },

      {
        name: "Zomato Data Analysis",
        category: "Data Analysis",
        description:
          "An exploratory data analysis project using Zomato restaurant data to understand restaurant types, ratings, votes, customer spending and online ordering behaviour.",

        features: [
          "Restaurant type analysis",
          "Rating analysis",
          "Customer vote analysis",
          "Cost analysis",
          "Online vs offline ordering analysis"
        ],

        stack: [
          { name: "Python", icon: "devicon-python-plain colored" },
          { name: "Pandas", icon: "devicon-pandas-plain colored" },
          { name: "NumPy", icon: "devicon-numpy-plain colored" },
          { name: "Matplotlib", icon: "devicon-matplotlib-plain colored" },
          { name: "Seaborn", icon: "fa-solid fa-chart-column skill-fa" }
        ],

        images: ["images/ML Project Image/Zomato.png"
        ],

        links: { view: "project.html", github: "https://github.com/Aryan-Dongre/Zomato-Analysis-Project-" }
      }
    ],

    contact: [
      { key: "Email", value: "aryan08.work@gmail.com", href: "mailto:aryan08.work@gmail.com", icon: "fa-solid fa-envelope" },
      { key: "Phone", value: "+91 87706 79378", href: "tel:+918770679378", icon: "fa-solid fa-phone" },
      { key: "Code", value: "GitHub", href: "https://github.com/Aryan-Dongre", icon: "fa-brands fa-github" },
      { key: "Network", value: "LinkedIn", href: "https://www.linkedin.com/in/aryan-dongre-417475359/", icon: "fa-brands fa-linkedin" },
    ],
  };

  /* THEME TOGGLE*/
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

  /* MOBILE NAV */

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  function closeMobileNav() {
    navToggle.classList.remove("is-open");
    navLinks.classList.remove("is-open");

    navToggle.setAttribute("aria-expanded", "false");

    document.body.classList.remove("mobile-nav-open");
  }

  navToggle.addEventListener("click", () => {

    const isOpen = !navLinks.classList.contains("is-open");

    navLinks.classList.toggle("is-open", isOpen);
    navToggle.classList.toggle("is-open", isOpen);

    navToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    document.body.classList.toggle(
      "mobile-nav-open",
      isOpen
    );
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });


  /* SCROLL REVEAL*/

  function setupRevealObserver() {
    const revealTargets = document.querySelectorAll(".reveal:not([data-reveal-ready])");

    revealTargets.forEach((el) => {
      el.setAttribute("data-reveal-ready", "true");

      if (prefersReducedMotion) {
        el.classList.add("in-view");
        return;
      }

      revealObserver.observe(el);
    });
  }

  let revealObserver;

  if (!prefersReducedMotion) {
    revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
  }
  /* 
     RENDER: SKILLS
 */
  const skillGroupsEl = document.getElementById("skillGroups");

  function levelDots(level) {
    let out = '<span class="level-dots" aria-hidden="true">';
    for (let i = 1; i <= 4; i++) {
      out += `<i class="${i <= level ? "is-filled" : ""}"></i>`;
    }
    out += "</span>";
    return out;
  }

  DATA.skills.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "skill-group reveal";

    const title = document.createElement("div");
    title.className = "skill-group-title";
    title.textContent = group.group;
    groupEl.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "skill-grid";

    group.items.forEach((skill) => {
      const tile = document.createElement("button");
      tile.type = "button";
      tile.className = "skill-tile";
      tile.setAttribute("aria-describedby", "");
      tile.innerHTML = `
        <i class="${skill.icon}" aria-hidden="true"></i>
        <span class="skill-name-inline">${skill.name}</span>
        <span class="skill-tooltip" role="tooltip">
          <span class="skill-tooltip-name">${skill.name}</span>
          <span class="skill-tooltip-level">${levelDots(skill.level)} ${DATA.levelLabels[skill.level]}</span>
        </span>
      `;
      // tap-to-toggle for touch devices
      tile.addEventListener("click", (e) => {
        const alreadyActive = tile.classList.contains("is-active");
        document.querySelectorAll(".skill-tile.is-active").forEach((t) => t.classList.remove("is-active"));
        if (!alreadyActive) tile.classList.add("is-active");
      });
      grid.appendChild(tile);
    });

    groupEl.appendChild(grid);
    skillGroupsEl.appendChild(groupEl);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".skill-tile")) {
      document.querySelectorAll(".skill-tile.is-active").forEach((t) => t.classList.remove("is-active"));
    }
  });

  /* 
     RENDER: CERTIFICATES
 */
  const certGroupsEl = document.getElementById("certGroups");
  const certModal = document.getElementById("certModal");
  const certModalImg = document.getElementById("certModalImg");
  const certModalTitle = document.getElementById("certModalTitle");
  const certModalIssuer = document.getElementById("certModalIssuer");
  const certModalClose = document.getElementById("certModalClose");
  let lastFocusedEl = null;

  function openCertModal(item, issuer) {
    lastFocusedEl = document.activeElement;
    certModalImg.src = item.img;
    certModalImg.alt = item.title;
    certModalTitle.textContent = item.title;
    certModalIssuer.textContent = `${issuer} · ${item.year}`;
    certModal.hidden = false;
    document.body.style.overflow = "hidden";
    certModalClose.focus();
  }

  function closeCertModal() {
    certModal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  certModal.querySelectorAll("[data-close-modal]").forEach((el) => el.addEventListener("click", closeCertModal));
  certModalClose.addEventListener("click", closeCertModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !certModal.hidden) closeCertModal();
  });

  DATA.certificates.forEach((group) => {
    const groupEl = document.createElement("div");
    groupEl.className = "cert-group reveal";

    groupEl.innerHTML = `<div class="cert-group-head"><i class="${group.icon}" aria-hidden="true"></i>${group.issuer}</div>`;

    const grid = document.createElement("div");
    grid.className = "cert-grid";

    group.items.forEach((item) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "cert-card";
      card.innerHTML = `
        <span class="cert-thumb">
          <img src="${item.img}" alt="${item.title} certificate" loading="lazy">
          <span class="cert-view-badge" aria-hidden="true"><i class="fa-solid fa-expand"></i></span>
        </span>
        <span class="cert-body">
          <h4>${item.title}</h4>
          <span>${group.issuer} · ${item.year}</span>
        </span>
      `;
      card.addEventListener("click", () => openCertModal(item, group.issuer));
      grid.appendChild(card);
    });

    groupEl.appendChild(grid);
    certGroupsEl.appendChild(groupEl);
  });

  /* 
     RENDER: PROJECTS
 */
  const projectListEl = document.getElementById("projectList");

  DATA.projects.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = "project reveal" + (index % 2 === 1 ? " reverse" : "");

    const stackChips = project.stack
      .map((t) => `<span class="stack-chip"><i class="${t.icon}" aria-hidden="true"></i>${t.name}</span>`)
      .join("");

    const features = project.features.map((f) => `<li>${f}</li>`).join("");

    const slides = project.images
      .map((src, i) => `<div class="carousel-slide${i === 0 ? " is-active" : ""}"><img src="${src}" alt="${project.name} screenshot ${i + 1}" loading="lazy"></div>`)
      .join("");

    const dots = project.images
      .map((_, i) => `<button type="button" class="carousel-dot${i === 0 ? " is-active" : ""}" aria-label="Show screenshot ${i + 1}"></button>`)
      .join("");

    let actions = "";
    if (project.links.view) actions += `<a href="${project.links.view}" class="btn btn-primary">View project</a>`;
    if (project.links.github) actions += `<a href="${project.links.github}" class="btn btn-outline" target="_blank" rel="noopener"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>`;

    article.innerHTML = `
      <div class="wrap project-inner">
        <div class="project-media">
          <div class="project-frame">
            <div class="carousel-track">${slides}</div>
          </div>
          ${project.images.length > 1 ? `<div class="carousel-dots">${dots}</div>` : ""}
        </div>
        <div class="project-info">
          <div class="project-kicker">
            <span class="project-index">0${index + 1}</span>
            <span class="project-category">${project.category}</span>
          </div>
          <h3 class="project-name">${project.name}</h3>
          <p class="project-desc">${project.description}</p>
          <ul class="project-features">${features}</ul>
          <div class="project-stack">${stackChips}</div>
          <div class="project-actions">${actions}</div>
        </div>
      </div>
    `;

    projectListEl.appendChild(article);

    // carousel behaviour
    if (project.images.length > 1) {
      const track = article.querySelector(".carousel-track");
      const slideEls = Array.from(track.querySelectorAll(".carousel-slide"));
      const dotEls = Array.from(article.querySelectorAll(".carousel-dot"));
      let current = 0;
      let timer = null;

      function goTo(i) {
        slideEls[current].classList.remove("is-active");
        dotEls[current].classList.remove("is-active");
        current = (i + slideEls.length) % slideEls.length;
        slideEls[current].classList.add("is-active");
        dotEls[current].classList.add("is-active");
      }

      function startAutoplay() {
        if (prefersReducedMotion) return;
        stopAutoplay();
        timer = setInterval(() => goTo(current + 1), 4500);
      }
      function stopAutoplay() {
        if (timer) clearInterval(timer);
      }

      dotEls.forEach((dot, i) => {
        dot.addEventListener("click", () => {
          goTo(i);
          startAutoplay();
        });
      });

      const frame = article.querySelector(".project-frame");
      frame.addEventListener("mouseenter", stopAutoplay);
      frame.addEventListener("mouseleave", startAutoplay);
      frame.addEventListener("focusin", stopAutoplay);
      frame.addEventListener("focusout", startAutoplay);

      startAutoplay();
    }
  });

  /* 
     RENDER: CONTACT + FOOTER LINKS
 */
  const contactGridEl = document.getElementById("contactGrid");
  const footerLinksEl = document.getElementById("footerLinks");

  DATA.contact.forEach((c, i) => {
    const isExternal = c.href.startsWith("http");
    const a = document.createElement("a");
    a.className = "contact-card reveal reveal-delay-" + ((i % 3) + 1);
    a.href = c.href;
    if (isExternal) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.innerHTML = `
      <span class="contact-icon"><i class="${c.icon}" aria-hidden="true"></i></span>
      <span class="contact-card-text">
        <span class="contact-key">${c.key}</span>
        <span class="contact-value">${c.value}</span>
      </span>
    `;
    contactGridEl.appendChild(a);
  });

  const footerSources = [
    { icon: "fa-brands fa-github", href: "https://github.com/Aryan-Dongre", label: "GitHub" },
    { icon: "fa-brands fa-linkedin", href: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: "fa-solid fa-envelope", href: "mailto:aryan08.work@gmail.com", label: "Email" },
  ];
  footerSources.forEach((f) => {
    const a = document.createElement("a");
    a.href = f.href;
    a.setAttribute("aria-label", f.label);
    if (f.href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.innerHTML = `<i class="${f.icon}" aria-hidden="true"></i>`;
    footerLinksEl.appendChild(a);
  });

  /* 
     HERO SYSTEM VISUAL — animated data packets along the paths
 */
  function initHeroSystem() {
    const svg = document.querySelector(".system-svg");
    if (!svg) return;

    const svgNS = "http://www.w3.org/2000/svg";
    const routes = [
      { path: "p-user-api", delay: 0 },
      { path: "p-api-model", delay: 900 },
      { path: "p-api-db", delay: 1500 },
      { path: "p-model-out", delay: 2600 },
      { path: "p-db-out", delay: 3100 },
    ];

    if (prefersReducedMotion) return;

    routes.forEach((route) => {
      const pathEl = document.getElementById(route.path);
      if (!pathEl) return;
      const len = pathEl.getTotalLength();

      const packet = document.createElementNS(svgNS, "circle");
      packet.setAttribute("r", "3.2");
      packet.setAttribute("class", "packet");
      packet.style.opacity = "0";
      svg.appendChild(packet);

      const duration = 1400; // ms per travel
      const cycle = 4200; // ms between launches on this route

      function travel(startTime) {
        const now = performance.now();
        const elapsed = (now - startTime) % cycle;
        if (elapsed <= duration) {
          const progress = elapsed / duration;
          const point = pathEl.getPointAtLength(progress * len);
          packet.setAttribute("cx", point.x);
          packet.setAttribute("cy", point.y);
          packet.style.opacity = String(Math.sin(Math.PI * progress) * 0.95 + 0.05);
        } else {
          packet.style.opacity = "0";
        }
        requestAnimationFrame(() => travel(startTime));
      }

      setTimeout(() => {
        requestAnimationFrame(() => travel(performance.now()));
      }, route.delay);
    });
  }
  setupRevealObserver();
  initHeroSystem();
})();
