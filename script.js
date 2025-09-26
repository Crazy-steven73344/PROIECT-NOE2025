const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

document.getElementById('prevBtn').addEventListener('click', () => {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
  showSlide(currentSlide);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : slides.length - 1;
  showSlide(currentSlide);
});

// Typewriter effect pentru slide1 titlu
window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.typewriter');
  const text = element.getAttribute('data-text');
  const speed = 100; // ms per character
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, speed);
    } else {
      element.classList.add('cursor-blink');
    }
  }
  typeChar();
});
