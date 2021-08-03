const images = ["0.jpeg", "1.jpeg", "2.jpeg"]
const chosenImage = images[Math.floor(Math.random() * images.length)]
const bgImages = document.createElement("img")
const body = document.querySelector("body")

bgImages.src = `img/${chosenImage}`
bgImages.classList.add("bg-image")

body.appendChild(bgImages)