const url = "https://api.thedogapi.com/v1/images/search"
let img = document.querySelector("img")

fetch(url)
    .then(res => res.json())
    .then(data => {
        img.src = data[0].url
    })


const btn = document.querySelector(".btn")

const changeImage = ()=>{
    btn.textContent = "Waiting"
    fetch(url)
        .then(res => res.json())
        .then(data => {
            img.src = data[0].url;
            btn.textContent = "Actualizar Imagen";
        })
}

btn.addEventListener("click", changeImage)

