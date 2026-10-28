import { gsap } from "gsap";

// Shared motion settings so every animation on the site feels the same
const DURATION = 0.8;
const EASE = "power2.out";
const DISTANCE = 30;
const STAGGER = 0.12;

const reveal = (element) => {
  const isStagger = element.dataset.animate === "stagger";

  gsap.fromTo(
    isStagger ? element.children : element,
    { opacity: 0, y: DISTANCE },
    {
      opacity: 1,
      y: 0,
      duration: DURATION,
      ease: EASE,
      stagger: isStagger ? STAGGER : 0,
      clearProps: "transform",
    },
  );
};

const initAnimations = () => {
  window.__animationsReady = true;

  // The inline script in Layout.astro only adds this class when motion is allowed
  if (!document.documentElement.classList.contains("has-animations")) return;

  // IntersectionObserver instead of ScrollTrigger: it doesn't need recalculating
  // when React islands (like the contact form) render and change the page height
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10% 0px" },
  );

  document
    .querySelectorAll("[data-animate]")
    .forEach((element) => observer.observe(element));
};

initAnimations();
