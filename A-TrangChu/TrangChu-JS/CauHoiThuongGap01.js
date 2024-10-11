function toggleFAQ(selectedItem) {
    // Lấy tất cả các phần tử FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');

        // Nếu là phần tử hiện tại đang được chọn thì toggle hiển thị
        if (item === selectedItem) {
            const isDisplayed = answer.style.display === 'block';
            // Đóng tất cả các câu trả lời khác
            answer.style.display = isDisplayed ? 'none' : 'block';
        } else {
            // Đóng các câu trả lời khác
            item.querySelector('.faq-answer').style.display = 'none';
        }
    });
}
