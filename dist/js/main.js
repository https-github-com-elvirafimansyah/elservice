// navbar fixed top scroll 
document.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar-home");
  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add(["bg-white"], ["shadow-card"]);
  } else {
    navbar.classList.remove(["bg-white"], ["shadow-card"]);
  }
});
