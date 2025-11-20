// Sidebar Toggle Functionality
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");
const body = document.body;

// Toggle sidebar open/close
sidebarToggle.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    // Desktop behavior - collapse/expand
    sidebar.classList.toggle("collapsed");
  } else {
    // Mobile behavior - slide in/out
    body.classList.toggle("sidebar-open");
  }
});

// Close button for mobile
sidebarClose.addEventListener("click", () => {
  body.classList.remove("sidebar-open");
});

// Close sidebar when clicking outside on mobile
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      body.classList.remove("sidebar-open");
    }
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    body.classList.remove("sidebar-open");
  }
});

// Section Toggle Functionality
const sectionToggles = document.querySelectorAll(".section-toggle");

sectionToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const targetId = toggle.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);

    // Toggle active class on button
    toggle.classList.toggle("active");

    // Toggle active class on content
    targetContent.classList.toggle("active");
  });
});

// App Toggle Functionality
const appToggles = document.querySelectorAll(".app-toggle");

appToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const targetId = toggle.getAttribute("data-target");
    const targetVersions = document.getElementById(targetId);

    // Toggle active class on button
    toggle.classList.toggle("active");

    // Toggle active class on versions
    targetVersions.classList.toggle("active");
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      const targetPosition = target.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Parallax effect for hero section (reduced intensity)
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const hero = document.querySelector(".hero");
      if (hero) {
        const scrolled = window.pageYOffset;
        // Only apply parallax within hero section
        if (scrolled < hero.offsetHeight) {
          hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
      ticking = false;
    });
    ticking = true;
  }
});

// Add animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("card-visible");
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll(".card").forEach((card) => {
  card.classList.add("card-animate");
  observer.observe(card);
});

// Prevent sidebar scroll when scrolling inside it
sidebar.addEventListener("wheel", (e) => {
  e.stopPropagation();
});

// Log loaded message
console.log("Ngmsoft website loaded successfully! 🚀");

// Navbar scroll effect
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Add shadow when scrolled
  if (scrollTop > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop;
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-link");
const navMenu = document.querySelector(".navbar-menu");

function updateActiveIndicator() {
  const activeLink = document.querySelector(".navbar-link.active");
  if (activeLink && navMenu) {
    const menuRect = navMenu.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    const indicator = navMenu.querySelector("::before") || navMenu;

    // Calculate position relative to menu
    const left = linkRect.left - menuRect.left;
    const width = linkRect.width;
    const top = linkRect.top - menuRect.top;
    const height = linkRect.height;

    navMenu.style.setProperty("--indicator-left", `${left}px`);
    navMenu.style.setProperty("--indicator-width", `${width}px`);
    navMenu.style.setProperty("--indicator-top", `${top}px`);
    navMenu.style.setProperty("--indicator-height", `${height}px`);
  }
}

window.addEventListener("scroll", () => {
  let current = "";
  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar ? navbar.offsetHeight : 80;
  const scrollPosition = window.pageYOffset + navbarHeight + 1;

  // Check if we're near the bottom of the page
  const isBottom =
    window.innerHeight + window.pageYOffset >=
    document.documentElement.scrollHeight - 10;

  if (isBottom) {
    // If at bottom, highlight the last section (contact)
    current = "contact";
  } else {
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });

  updateActiveIndicator();
});

// Initialize indicator position
window.addEventListener("load", updateActiveIndicator);
window.addEventListener("resize", updateActiveIndicator);

// Navbar links are already handled by the unified smooth scroll handler above
