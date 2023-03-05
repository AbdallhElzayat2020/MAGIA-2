// header
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  nav.classList.toggle("active");
});

const footer = document.querySelector("footer p");

footer.innerHTML += new Date().getFullYear();

// scroll Revel
ScrollReveal({ reset: true, distance: "80px", duration: 2000, delay: 200 });

ScrollReveal().reveal(".home-text ", {
  origin: "top",
});        
ScrollReveal().reveal(".home-text h2 ", {
  origin: "right",
});
ScrollReveal().reveal(".home-text p ", {
  origin: "left",
});
ScrollReveal().reveal(".home-text a ", {
  origin: "bottom",
});
