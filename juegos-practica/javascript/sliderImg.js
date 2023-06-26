const containerSlider = document.querySelector(".main__slider")
const btns = document.querySelectorAll(".main__button--images")
const closeSlider = document.querySelector(".main__close")
const leftArrow = document.querySelector(".main__left-arrow")
const rightArrow = document.querySelector(".main__right-arrow")
const images = document.querySelectorAll(".main__slider-img")
const containerImages = document.querySelector(".main__slider-images")



const showSlider = (e)=>{
  const filteredImages = [] 
  images.forEach(item => {
    if (e.target.dataset.images === item.dataset.images){
      filteredImages.push(item)
    }
  })
  containerSlider.classList.add("main__slider--visible")
  const firstImg = filteredImages[0]
  firstImg.classList.add("main__slider-img--visible")
  containerImages.append(...filteredImages)
}




const hideSlider = ()=>{
  const imagesLength = containerImages.children.length
  for (let i = 0; i < imagesLength; i++) { 
    let firstImg = containerImages.children[0] 
    if (firstImg.classList.contains("main__slider-img--visible")){
      firstImg.classList.remove("main__slider-img--visible")
    }
    containerImages.removeChild(firstImg)
  }
  containerSlider.classList.remove("main__slider--visible")
}


const seePreviousImage = (e)=>{
  e.stopPropagation()
  const filteredImages = containerImages.children
  for (let i = 0; i < filteredImages.length; i++){
    if (filteredImages[i].classList.contains("main__slider-img--visible")){
      filteredImages[i].classList.remove("main__slider-img--visible")
      if (filteredImages[i-1] !== undefined){
        filteredImages[i-1].classList.add("main__slider-img--visible")
        break;
      } else {
        filteredImages[filteredImages.length-1].classList.add("main__slider-img--visible")
        break;
      }
    }
  }
}


const seeNextImage = (e)=>{
  e.stopPropagation()
  const filteredImages = containerImages.children
  for (let i = 0; i < filteredImages.length; i++){
    if (filteredImages[i].classList.contains("main__slider-img--visible")){
      filteredImages[i].classList.remove("main__slider-img--visible")
      if (filteredImages[i+1] !== undefined){
        filteredImages[i+1].classList.add("main__slider-img--visible")
        break;
      } else {
        filteredImages[0].classList.add("main__slider-img--visible")
        break;
      }
    }
  }
}



const stopPropagInImages = (e) => {
  if (e.target.tagName === "IMG"){
    e.stopPropagation()
  }
}



btns.forEach(item => item.addEventListener("click", showSlider))
closeSlider.addEventListener("click", hideSlider)
leftArrow.addEventListener("click", seePreviousImage)
rightArrow.addEventListener("click", seeNextImage)
containerSlider.addEventListener("click", hideSlider)
containerImages.addEventListener("click", stopPropagInImages)
