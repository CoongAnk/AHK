let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const carouselInner = document.querySelector('.carousel-inner');

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex--;
    }
    updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex === totalItems - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100; // Di chuyển theo phần trăm
    carouselInner.style.transform = `translateX(${offset}vw)`;
}

// Tự động chuyển đổi giữa các ảnh sau 5 giây
setInterval(() => {
    if (currentIndex === totalItems - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
}, 5000); // Thời gian 5000ms = 5 giây
