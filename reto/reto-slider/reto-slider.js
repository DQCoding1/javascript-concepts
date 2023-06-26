const backArrow = document.querySelector(".container__back-arrow") 
const nextArrow = document.querySelector(".container__next-arrow") 
const contentArray = document.querySelectorAll(".container__content__item")




const showPreviousElement = ()=>{

    for (i = 0; i <= contentArray.length-1; i++){
        let item = contentArray[i];
        if (item.classList.contains("is-active")){
            item.classList.remove("is-active")
            if (item.previousElementSibling !== null){
                item.previousElementSibling.classList.add("is-active") 
                // otra manera :
                // contentArray[i-1].classList.add("is-active")
                break;  
            } else {
                let lastItem = contentArray[contentArray.length-1]
                lastItem.classList.add("is-active") 
                break;   
            };
        }
    }
    
}




const showNextElement = ()=>{

    for (i = 0; i <= contentArray.length-1; i++){
        let item = contentArray[i];
        if (item.classList.contains("is-active")){
            item.classList.remove("is-active")
            if (item.nextElementSibling !== null){
                item.nextElementSibling.classList.add("is-active") 
                // otra manera :
                // contentArray[i-1].classList.add("is-active")
                break;
            } else {
                let firstItem = contentArray[0]
                firstItem.classList.add("is-active") 
            };
        }
    }
    
}






backArrow.addEventListener("click", showPreviousElement)
nextArrow.addEventListener("click", showNextElement)