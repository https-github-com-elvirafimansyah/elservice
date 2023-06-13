
// navbar fixed top scroll 
document.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar-home");
  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add(["bg-white"], ["shadow-card"]);
  } else {
    navbar.classList.remove(["bg-white"], ["shadow-card"]);
  }
});

// Testimonial Data Display
// Data Testimonial
const data = [
  {
    profile:
      "https://cdn.discordapp.com/avatars/574137081261981716/45e898470aa673eb33ebeea3401fc92f.webp?size=128",
    name: "Muhammad Garuda Kusuma",
    testi:
      "Hasil UI bagus, pekerjaan sesuai dengan brief dan deadline.. Juga proaktif dalam pelaporan progress design 👍",
    date: "22 Januari 2022"
  },
  {
    profile:
      "https://cdn.discordapp.com/avatars/902188905376415826/2cd3e9e63299ebc24ccd6bc26a1f3449.webp?size=80",
    name: "John Dae",
    testi: "Waw, respon dari adminnya cepat lalu hasilnya memuaskan bagi saya.",
    date: "22 Januari 2022"
  },
  {
    profile:
      "https://cdn.discordapp.com/avatars/902188905376415826/2cd3e9e63299ebc24ccd6bc26a1f3449.webp?size=80",
    name: "Sabrina C",
    testi: "Waw, respon dari adminnya cepat lalu hasilnya memuaskan bagi saya.",
    date: "22 Januari 2022"
  },
  {
      profile:
        "https://cdn.discordapp.com/avatars/574137081261981716/45e898470aa673eb33ebeea3401fc92f.webp?size=128",
      name: "Fuck",
      testi:
        "Hasil UI bagus, pekerjaan sesuai dengan brief dan deadline.. Juga proaktif dalam pelaporan progress design 👍",
      date: "22 Januari 2022"
  },
];

// Main Parent
const container = document.getElementById('testi-parent');
// Display Data
data.forEach((item) => {
  const parent = document.createElement("div");
  container.appendChild(parent);
  parent.innerHTML = `
      <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="flex justify-center items-center w-full h-full flex-col">
          <div class="bg-white relative border-2 border-gray-100 h-full w-9/12 md:w-10/12 md:space-y-3 space-y-2  rounded-xl">
              <div class="p-4 sm:p-7 md:space-y-3 space-y-2">
              <div class="bg-slightblue rounded-full p-1.5 w-fit flex items-center break-words">
                  <img
                  src="${item.profile}"
                  class="rounded-full w-10 md:w-14" />
              </div>
              <h2 class="font-extrabold sm:text-3xl text-xl">${item.name}</h2>
              <div class="text-md sm:text-xl">${item.testi}
              </div>
              </div>

              <div class="absolute bottom-0 w-full">
              <div class="w-full p-4 md:p-7">
                  <div class="flex items-center justify-between">
                  <p class="text-md sm:text-xl font-extrabold">${item.date}</p>
                  <img src="https://cdn.discordapp.com/attachments/1073999865702531162/1079386318062223441/brand.png" class="h-4 mr-3 sm:h-6" alt="Elservice logo">
                  </div>
              </div>
              </div>
          </div>
          </div>
      </div>
  `
})


// Data Portfolio
const data_website = [
  {
    id: "1",
    url: "../../assets/portfolio/website/dweb1.png",
    category: "calendar"
  },
  {
    id: "2",
    url: "../../assets/portfolio/website/dweb2.png",
    category: "calendar"
  }, 
  {
    id: "3",
    url: "../../assets/portfolio/website/dweb3.png",
    category: "calendar"
  },
  {
    id: "3",
    url: "../../assets/portfolio/website/dweb3.png",
    category: "calendar"
  },
  {
    id: "3",
    url: "../../assets/portfolio/website/dweb3.png",
    category: "calendar"
  }
]
const data_calendar = [
  {
    id: "1",
    url: "../../assets/portfolio/calendar/dcalendar1.png",
    category: "calendar"
  },
  {
    id: "2",
    url: "../../assets/portfolio/calendar/dcalendar2.png",
    category: "calendar"
  },
  {
    id: "3",
    url: "../../assets/portfolio/calendar/dcalendar3.png",
    category: "calendar"
  },
  {
    id: "3",
    url: "../../assets/portfolio/calendar/dcalendar4.png",
    category: "calendar"
  },
  {
    id: "3",
    url: "../../assets/portfolio/calendar/dcalendar5.png",
    category: "calendar"
  }
]





// function displayWebsiteDesign(data ) {
//   data.forEach((item) => {
//     const div_website = document.createElement("div");
//     div_website.innerHTML = `
//       <img  src="${item.url}" class="rounded-md max-w-full h-auto" />
//     `
//     porto_website.appendChild(div_website)
//   })
// }

// function displayCalendarDesign(data) {
//   data.forEach((item) => {
//     const div_calendar = document.createElement("div");
//     div_calendar.innerHTML = `
//       <img  src="${item.url}" class="rounded-md max-w-full h-auto" />
//     `
//     porto_calendar.appendChild(div_calendar)
//   })
// }

// displayWebsiteDesign(data_website)
// displayCalendarDesign(data_calendar )



