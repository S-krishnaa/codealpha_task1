let overLay = document.querySelector('.gallerOverlay');
let imageBox = document.querySelector('.imageBox');
let img = document.querySelector('.imageBox img');
let galleryItems = document.querySelectorAll('#gallery img');
let closeBtn = document.querySelector('.close');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let currentIndex = 0;

// open overlay on click
galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    currentIndex = index;
    showImage();
    overLay.classList.add('galleryOverlayShow');
    imageBox.classList.add('imageBoxShow');
  });
});

function showImage() {
  img.style.transition = 'none'; // ← transition disable
  img.src = galleryItems[currentIndex].src;
}

// close overlay
closeBtn.addEventListener('click', () => {
  overLay.classList.remove('galleryOverlayShow');
  imageBox.classList.remove('imageBoxShow');
});

// prev button
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage();
});

// next button
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage();
});