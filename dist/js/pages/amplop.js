import { portoUI, modalDetail, imgModal } from '../templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../../assets/portfolio/amplop/damplop1.png",
    category: "amplop",
    type: "harizontal",
    theme: "Aria",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Aria?'
  },
  {
    id: "2",
    url: "../../assets/portfolio/amplop/damplop2.png",
    category: "amplop", 
    type: "harizontal",
    theme: "Beelze",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Beelze?'
  },
  {
    id: "3",
    url: "../../assets/portfolio/amplop/damplop3.png",
    category: "amplop",
    type: "harizontal",
    theme: "Clesber",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Clesber?'
  },
  {
    id: "4",
    url: "../../assets/portfolio/amplop/damplop4.png",
    category: "amplop", 
    type: "harizontal",
    theme: "Dominac",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Dominac?'
  },
  {
    id: "5",
    url: "../../assets/portfolio/amplop/damplop5.png",
    category: "amplop", 
    type: "harizontal",
    theme: "Elfen",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Elfen?'
  },
  {
    id: "6",
    url: "../../assets/portfolio/amplop/damplop6.png",
    category: "amplop",
    type: "harizontal",
    theme: "Fabas",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Fabas?'
  }, 
  {
    id: "7",
    url: "../../assets/portfolio/amplop/damplop7.png",
    category: "amplop",
    type: "harizontal",
    theme: "Graphel",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Graphel?'
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

