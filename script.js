/* script.js */
//  Demonstrates JavaScript functions with parameters, scope, and return values

// Function to handle scroll reveal animations
function revealOnScroll() {
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

// Function to control card auto-animation using a parameter
function toggleAnimation(enable) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (enable) {
      card.classList.add('auto');
    } else {
      card.classList.remove('auto');
    }
  });
  return enable; // return value showing current state
}

// Event listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.getElementById('animateAll').addEventListener('click', () => toggleAnimation(true));
document.getElementById('stopAll').addEventListener('click', () => toggleAnimation(false));