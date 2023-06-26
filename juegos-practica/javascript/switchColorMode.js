const arrayImgToggle = document.querySelectorAll(".header__img-toggle"); 
const body = document.querySelector("body");
const arrayLogo = document.querySelectorAll(".header__img-logo");


const changeLogo = ()=>{
  for (let index = 0; index < arrayLogo.length; index++){
    let item = arrayLogo[index]
    if(item.classList.contains("header__img-logo--visible")){
      item.classList.remove("header__img-logo--visible")
      if (index === 0){
          arrayLogo[1].classList.add("header__img-logo--visible")
          break;
      } else {
          arrayLogo[0].classList.add("header__img-logo--visible")
      }
    }
  }
}

const changeModeLight = ()=>{
  if (body.classList.contains("darkMode")){
    body.classList.remove("darkMode")
    body.classList.add("lightMode")
    changeLogo()
  } else {
    return
  }
}

const changeModeDark = ()=>{
  if (body.classList.contains("lightMode")){
    body.classList.remove("lightMode")
    body.classList.add("darkMode")
    changeLogo()
  } else {
    return
  }
}


arrayImgToggle.forEach((item)=>{
  if (item === arrayImgToggle[0]){
    item.addEventListener("click", changeModeLight)
  }
  if (item === arrayImgToggle[1]){
    item.addEventListener("click", changeModeDark)
  }
})