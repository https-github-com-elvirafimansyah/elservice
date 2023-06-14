// template porto ui
export function portoUI(data, container) {
  data.forEach((item) => {
    const div_parent = document.createElement("div");
    div_parent.classList.add(`${item.category}`)
    div_parent.setAttribute("note", `${item.note}`)
    div_parent.innerHTML = `
      <img src="${item.url}" class="rounded-md max-w-full h-auto" />
    `
    container.appendChild(div_parent)
  })
}

// modal detail image
export function modalDetail(images, img_src, chat_element, html_element, testi_element, container_e) {
  images.forEach((img) => {
    img.addEventListener('click', (e) => {
      img_src = e.target.src;
      chat_element.classList.add('hidden');
      html_element.classList.add("overflow-hidden");
      testi_element.classList.add("hidden");
      imgModal(img_src, container_e, chat_element, html_element, testi_element, img)
    })
  })
}

export function imgModal(src, container_e, chat_element, html_element, testi_element, img_e) {
  const modal = document.createElement("div");
  modal.setAttribute("class", "fixed top-0 left-0 z-99 w-screen h-screen bg-black/70 flex justify-center items-center ")
  container_e.append(modal);
  // Modal Img
  const modalImg = document.createElement("img");
  modalImg.setAttribute("class", `sm:w-3/4 ${img_e.getAttribute("note") === "vertical" ? "lg:w-1/3 mt-5" : "lg:w-1/2"}`)
  modalImg.setAttribute("src", src)
  // Close Modal
  const closeModal = document.createElement("button");
  closeModal.setAttribute("class", "absolute top-14 right-3 md:top-28 lg:top-20 md:right-5 ")
  closeModal.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>
  `
  closeModal.addEventListener("click", () => {
    modal.remove();
    html_element.classList.remove("overflow-hidden");
    chat_element.classList.remove('hidden');
    testi_element.classList.remove("hidden");
  })

  // Order Button
  const orderBtn = document.createElement("a");
  orderBtn.setAttribute("class", "bg-white shadow-chat pr-[5.5rem] pl-8 py-5 fixed right-10 bottom-10 rounded-4xl text-darkcolor font-medium")
  orderBtn.setAttribute("href", "https://wa.me/62089636406145?text=hello")
  orderBtn.innerHTML = `
    Pesan Template Ini
    <div class="absolute -top-1 -right-2">
      <div class="bg-limegreen flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full">
        <iconify-icon icon="ic:baseline-whatsapp" class="text-white" width="40" height="40"></iconify-icon>
      </div>
    </div>
  `

  // Apply
  modal.append(modalImg, closeModal, orderBtn)
};