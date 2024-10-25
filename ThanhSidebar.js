// Lấy các phần tử cần thiết
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.getElementById('sidebar');
const pageOverlay = document.getElementById('page-overlay');
const menuItems = document.querySelectorAll('.menu-items a'); // Lấy tất cả menu items

// Toggle mở/đóng sidebar và biểu tượng menu/close
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('open'); // Mở/Đóng sidebar
  pageOverlay.classList.toggle('active'); // Hiển thị/Ẩn overlay

  // Đổi biểu tượng từ Menu sang Close và ngược lại
  if (menuIcon.innerHTML === '✕') {
    menuIcon.innerHTML = '&#9776;'; // Trở lại icon Menu
    menuIcon.classList.remove('active');
  } else {
    menuIcon.innerHTML = '✕'; // Đổi thành icon Close
    menuIcon.classList.add('active');
  }
});

// Đóng sidebar và overlay khi nhấn vào icon Close
menuIcon.addEventListener('click', () => {
  if (menuIcon.innerHTML === '&#9776;') {
    sidebar.classList.remove('open'); // Đóng sidebar
    pageOverlay.classList.remove('active'); // Ẩn overlay
  }
});

// Đóng sidebar và overlay khi nhấn vào bất kỳ menu item nào
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    sidebar.classList.remove('open'); // Đóng sidebar
    pageOverlay.classList.remove('active'); // Ẩn overlay
    menuIcon.innerHTML = '&#9776;'; // Trở lại icon Menu
    menuIcon.classList.remove('active'); // Xóa trạng thái active
  });
});

const expandableMenu = document.querySelector('.has-submenu');
const submenu = expandableMenu.querySelector('.submenu');

// Toggle submenu khi nhấn vào "Lĩnh Vực Hoạt Động"
expandableMenu.addEventListener('click', (e) => {
  e.preventDefault(); // Ngăn chặn điều hướng mặc định
  submenu.classList.toggle('active'); // Hiển thị / Ẩn submenu
});