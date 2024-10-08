let currentSlide = 0;
const feedbackItems = document.querySelectorAll('.feedback-item');
const totalSlides = feedbackItems.length;

function showSlide(index) {
    const wrapper = document.querySelector('.feedback-wrapper');
    const slideWidth = wrapper.clientWidth / 3;  // Chiều rộng của mỗi feedback (hiển thị 3 cùng lúc)

    // Chuyển động các feedback
    wrapper.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;  // Tăng chỉ số slide hiện tại và lặp lại từ đầu nếu quá giới hạn
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;  // Giảm chỉ số slide hiện tại và lặp lại từ cuối nếu quá giới hạn
    showSlide(currentSlide);
}

// Hiển thị slide đầu tiên khi trang web tải xong
showSlide(currentSlide);
