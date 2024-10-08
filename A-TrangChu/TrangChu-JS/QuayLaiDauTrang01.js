// Lấy nút "back to top"
const backToTopButton = document.getElementById('back-to-top');

// Lắng nghe sự kiện khi cuộn trang
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {  // Nếu cuộn xuống hơn 300px, hiển thị nút
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});
