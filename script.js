const emailToggle = document.getElementById("emailToggle");
const phoneToggle = document.getElementById("phoneToggle");
const contactInput = document.getElementById("contactInput");

function setActiveToggle(activeBtn, inactiveBtn, placeholderText) {
  activeBtn.classList.add("active");
  inactiveBtn.classList.remove("active");
  contactInput.placeholder = placeholderText;
}

emailToggle.addEventListener("click", function () {
  setActiveToggle(emailToggle, phoneToggle, "Please enter your email address");
});

phoneToggle.addEventListener("click", function () {
  setActiveToggle(phoneToggle, emailToggle, "Please enter your phone number");
});



document.querySelectorAll(".toggle-pass").forEach(function (button) {
  button.addEventListener("click", function () {
    togglePassword(button.dataset.target);
  });
});