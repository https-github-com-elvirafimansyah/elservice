import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/website/dweb1.png",
    category: "website",
    note: "harizontal"
  },
  {
    id: "2",
    url: "../../assets/portfolio/website/dweb2.png",
    category: "website",
    note: "harizontal"
  },
  {
    id: "3",
    url: "../../assets/portfolio/website/dweb3.png",
    category: "website",
    note: "harizontal"
  },
  {
    id: "4",
    url: "../../assets/portfolio/website/dweb4.png",
    category: "website",
    note: "harizontal"
  },
  {
    id: "5",
    url: "../../assets/portfolio/website/dweb5.png",
    category: "website", 
    note: "harizontal"
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".website");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

