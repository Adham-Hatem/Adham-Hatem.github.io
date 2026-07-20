export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  window.scrollTo({
    top: element.offsetTop - 90,
    behavior: "smooth",
  });
}
