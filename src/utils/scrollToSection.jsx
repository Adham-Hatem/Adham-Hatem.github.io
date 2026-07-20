export function scrollToSection(id) {
  const element = document.getElementById(id);

  alert("clicked", id);

  if (!element) {
    console.log("not found");
    return;
  }

  alert("before", window.scrollY);

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setTimeout(() => {
    alert("after", window.scrollY);
  }, 1000);
}