// Button Click
document.getElementById("magicButton").addEventListener("click", () => {
  alert("Button clicked!");
  document.getElementById("magicButton").textContent = "Clicked!";
});

// Hover Effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "coral";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

// Keypress Detection
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");

keyInput.addEventListener("keyup", (e) => {
  keyOutput.textContent = `You typed: ${e.key}`;
});

// Image Gallery
const images = [
  "https://via.placeholder.com/200?text=1",
  "https://via.placeholder.com/200?text=2",
  "https://via.placeholder.com/200?text=3"
];
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  galleryImage.src = images[currentIndex];
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  galleryImage.src = images[currentIndex];
});

// Tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.classList.remove("active");
    });
    const target = tab.getAttribute("data-target");
    document.getElementById(target).classList.add("active");
  });
});

// Form Validation
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  errorMsg.textContent = "";

  if (!email.value.includes("@")) {
    errorMsg.textContent = "Enter a valid email.";
    e.preventDefault();
  } else if (password.value.length < 8) {
    errorMsg.textContent = "Password must be at least 8 characters.";
    e.preventDefault();
  } else {
    alert("Form submitted successfully!");
  }
});
