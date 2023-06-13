export function portoUI(data, container) {
  data.forEach((item) => {
    const div_parent = document.createElement("div");
    div_parent.classList.add(`${item.category}`)
    div_parent.innerHTML = `
      <img src="${item.url}" class="rounded-md max-w-full h-auto" />
    `
    container.appendChild(div_parent)
  })
}

