// map-navigation.js
console.log("✅ map-navigation.js loaded successfully");

// --- Load answered pins ---
function loadAnsweredPins() {
  const answered = JSON.parse(localStorage.getItem("answeredPins") || "[]");
  answered.forEach(label => {
    const pin = document.querySelector(`[data-label="${label}"]`);
    if (pin) pin.classList.add("answered");
  });
  updateNextButton(answered);
}

// --- Mark pin as answered ---
function markPinAnswered(label) {
  let answered = JSON.parse(localStorage.getItem("answeredPins") || "[]");
  if (!answered.includes(label)) {
    answered.push(label);
    localStorage.setItem("answeredPins", JSON.stringify(answered));
    updateNextButton(answered);
  }
}

// --- Update next button state ---
function updateNextButton(answeredPins) {
  const nextBtn = document.getElementById("nextBtn");
  if (!nextBtn) return;

  // Example rule: need at least 2 answered pins
  if (answeredPins.length >= 2) {
    nextBtn.disabled = false;
    nextBtn.classList.remove("disabled");
  } else {
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");
  }
}

// --- Listen for "Next" button click ---
function setupNextButton() {
  const nextBtn = document.getElementById("nextBtn");
  if (!nextBtn) return;

  nextBtn.addEventListener("click", () => {
    const answered = JSON.parse(localStorage.getItem("answeredPins") || "[]");
    if (answered.length >= 2) {
      // Proceed to next page
      window.location.href = nextBtn.dataset.next; // Example: <button id="nextBtn" data-next="stairs.html">
    } else {
      alert("Please answer at least 2 pins before continuing.");
    }
  });
}

// --- Initialize everything ---
document.addEventListener("DOMContentLoaded", () => {
  loadAnsweredPins();
  setupNextButton();
});
