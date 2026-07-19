export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "auto",
    block: "start",
  });
}