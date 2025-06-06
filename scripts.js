const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    const video = slide.querySelector('video');

    if (i === index) {
      slide.classList.add('active');
      if (video) video.play();
    } else {
      slide.classList.remove('active');
      if (video) {
        video.pause();
        video.currentTime = 0;  // Reinicia o vídeo quando não estiver ativo
      }
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Auto slide a cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

// Mostrar slide inicial
showSlide(currentIndex);
