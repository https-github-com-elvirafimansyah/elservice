const aplikasi = [
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

const container = document.getElementById("gambar_port");

// aplikasi.forEach((item) => {
  //   container.appendChild(babi);
  //   babi.innerText = item.id;
  // })
aplikasi.map((item) => {
  const image = document.createElement('img');
  container.appendChild(image);
  image.src = item.url;
})