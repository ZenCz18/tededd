const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
  const href = link.getAttribute("href");

  if (href === currentPage) {
    link.classList.add("active");
  }

  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contactForm");

if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    alert("ขอบคุณสำหรับข้อความ ทีมงาน Velvet Room จะติดต่อกลับโดยเร็วที่สุด");
    form.reset();
  });
}
