// ============================
// Part 1: Event Handling Basics
// ============================

// Toggle light/dark mode
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ============================
// Part 2: Interactive Elements
// ============================

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");

incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterDisplay.textContent = count;
});

// Collapsible FAQ Section
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ============================
// Part 3: Form Validation
// ============================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const successMessage = document.getElementById("successMessage");

// Utility: email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate on submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop form submission
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (min 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (valid) {
    successMessage.textContent = "🎉 Registration successful!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});

// Real-time validation (optional UX improvement)
emailInput.addEventListener("input", () => {
  if (emailRegex.test(emailInput.value)) {
    emailError.textContent = "";
  }
});
