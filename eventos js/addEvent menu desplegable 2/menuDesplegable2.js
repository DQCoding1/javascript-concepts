(function (){

    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburger');

    const addClick = ()=>{
        listElements.forEach((element)=>{

            if (window.innerWidth < 800) {
                
            
                element.addEventListener('click',(e)=>{
                    let subMenu = element.children[1];
                    let height = 0;
                    // element.classList.toggle('menu__item--active')

                    if (subMenu.clientHeight === 0) {
                        height = subMenu.scrollHeight;
                    }

                    subMenu.style.height = `${height}px`

                    e.preventDefault();
                });
        }});
    }
    

    addClick();

    


    menu.addEventListener('click', ()=>{
        list.classList.toggle('menu__links--show')
    })

})();