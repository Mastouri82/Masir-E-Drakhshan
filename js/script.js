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

// swiper script
const swiper = new Swiper(".swiper", {
  spaceBetween: 300,
  // Enable lazy loading
  lazy: {
    loadPrevNext: true,
  },

  // Responsive breakpoints
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // Disable navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// ------------------------------------------------------------------------------------------

// schedule

// داده‌های نمونه
// const scheduleData = {
//     روزهای_هفته: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه'],
//     برنامه: [
//         {
//             day: 2,
//             hour: 10,
//             course: 'برنامه‌نویسی پیشرفته',
//             professor: 'دکتر احمدی',
//             location: 'کلاس ۳۰۱'
//         },
//         {
//             day: 2,
//             hour: 14,
//             course: 'هوش مصنوعی',
//             professor: 'دکتر رضایی',
//             location: 'آزمایشگاه ۲'
//         },
//         {
//             day: 4,
//             hour: 11,
//             course: 'شبکه‌های کامپیوتری',
//             professor: 'دکتر کریمی',
//             location: 'کلاس ۲۰۳'
//         }
//     ]
// };

// داده‌های نمونه با امکان چند کلاس در یک ساعت
const scheduleData = {
  روزهای_هفته: ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه"],
  برنامه: [
    {
      day: 0,
      hour: 13,
      classes: [
        {
          type: "language",
          course: "نقاشی پیشرفته",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 0,
      hour: 14,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "هنرهای تجسمی",
        },
      ],
    },
    {
      day: 0,
      hour: 15,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
        {
          type: "art",
          course: "طراحی نقاشی",
          professor: "استاد بهرامی نژاد",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 0,
      hour: 16,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
        {
          type: "art",
          course: "طراحی نقاشی",
          professor: "استاد بهرامی نژاد",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 0,
      hour: 17,
      classes: [
        {
          type: "art",
          course: "طراحی نقاشی",
          professor: "استاد بهرامی نژاد",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 0,
      hour: 18,
      classes: [
        {
          type: "art",
          course: "اموزش دف",
          professor: "",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "امورشی گردشگری",
        },
      ],
    },
    {
      day: 0,
      hour: 19,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد شامی",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 1,
      hour: 10,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 1,
      hour: 11,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 1,
      hour: 12,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 1,
      hour: 14,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنرهای تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 1,
      hour: 15,
      classes: [
        {
          type: "art",
          course: "اموزش موسیقی",
          professor: "استاد مردانی",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 1,
      hour: 16,
      classes: [
        {
          type: "art",
          course: "اموزش موسیقی",
          professor: "استاد مردانی",
          location: "اموزشی گردشگری",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 1,
      hour: 17,
      classes: [
        {
          type: "art",
          course: "اموزش موسیقی",
          professor: "استاد مردانی",
          location: "اموزشی گردشگری",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 1,
      hour: 18,
      classes: [
        {
          type: "art",
          course: "فن بیان",
          professor: "استاد خانساری",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 2,
      hour: 14,
      classes: [
        {
          type: "art",
          course: "اموزش موسیقی",
          professor: "استاد کلهر",
          location: "هنر های تجسمی",
        },
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 2,
      hour: 15,
      classes: [
        {
          type: "art",
          course: "اموزش موسیقی",
          professor: "استاد کلهر",
          location: "هنر های تجسمی",
        },
        {
          type: "art",
          course: "اموزش نقاشی",
          professor: "استاد",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 2,
      hour: 16,
      classes: [
        {
          type: "art",
          course: "اموزش نقاشی",
          professor: "استاد",
          location: "اموزشی گردشگری",
        },
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 1,
      hour: 17,
      classes: [
        {
          type: "art",
          course: "اموزش خط",
          professor: "استاد لطیفی",
          location: "اموزشی گردشگری",
        },
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 1,
      hour: 18,
      classes: [
        {
          type: "math",
          course: "اموزش چرتکه",
          professor: "استاد",
          location: "اموزشی گردشگری",
        },
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 2,
      hour: 19,
      classes: [
        {
          type: "computer",
          course: "اموزش اسکرچ",
          professor: "استاد",
          location: "اموزشی گردشگری",
        },
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 3,
      hour: 10,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استادایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 3,
      hour: 11,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 3,
      hour: 12,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 3,
      hour: 14,
      classes: [
        {
          type: "art",
          course: "اموزش نقاشی",
          professor: "استاد رحمانی",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 3,
      hour: 16,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 3,
      hour: 17,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد ایرانی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 3,
      hour: 18,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 10,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 11,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 13,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 14,
      classes: [
        {
          type: "language",
          course: "اموزش انگلیسی",
          professor: "استاد نصرالهی",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 15,
      classes: [
        {
          type: "art",
          course: "اموزش نقاشی",
          professor: "استاد",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 16,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 17,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 18,
      classes: [
        {
          type: "math",
          course: "اموزش چرتکه",
          professor: "",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 4,
      hour: 19,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد بهرامی",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 5,
      hour: 8,
      classes: [
        {
          type: "computer",
          course: "برنامه نویسی",
          professor: "استاد مسطوری",
          location: "هنر های تجسمی",
        },
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
      ],
    },
    {
      day: 5,
      hour: 9,
      classes: [
        {
          type: "math",
          course: "ریاضی پنجم",
          professor: "استاد پورطیب",
          location: "اموزشی گردشگری",
        },
        {
          type: "math",
          course: "",
          professor: "استاد مسطوری",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 5,
      hour: 10,
      classes: [
        {
          type: "math",
          course: "",
          professor: "استاد مسطوری",
          location: "هنر های تجسمی",
        },
        {
          type: "language",
          course: "آموزش انگلیسی",
          professor: "استاد پورطیب",
          location: "اموزشی گردشگری",
        },
      ],
    },
    {
      day: 5,
      hour: 11,
      classes: [
        {
          type: "",
          course: "",
          professor: "",
          location: "",
        },
        {
          type: "math",
          course: "ریاضی ششم",
          professor: "استاد عبدی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 5,
      hour: 12,
      classes: [
        {
          type: "art",
          course: "اموزش نقاشی",
          professor: "استاد کبیری",
          location: "اموزشی گردشگری",
        },
        {
          type: "computer",
          course: "اموزش کامپیوتر",
          professor: "استاد عبدی",
          location: "هنر های تجسمی",
        },
      ],
    },
    {
      day: 5,
      hour: 13,
      classes: [
        {
          type: "art",
          course: "اموزش نقاشی",
          professor: "استاد کبیری",
          location: "اموزشی گردشگری",
        },
        {
          type: "computer",
          course: "اموزش کامپیوتر",
          professor: "استاد عبدی",
          location: "هنر های تجسمی",
        },
      ],
    },
  ],
};

// دریافت روز فعلی
function getCurrentDay() {
  const days = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "شنبه"];
  const today = new Date().getDay();
  return days[today];
}

// دریافت زمان فعلی
function getCurrentTime() {
  const now = new Date();
  return {
    hour: now.getHours(),
    minute: now.getMinutes(),
  };
}

// به‌روزرسانی عنوان با نام روز
document.querySelector(
  ".schedule-title"
).textContent = `برنامه امروز (${getCurrentDay()})`;

// تولید برنامه امروز

// function generateTodaySchedule() {
//     const container = document.getElementById('todaySchedule');
//     let html = '';

//     for(let hour = 8; hour <= 20; hour++) {
//         const courses = scheduleData.برنامه.filter(c =>
//             c.day === currentDayIndex && c.hour === hour
//         );

//         html += `
//             <div class="time-slot ${courses.length ? 'active' : ''}"
//                  onclick="showCourseDetails(${hour}, ${currentDayIndex})">
//                 <div class="time-label">${hour}:00</div>
//                 ${courses.length ?
//                     `<div class="course-name">${courses[0].course}</div>` :
//                     '<div class="text-muted">بدون کلاس</div>'}
//             </div>
//         `;
//     }

//     container.innerHTML = html;
// }

// تابع تولید برنامه امروز با قابلیت چند کلاس
// function generateTodaySchedule() {
//     const container = document.getElementById('todaySchedule');
//     let html = '';

//     for(let hour = 8; hour <= 20; hour++) {
//         const courses = scheduleData.برنامه.filter(c =>
//             c.day === currentDayIndex && c.hour === hour
//         );

//         html += `
//             <div class="time-slot ${courses.length ? 'active' : ''}"
//                  onclick="showCourseDetails(${hour}, ${currentDayIndex})">
//                 <div class="time-label mb-0 mb-sm-1">${hour}:00</div>
//                 ${courses[0]?.classes.map(c => `
//                     <span class="course-badge ${c.type}">
//                         ${c.course}
//                     </span>
//                 `).join('') || '<div class="text-muted">بدون کلاس</div>'}
//             </div>
//         `;
//     }

//     container.innerHTML = html;
// }

// تولید برنامه امروز با قابلیت نمایش وضعیت کلاس‌ها
function generateTodaySchedule() {
  const container = document.getElementById("todaySchedule");
  const currentTime = getCurrentTime();
  const currentHour = currentTime.hour;
  const currentMinute = currentTime.minute;

  let html = "";

  for (let hour = 8; hour <= 20; hour++) {
    const courses = scheduleData.برنامه.filter(
      (c) => c.day === currentDayIndex && c.hour === hour
    );

    if (courses.length === 0) continue;

    const isFuture = hour > currentHour;
    const isCurrent = hour === currentHour;

    const courseDuration = courses[0].duration || 1;
    const progress = isCurrent
      ? Math.min((currentMinute / (courseDuration * 60)) * 100, 100)
      : 0;

    html += `
          <div class="time-slot ${isCurrent ? "current" : "future"}" 
               style="${isCurrent ? `--progress: ${progress}%` : ""}"
               onclick="showCourseDetails(${hour}, ${currentDayIndex})">
              <div class="time-label">${hour}:00</div>
              ${courses[0].classes
                .map(
                  (c) => `
                  <span class="course-badge ${c.type}">
                      ${c.course}
                  </span>
              `
                )
                .join("")}
          </div>
      `;
  }

  container.innerHTML = html;
}

// تولید برنامه کامل
// function generateFullSchedule() {
//     const container = document.getElementById('fullSchedule');
//     let html = '';

//     for(let hour = 8; hour <= 20; hour++) {
//         html += '<tr>';
//         html += `<td>${hour}:00</td>`;

//         scheduleData.روزهای_هفته.forEach((_, dayIndex) => {
//             const courses = scheduleData.برنامه.filter(c =>
//                 c.day === dayIndex && c.hour === hour
//             );

//             html += `
//                 <td class="${courses.length ? 'active' : ''}"
//                     onclick="showCourseDetails(${hour}, ${dayIndex})">

//                     ${courses.length ? courses[0].course : ''}
//                 </td>
//             `;
//         });

//         html += '</tr>';
//     }

//     container.innerHTML = html;
// }

function generateFullSchedule() {
  const container = document.getElementById("fullSchedule");
  let html = "";

  for (let hour = 8; hour <= 20; hour++) {
    html += "<tr>";
    html += `<td>${hour}:00</td>`;

    scheduleData.روزهای_هفته.forEach((_, dayIndex) => {
      const courses = scheduleData.برنامه.filter(
        (c) => c.day === dayIndex && c.hour === hour
      );

      html += `
                <td class="${courses.length ? "active" : ""}" 
                    onclick="showCourseDetails(${hour}, ${dayIndex})">
                    ${
                      courses.length
                        ? courses[0].classes.map((c) => c.course).join(", ")
                        : ""
                    }
                </td>
            `;
    });

    html += "</tr>";
  }

  container.innerHTML = html;
}

// تابع نمایش جزئیات با قابلیت چند کلاس
// function showCourseDetails(hour, day) {
//     const courses = scheduleData.برنامه.find(c =>
//         c.day === day && c.hour === hour
//     )?.classes || [];

//     if(courses.length > 0) {
//         const modalBody = document.querySelector('#courseModal .modal-body');
//         modalBody.innerHTML = courses.map(c => `
//             <div class="mb-4 p-3 border rounded">
//                 <h6 class="mb-3">${c.course}</h6>
//                 <ul class="list-group">
//                     <li class="list-group-item"><strong>نوع کلاس:</strong> ${c.type === 'art' ? 'هنر' : 'زبان'}</li>
//                     <li class="list-group-item"><strong>استاد:</strong> ${c.professor}</li>
//                     <li class="list-group-item"><strong>مکان:</strong> ${c.location}</li>
//                 </ul>
//             </div>
//         `).join('');

//         new bootstrap.Modal(document.getElementById('courseModal')).show();
//     }
// }

function showCourseDetails(hour, day) {
  // بررسی وجود مدال؛ اگر وجود ندارد، آن را به صفحه اضافه می‌کنیم
  if (!document.getElementById("courseModal")) {
    const modalHtml = `
        <div class="modal fade" id="courseModal" tabindex="-1" aria-labelledby="courseModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title" id="courseModalLabel">جزئیات کلاس</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                 <!-- اطلاعات کلاس‌ها اینجا نمایش داده می‌شود -->
               </div>
               <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
               </div>
             </div>
           </div>
        </div>
        `;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
  }

  // یافتن کلاس‌های موجود در ساعت و روز مورد نظر
  const courses =
    scheduleData.برنامه.find((c) => c.day === day && c.hour === hour)
      ?.classes || [];

  if (courses.length > 0) {
    const modalBody = document.querySelector("#courseModal .modal-body");
    modalBody.innerHTML = courses
      .map(
        (c) => `
            <div class="mb-4 p-3 border rounded">
                <h6 class="mb-3">${c.course}</h6>
                <ul class="list-group">
                    <li class="list-group-item"><strong>نوع کلاس:</strong> ${
                      c.type === "art"
                        ? "هنر"
                        : c.type === "language"
                        ? "زبان"
                        : c.type === "computer"
                        ? "کامپیوتر"
                        : ""
                    }</li>
                    <li class="list-group-item"><strong>استاد:</strong> ${
                      c.professor
                    }</li>
                    <li class="list-group-item"><strong>مکان:</strong> ${
                      c.location
                    }</li>
                </ul>
            </div>
        `
      )
      .join("");

    // نمایش مدال با استفاده از Bootstrap
    new bootstrap.Modal(document.getElementById("courseModal")).show();
  }
}

// اجرای اولیه
const today = new Date().getDay();
const persianDayMap = [1, 2, 3, 4, 5, 0];
const currentDayIndex = persianDayMap[today];

generateTodaySchedule();
generateFullSchedule();

// به‌روزرسانی هر دقیقه
setInterval(generateTodaySchedule, 60000);

// در بخش JavaScript
// function updateClassColors() {
//   const currentTime = getCurrentTime();

//   document.querySelectorAll('.time-slot.current').forEach(slot => {
//       const startHour = parseInt(slot.querySelector('.time-label').textContent.split(':')[0]);
//       const courseDuration = 2; // مدت زمان کلاس به ساعت
//       const progress = ((currentTime.hour - startHour) * 60 + currentTime.minute) / (courseDuration * 60);

//       let r, g, b;
//       if (progress <= 0.5) {
//           // از سبز به زرد
//           r = Math.floor(46 + (241 - 46) * (progress * 2));
//           g = Math.floor(204 + (196 - 204) * (progress * 2));
//           b = Math.floor(113 - 113 * (progress * 2));
//       } else {
//           // از زرد به قرمز
//           r = Math.floor(241 + (231 - 241) * ((progress - 0.5) * 2));
//           g = Math.floor(196 - 196 * ((progress - 0.5) * 2));
//           b = Math.floor(15 - 15 * ((progress - 0.5) * 2));
//       }

//       slot.style.backgroundColor = `rgb(${r},${g},${b})`;

//       // تغییر رنگ متن برای خوانایی
//       const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
//       slot.style.color = luminance > 0.5 ? '#2c3e50' : 'white';
//   });
// }

function updateClassColors() {
  const currentTime = getCurrentTime();

  document.querySelectorAll(".time-slot").forEach((slot) => {
    const startHour = parseInt(
      slot.querySelector(".time-label").textContent.split(":")[0]
    );
    const startMinute =
      parseInt(slot.querySelector(".time-label").textContent.split(":")[1]) ||
      0;
    const courseDuration = 60; // کل مدت کلاس (دقیقه)
    const classStartTime = startHour * 60 + startMinute; // زمان شروع کلاس به دقیقه
    const classEndTime = classStartTime + courseDuration; // زمان پایان کلاس به دقیقه
    const currentMinutes = currentTime.hour * 60 + currentTime.minute; // زمان کنونی به دقیقه

    let r, g, b;

    if (currentMinutes < classStartTime) {
      // اگر کلاس هنوز شروع نشده باشد → خاکستری
      r = 200;
      g = 200;
      b = 200;
      slot.style.color = "black";
    } else if (currentMinutes >= classEndTime) {
      // اگر کلاس تمام شده باشد → قرمز
      r = 255;
      g = 0;
      b = 0;
      slot.style.color = "white";
    } else {
      const elapsedTime = currentMinutes - classStartTime; // دقیقه‌های سپری‌شده از شروع کلاس

      if (elapsedTime <= 20) {
        // مرحله ۱: سبز (46, 204, 113)
        r = 46;
        g = 204;
        b = 113;
        slot.style.color = "white";
      } else if (elapsedTime <= 40) {
        // مرحله ۲: تغییر از سبز به زرد (255, 255, 0)
        let progress = (elapsedTime - 20) / 20;
        r = Math.floor(46 + (255 - 46) * progress);
        g = Math.floor(204 + (255 - 204) * progress);
        b = Math.floor(113 - 113 * progress);
        slot.style.color = "#000"; // متن مشکی در مرحله زرد
      } else {
        // مرحله ۳: تغییر از زرد به قرمز (255, 0, 0)
        let progress = (elapsedTime - 40) / 20;
        r = 255;
        g = Math.floor(255 - 255 * progress);
        b = 0;
        slot.style.color = "white";
      }
    }

    slot.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
}

// به روزرسانی هر ثانیه
setInterval(updateClassColors, 1000);

// ------------------------------------------------------------------------------------------

// our team
// اطلاعات اساتید

