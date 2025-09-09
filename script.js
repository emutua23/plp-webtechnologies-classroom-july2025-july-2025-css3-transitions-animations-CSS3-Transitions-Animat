/* script.js */
// === Part 2: JavaScript Functions — Scope, Parameters & Return Values ===

// Reusable function (with parameter) to toggle animation class
// Demonstrates parameter usage and return value can be used if needed
function toggleAnimation(card, shouldAnimate){
  if(shouldAnimate){
    card.classList.add('auto');
  } else {
    card.classList.remove('auto');
  }
}

// Global scope: reference to all cards
const cards = document.querySelectorAll('.card');

// Local scope within forEach callback, demonstrating idx parameter
cards.forEach((card, idx) => {
  card.addEventListener('click', () => {
    console.log(`Card ${idx+1} clicked`);
    // Toggle animation on a single card
    card.classList.toggle('auto');
  });
});

// === Part 3: Combining CSS Animations with JavaScript ===
// Buttons call reusable functions to trigger CSS animation dynamically
document.getElementById('animateAll').addEventListener('click', () => {
  cards.forEach(c => toggleAnimation(c, true));
});
document.getElementById('stopAll').addEventListener('click', () => {
  cards.forEach(c => toggleAnimation(c, false));
});
