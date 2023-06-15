import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/amplop/damplop1.png",
    category: "amplop",
    type: "harizontal"
  },
  {
    id: "2",
    url: "../../assets/portfolio/amplop/damplop2.png",
    category: "amplop", 
    type: "harizontal"
  },
  {
    id: "3",
    url: "../../assets/portfolio/amplop/damplop3.png",
    category: "amplop",
    type: "harizontal"
  },
  {
    id: "4",
    url: "../../assets/portfolio/amplop/damplop4.png",
    category: "amplop", 
    type: "harizontal"
  },
  {
    id: "5",
    url: "../../assets/portfolio/amplop/damplop5.png",
    category: "amplop", 
    type: "harizontal"
  },
  {
    id: "6",
    url: "../../assets/portfolio/amplop/damplop6.png",
    category: "amplop",
    type: "harizontal"
  }, 
  {
    id: "7",
    url: "../../assets/portfolio/amplop/damplop7.png",
    category: "amplop",
    type: "harizontal"
  }
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".amplop");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

