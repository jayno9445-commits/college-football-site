/* =========================================================
   College Football — Road to Glory
   ---------------------------------------------------------
   👉 EDIT THIS BLOCK with your real links. Every button on the
   page pulls from here, so you only change it in one place.
   ========================================================= */
const CONFIG = {
  // Your Roblox game link (the "Play" page):
  roblox:  "https://www.roblox.com/games/120458890713784/RTG-ROBLOX-College-Football",
  // Your Discord invite:
  discord: "https://discord.gg/Z8K7Gc2CEu",
  // Your Roblox group:
  group:   "https://www.roblox.com/communities/597778494/Road-to-Glory-College-Football",
};

/* ---------------------------------------------------------
   Wire every [data-link] element to the matching CONFIG url
   --------------------------------------------------------- */
document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  if (CONFIG[key]) {
    el.setAttribute("href", CONFIG[key]);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }
});

/* ---------------------------------------------------------
   Sticky nav: solidify on scroll
   --------------------------------------------------------- */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------------------------------------------------------
   Mobile menu toggle
   --------------------------------------------------------- */
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

/* ---------------------------------------------------------
   Scroll reveal
   --------------------------------------------------------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  // small stagger for items in the same row
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  revealObserver.observe(el);
});

/* ---------------------------------------------------------
   Animated number count-up
   --------------------------------------------------------- */
function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
  if (n >= 1_000) return Math.round(n / 1_000) + "K";
  return Math.round(n).toLocaleString();
}

function animateCount(el) {
  const target = parseFloat(el.dataset.count) || 0;
  const suffix = el.dataset.suffix || "";
  const duration = 1500;
  let startTime = null;

  const step = (ts) => {
    if (startTime === null) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = formatNumber(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = formatNumber(target) + suffix;
  };
  requestAnimationFrame(step);
}

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

/* ---------------------------------------------------------
   Footer year
   --------------------------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
