let photoContainer = document.querySelector(".photo-container");
let url = "https://picsum.photos/300/300?random=";
let needImages = 10;

addLoadingElement = () => {
  const loadDiv = document.createElement("div");
  loadDiv.innerHTML = '  <i class="fas fa-spinner fa-spin"></i>  ';
  photoContainer.appendChild(imgDiv);
};

let loadImages = () => {
  for (let i = 0; i <= needImages; i++) {
    let randomNumner = Math.floor(Math.random() * 100);
    const imgDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = `${url}${randomNumner}`;
    imgDiv.appendChild(img);

    photoContainer.appendChild(imgDiv);
  }
};

loadImages();

let scrollFunction = () => {
  if (window.innerHeight + window.scrollY >= photoContainer.scrollHeight) {
    loadImages();
  }
};

window.addEventListener("scroll", () => {
  scrollFunction();
});
