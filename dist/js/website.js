import { portoUI, modalDetail, imgModal } from './templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../assets/portfolio/landingpage/eldesign2.png",
    category: "website",
    type: "harizontal",
    theme: "Graphel",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain amplop - tema Graphel?'
  },
  {
    id: "2",
    url: "../assets/portfolio/landingpage/eldesign2.png",
    category: "website",
    type: "harizontal",
    theme: "Asmodeus",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Asmodeus?'
  },
  {
    id: "3",
    url: "../assets/portfolio/landingpage/eldesign2.png",
    category: "website",
    type: "harizontal",
    theme: "Cipher",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Cipher?'
  },
  {
    id: "4",
    url: "../assets/portfolio/landingpage/eldesign2.png",
    category: "website",
    type: "vertical",
    theme: "Empathy",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Empathy?'
  },
  {
    id: "5",
    url: "../assets/portfolio/landingpage/eldesign2.png",
    category: "website",
    type: "harizontal",
    theme: "Azure",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema Azure?'
  }
]

const porto_gambar = document.getElementById("porto_gambar");
portoUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".design");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;

modalDetail(images, img_src, chat_btn, body, testi_card, porto_gambar);

