// navbar fixed top scroll 
document.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar-home");
  if (this.body.scrollTop > 1 || this.documentElement.scrollTop > 1) {
    navbar.classList.add(["bg-white"], ["shadow-card"]);
  } else {
    navbar.classList.remove(["bg-white"], ["shadow-card"]);
  }
});

// const activePage = window.location.pathname;
// const allLinks = document.querySelectorAll("nav ul li a").forEach(link => {
//   console.log(link.href);
//   if (link.href.includes(`${activePage}` + '#portfolio')){
//     link.classList.remove('md:bg-transparent');
//     console.log('sewot');
//   } else if (link.href.includes(`${activePage}` + '#contact')){
//     link.classList.remove('md:bg-transparent');
//     // console.log('sewot');
//   } else {

//   }

// });
// console.log(activePage)
const allLinks = document.querySelectorAll('nav ul li a');
const allSection = document.querySelectorAll('section');
console

// window.onscroll = () => {
//   allSection.forEach((section) => {
//     let top = window.pageYOffset;
//     let offset = section.offsetTop;
//     let height = section.offsetHeight;
//     let id = section.getAttribute('id');
//     if (top >= offset && top < offset + height) {
//       console.log(id);
//       if (top >= offset && top < offset + height) {
//         allLinks.forEach((link) => {
//           console.log(top, offset);
//           link.classList.remove('text-gray-700');
//           link.classList.add('text-darkcolor');
//           document.querySelector('nav ul li a[href=' + id + ']').classList.remove('text-gray-700');
//           document.querySelector('nav ul li a[href=' + id + ']').classList.remove('text-darkcolor');
//         })
//       }
//       // allLinks.forEach((link) => {
//       //   const same = link.href.includes(id);
//       //   if (id === same) {
//       //     console.log('fuck')
//       //   }
//       //   document.querySelector('nav ul li a[href=' + id + ']').classList.add('text-darkcolor');
//       // })
//     }
//   })
// }