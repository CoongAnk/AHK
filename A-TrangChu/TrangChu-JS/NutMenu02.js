// Lấy các phần tử cần thiết
const menuIcon = document.querySelector('.menu-icon');
const closeButton = document.getElementById('close-button');
const sideMenu = document.getElementById('side-menu');
const bodyOverlay = document.createElement('div'); // Tạo phần tử nền trắng

// Thêm class cho nền trắng
bodyOverlay.classList.add('body-overlay');
document.body.appendChild(bodyOverlay); // Thêm vào body

// Mở menu khi nhấn vào biểu tượng menu
menuIcon.addEventListener('click', () => {
  sideMenu.classList.add('open'); // Mở sidebar
  bodyOverlay.classList.add('active'); // Hiển thị nền trắng
});

// Đóng menu khi nhấn vào nút đóng hoặc nền trắng
closeButton.addEventListener('click', closeMenu);
bodyOverlay.addEventListener('click', closeMenu);

function closeMenu() {
  sideMenu.classList.remove('open'); // Đóng sidebar
  bodyOverlay.classList.remove('active'); // Ẩn nền trắng
}
