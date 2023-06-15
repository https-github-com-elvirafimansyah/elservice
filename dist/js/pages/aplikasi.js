import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
{
  id: "1",
  url: "../../assets/portfolio/mobile/dmobile1.png",
  category: "mobile",
  note:"harizontal"
},
{
  id: "2",
  url: "../../assets/portfolio/mobile/dmobile2.png",
  category: "mobile",
  type: "harizontal"
},
{
  id: "3",
  url: "../../assets/portfolio/mobile/dmobile3.png",
  category: "mobile",
  type: "harizontal"
},
{
  id: "4",
  url: "../../assets/portfolio/mobile/dmobile4.png",
  category: "mobile",
  type: "harizontal"
},
{
  id: "5",
  url: "../../assets/portfolio/mobile/dmobile5.png",
  category: "mobile",
  type: "harizontal"
},
{
  id: "6",
  url: "../../assets/portfolio/mobile/dmobile6.png",
  category: "mobile",
  type: "harizontal"
},
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".mobile");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);