import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

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
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_amplop);

// images.forEach((img) => {
//   img.addEventListener('click', (e) => {
//     img_src = e.target.src;
//     chat_btn.classList.add('hidden');
//     body.classList.add("overflow-hidden");
//     testi_card.classList.add("hidden");
//     imgModal(img_src)
//   })
// })

// function imgModal(src) {
//   const modal = document.createElement("div");
//   modal.setAttribute("class", "fixed top-0 left-0 z-99 w-screen h-screen bg-black/70 flex justify-center items-center ")
//   porto_amplop.append(modal);
//   const modalImg = document.createElement("img");
//   modalImg.setAttribute("class", "sm:w-3/4  lg:w-1/2")
//   modalImg.setAttribute("src", src)

//   const closeModal = document.createElement("button");
//   closeModal.setAttribute("class", "absolute top-14 right-3 md:top-28 lg:top-20 md:right-5 ")
//   closeModal.innerHTML = `
//   <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-x" viewBox="0 0 16 16">
//     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//   </svg>
//   `
//   closeModal.addEventListener("click", () => {
//     modal.remove();
//     body.classList.remove("overflow-hidden");
//     chat_btn.classList.remove('hidden');
//     testi_card.classList.add("hidden");
//   })
//   modal.append(modalImg, closeModal)
// };


