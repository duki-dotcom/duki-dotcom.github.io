// Smooth fade-in effect for sections on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Initial styling for scroll animation
document.querySelectorAll(".section").forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.8s ease-out";
});