let index = 0;

function showNextImage() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    index = (index + 1) % items.length;
    const offset = -index * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 3500);
