import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/brochure/dbrochure1.png",
    category: "brosur",
    type: "vertical",
    theme: "RedMacha"
  },
  {
    id: "2",
    url: "../../assets/portfolio/brochure/dbrochure2.png",
    category: "brosur",
    type: "vertical",
    theme: "BlueMacha"
  },
  {
    id: "3",
    url: "../../assets/portfolio/brochure/dbrochure3.png",
    category: "brosur", 
    type: "vertical",
    theme: "TosqaDesber"
  },
  {
    id: "4",
    url: "../../assets/portfolio/brochure/dbrochure4.png",
    category: "brosur", 
    type: "vertical",
    theme: "BlueCesber"
  },
  {
    id: "5",
    url: "../../assets/portfolio/brochure/dbrochure5.png",
    category: "brosur", 
    type: "vertical",
    theme: "SoftenBright"
  },
  {
    id: "6",
    url: "../../assets/portfolio/brochure/dbrochure6.png",
    category: "brosur",
    type: "harizontal",
    theme: "DiamondsRay"
  },
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".brosur");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

