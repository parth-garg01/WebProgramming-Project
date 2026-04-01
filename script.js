const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Simple front-end validation for the demo contact form
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill in all fields before submitting.";
    formStatus.style.color = "#b03a2e";
    return;
  }

  formStatus.textContent = "Message sent successfully. This is a demo form.";
  formStatus.style.color = "#2f6f42";
  contactForm.reset();
});
