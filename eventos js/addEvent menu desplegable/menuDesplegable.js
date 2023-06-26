let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(element=>{
    element.addEventListener('click',(e)=>{
        element.classList.toggle('arrow')

        let height = 0;
        let menu = element.nextElementSibling;
        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }
        
        menu.style.height = `${height}px` ;
        e.preventDefault()
    })
})




