const prevBtn = document.querySelector('.service-nav.prev');
const nextBtn = document.querySelector('.service-nav.next');
const serviceWrapper = document.querySelector('.service-wrapper');

prevBtn.addEventListener('click', () => {
    serviceWrapper.scrollBy({
        left: -170, // Cuộn ngược lại mỗi lần nhấn (kích thước item + gap)
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    serviceWrapper.scrollBy({
        left: 170, // Cuộn tới mỗi lần nhấn (kích thước item + gap)
        behavior: 'smooth'
    });
});
