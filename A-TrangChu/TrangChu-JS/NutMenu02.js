// Lấy các phần tử
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');
const pageOverlay = document.getElementById('page-overlay');

// Toggle trạng thái mở sidebar và đổi icon
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('open'); // Mở/Đóng sidebar
  pageOverlay.classList.toggle('active'); // Hiển thị/Ẩn overlay

  // Đổi biểu tượng từ Menu sang Close và ngược lại
  if (menuIcon.innerHTML === '✕') {
    menuIcon.innerHTML = '&#9776;'; // Trở lại icon Menu
  } else {
    menuIcon.innerHTML = '✕'; // Đổi thành icon Close
  }

  // Thêm hiệu ứng xoay và đổi màu cho icon
  menuIcon.classList.toggle('active');
});

// Đóng sidebar khi nhấn vào overlay
pageOverlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  pageOverlay.classList.remove('active');
  menuIcon.innerHTML = '&#9776;'; // Trở lại icon Menu
  menuIcon.classList.remove('active');
});