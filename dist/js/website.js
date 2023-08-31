import { portoUI,portoWebUI, imgModal } from './templatePorto.js'

const data_gambar = [
  {
    id: "1",
    url: "../assets/portfolio/landingpage/eldesign2.png",
    category: "website",
    type: "",
    theme: "",
    link: "https://eldesign2.netlify.app/",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain amplop - tema Graphel?'
  },
  {
    id: "2",
    url: "../assets/portfolio/landingpage/eldesign4.png",
    category: "website",
    type: "",
    theme: "",
    link: "https://eldesign4.netlify.app/",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain aplikasi - tema Asmodeus?'
  },
  {
    id: "3",
    url: "../assets/portfolio/landingpage/eldesign5.png",
    category: "website",
    type: "",
    theme: "",
    link: "https://eldesign5.netlify.app/",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain banner - tema Cipher?'
  },
  {
    id: "4",
    url: "../assets/portfolio/landingpage/eldesign2.png",
    category: "website",
    type: "",
    theme: "",
    link: "https://eldesign2.netlify.app/",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain brosur - tema Empathy?'
  },
  {
    id: "5",
    url: "../assets/portfolio/landingpage/eldesign4.png",
    category: "website",
    type: "",
    theme: "",
    link: "https://eldesign4.netlify.app/",
    note: 'Selamat pagi/siang/malam, saya mau pesan/order desain kalender - tema Azure?'
  }
]

const porto_gambar = document.getElementById("porto_gambar");
portoWebUI(data_gambar, porto_gambar)

// Modal Detail Image
const images = porto_gambar.querySelectorAll(".website");
const chat_btn = document.getElementById("chat-btn");
const testi_card = document.getElementById("controls-carousel");
const body = document.querySelector("html")
let img_src;


