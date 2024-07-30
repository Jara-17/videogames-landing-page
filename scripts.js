document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".cta-button");
  ctaButton.addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector("#games").offsetTop,
      behavior: "smooth",
    });
  });
});
