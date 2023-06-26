const dataSwitchers = document.querySelectorAll("[data-switcher]")
const transitionElement = document.querySelector(".transitionElement")



for (i = 0; i < dataSwitchers.length; i++){

    let dataSwitcher = dataSwitchers[i]
    let pageId = dataSwitcher.dataset.tab


    dataSwitcher.addEventListener("click", ()=>{
        
        transitionElement.classList.add("is-visible")
        setTimeout(()=>{
            transitionElement.classList.remove("is-visible")
        },600)
        

        document.querySelector(".tabs .is-active").classList.remove("is-active")
        dataSwitcher.parentElement.classList.add("is-active")

        
        switchPage(pageId)
    })
}




function switchPage(pageId){

    const currentPage = document.querySelector(".pages .is-active")
    currentPage.classList.remove("is-active")
    
    const nextPage = document.querySelector(`[data-page = "${pageId}"]`)
    nextPage.classList.add("is-active")

}





