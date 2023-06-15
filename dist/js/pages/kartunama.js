import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/cardname/dcardname1.png",
    category: "cardname",
    type: "harizontal"
  },
  {
    id: "2",
    url: "../../assets/portfolio/cardname/dcardname2.png",
    category: "cardname", 
    type: "harizontal"
  },
  {
    id: "3",
    url: "../../assets/portfolio/cardname/dcardname3.png",
    category: "cardname",
    type: "harizontal"
  },
  {
    id: "4",
    url: "../../assets/portfolio/cardname/dcardname4.png",
    category: "cardname", 
    type: "harizontal"
  },
  {
    id: "5",
    url: "../../assets/portfolio/cardname/dcardname5.png",
    category: "cardname",  
    type: "harizontal"
  },
  {
    id: "6",
    url: "../../assets/portfolio/cardname/dcardname6.png",
    category: "cardname", 
    type: "harizontal"
  },
  {
    id: "7",
    url: "../../assets/portfolio/cardname/dcardname7.png",
    category: "cardname",  
    type: "harizontal"
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".cardname");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

