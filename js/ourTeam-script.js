// داده‌های نمونه اساتید
const masteries = [
  {
    firstName: "مبینا",
    lastName: "بهرامی",
    image: "assets/mobi-img.jpg",
    field: "زبان",
  },
];
const ourTeamWrp = document.querySelector(".our-team-wrp");
ourTeamWrp.insertAdjacentHTML(
  "beforeend",
    `<div
          class="card col-6 col-md-4 col-lg-3 overflow-hidden border-0 rounded-2 bg-transparent"
        >
          <div class="card-body position-relative h-100">
            <div
              class="primery-face position-absolute start-0 top-0 w-100 h-100"
            >
              <div class="w-100 position-relative h-100">
                <img class="img-fluid rounded" src="${masteries[0].image}" alt="${masteries[0].lastName}" />
                <div
                  class="primery-mastery-info position-absolute bottom-0 ps-2 text-white w-100 rounded-bottom"
                >
                  <h5 class="m-0">استاد ${masteries[0].lastName}</h5>
                  <p class="mb-1">دبیر ${masteries[0].field}</p>
                </div>
              </div>
            </div>
            <div
              class="secondary-face position-absolute start-0 w-100 h-100"
            >
              <div class="position-relative h-100 w-100 rounded-3">
                <div class="avatar-bg h-25 bg-info rounded-3">
                  <img
                    class="img-avatar rounded-circle position-absolute"
                    src="${masteries[0].image}"
                    alt="${masteries[0].lastName}"
                    width="80px"
                    height="80px"
                  />
                </div>
                <div class="mt-5 text-center">
                  <h4>استاد مبینا بهرامی</h4>
                  <p>مدرس زبان انگلیسی</p>
                  <div class="connect-to-mastery mt-4">
                    <a href=""><i class="fa-brands fa-telegram fs-3"></i></a>
                    <a href=""
                      ><i class="fa-brands fa-instagram fs-3 mx-2"></i
                    ></a>
                    <a href=""><i class="fa-solid fa-phone fs-4"></i></a>
                  </div>

                  <p class="mt-3">
                    mobibahrami@gmail.com
                    <i class="fa-solid fa-envelope fs-4 d-none d-md-inline-block"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>`
);
