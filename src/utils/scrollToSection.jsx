export function scrollToSection(id) {
  console.log("clicked");

  const target = document.getElementById(id);

  console.log("target", target);

  if (!target) return;

  console.log("starting scroll");

  target.scrollIntoView({
    behavior: "smooth",
  });

  console.log("finished call");
}
