// Simple gallery click-to-expand
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `<div class="popup-inner"><img src="${img.src}"><span class="close">✖</span></div>`;
    document.body.appendChild(popup);

    popup.querySelector(".close").addEventListener("click", () => popup.remove());
  });
});