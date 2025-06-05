function click() {
    button.innerHTML= "<strong>Маладец</strong>"
}

const button = document.getElementById("Change");
button.addEventListener("click", click)

let currentIndex = 0;
const images = document.querySelectorAll(".gallery-item");
console.log(images);
const imagesCount = images.length;
const gallery = document.querySelector(".gallery")
const galleryContainer = document.querySelector(".gallery-container")

function updateGallery() {
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    if (currentIndex < imagesCount - 1) {
        currentIndex++;
    }
    else {
        currentIndex = 0;
    }
    updateGallery();
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex = imagesCount - 1;
    }
    updateGallery();
}

document.getElementById("nextButton").addEventListener('click', nextImage);
document.getElementById("prevButton").addEventListener('click', prevImage);

document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        prevImage()
    }
    else if (event.deltaY < 0) {
        nextImage()
    }
    
})

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        nextImage();
    }, 5000);
}
function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

startAutoScroll();

galleryContainer.addEventListener('mouseenter', () => {
    stopAutoScroll();
})

galleryContainer.addEventListener('mouseleave', () => {
    startAutoScroll();
})

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const key = event.key;
    console.log(key)
    if (key == `ArrowRight`) {
        nextImage();
    }
    else if (key == `ArrowLeft`) {
        prevImage();
    }
})
