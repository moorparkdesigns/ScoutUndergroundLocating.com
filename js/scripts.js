/*!
 * Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// JavaScript to show error messages in the 'errorMessages' div

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    let valid = true;

    // Reset error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate Name
    if (name.length < 2) {
      document.getElementById("nameError").textContent =
        "Please enter your full name.";
      valid = false;
    }

    // Validate Email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Enter a valid email address.";
      valid = false;
    }

    // Validate Phone (allow + and 10+ digits)
    const phoneRegex = /^\+?\d{10,}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById("phoneError").textContent =
        "Enter a valid phone number.";
      valid = false;
    }

    // Validate Message
    if (message.length < 10) {
      document.getElementById("messageError").textContent =
        "Message must be at least 10 characters.";
      valid = false;
    }

    // ✅ Only submit if all is valid
    if (!valid) {
      e.preventDefault(); // prevent submission
    } else {
      // Let Formspree handle the submission, then clear form after a delay
      setTimeout(() => {
        form.reset();
      }, 100); // slight delay to let Formspree grab the data
    }
  });
});
