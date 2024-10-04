// JavaScript cho phần câu hỏi thường gặp với chỉ mở một câu trả lời
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // Đóng tất cả các câu trả lời trước khi mở câu trả lời được nhấp vào
        faqItems.forEach(otherItem => {
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherQuestion = otherItem.querySelector('.faq-question');

            if (otherAnswer !== answer) {
                otherAnswer.style.display = 'none';  // Ẩn câu trả lời khác
                otherQuestion.style.backgroundColor = '#f1f1f1';  // Đặt lại màu câu hỏi
                otherQuestion.style.color = '#000';
            }
        });

        // Hiển thị hoặc ẩn câu trả lời hiện tại
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            question.style.backgroundColor = '#f1f1f1';
            question.style.color = '#000';
        } else {
            answer.style.display = 'block';
            question.style.backgroundColor = '#333';
            question.style.color = '#fff';
        }
    });
});
