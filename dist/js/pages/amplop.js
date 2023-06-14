import { portoUI } from '../templatePorto.js'

const data_amplop = [
  {
    id: "1",
    url: "../../assets/portfolio/amplop/damplop1.png",
    category: "amplop"
  },
  {
    id: "2",
    url: "../../assets/portfolio/amplop/damplop2.png",
    category: "amplop"
  },
  {
    id: "3",
    url: "../../assets/portfolio/amplop/damplop3.png",
    category: "amplop"
  },
  {
    id: "4",
    url: "../../assets/portfolio/amplop/damplop4.png",
    category: "amplop"
  },
  {
    id: "5",
    url: "../../assets/portfolio/amplop/damplop5.png",
    category: "amplop"
  },
  {
    id: "6",
    url: "../../assets/portfolio/amplop/damplop6.png",
    category: "amplop"
  }, 
  {
    id: "7",
    url: "../../assets/portfolio/amplop/damplop7.png",
    category: "amplop"
  }
]

const porto_amplop = document.getElementById("porto_amplop");
portoUI(data_amplop, porto_amplop)

// Modal Detail Image
const images = porto_amplop.querySelectorAll(".amplop");
const chat_btn = document.getElementById("chat-btn");
const navbar = document.getElementById("navbar-home");
const body = document.querySelector("html")
let img_src;
images.forEach((img) => {
  img.addEventListener('click', (e) => {
    img_src = e.target.src;
    chat_btn.classList.add('hidden');
    body.classList.add("overflow-hidden")
    imgModal(img_src)
  })
})

function imgModal(src) {
  const modal = document.createElement("div");
  modal.setAttribute("class", "fixed top-0 left-0 z-99 w-screen h-screen bg-black/70 flex justify-center items-center ")
  porto_amplop.append(modal);
  const modalImg = document.createElement("img");
  modalImg.setAttribute("class", "w-1/2")
  modalImg.setAttribute("src", src)

  const closeModal = document.createElement("button");
  closeModal.setAttribute("class", "absolute top-20 right-10 ")
  closeModal.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-x-lg" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg>
  `
  closeModal.addEventListener("click", () => {
    modal.remove();
    body.classList.remove("overflow-hidden")
  })
  modal.append(modalImg, closeModal)
};


// data_amplop.forEach((item) => {
//   const div_parent = document.createElement("div");
//   div_parent.classList.add(`${item.category}`)

//   div_parent.innerHTML = `
//       <img src="${item.url}" class="rounded-md max-w-full h-auto" />
//     `
//   porto_amplop.appendChild(div_parent)
// })
