// مدیریت بستن منو
document.addEventListener("click", (e) => {
    const navbar = document.querySelector(".navbar");
    const menu = document.getElementById("navbarNav");
  
    if (!navbar.contains(e.target) && menu.classList.contains("show")) {
      new bootstrap.Collapse(menu).hide();
    }
  });
  // ------------------------------------------------------------------------------------------
  
  // بستن منو در موبایل هنگام کلیک روی آیتم
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        new bootstrap.Collapse(document.getElementById("navbarNav")).hide();
      }
    });
  });
  // ------------------------------------------------------------------------------------------
  