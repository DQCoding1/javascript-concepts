            // Menu desplegable

// ESPECIFICIDAD


// const ul_desplegable1 = document.querySelector("ul:nth-child(3)")
// const ul_desplegable2 = document.querySelector("ul:nth-child(5)")
// const item2 = document.querySelector("li:nth-child(2)")
// const item3 = document.querySelector("li:nth-of-type(3)")


// const showUl = ()=>{
//     if (ul_desplegable1.style.display !== "block"){
//         ul_desplegable1.style.display = "block"
//     } else {
//         ul_desplegable1.style.display = "none"
//     }
// }

// const showUl2 = ()=>{
//     console.log(ul_desplegable1);
//     ul_desplegable1.classList.toggle("visible")
// } 


// const showUl3 = ()=>{
//     let scrollHeight = ul_desplegable2.scrollHeight 
//     if (ul_desplegable2.clientHeight === 0){
//         ul_desplegable2.style.height = `${scrollHeight}px`
//         ul_desplegable2.classList.toggle("visible")
        
//     } else{
//         ul_desplegable2.style.height = "0px"
//         ul_desplegable2.classList.toggle("visible")
//     }
//     console.log(ul_desplegable2.classList);
// }

// item2.addEventListener("click", showUl)
// item2.addEventListener("click", showUl2)
// item3.addEventListener("click", showUl3)



                    // Slider

const arriba = document.querySelector(".arriba")
const abajo = document.querySelector(".abajo")
const array = document.querySelectorAll(".num")


const cambiarParaElementoInferior = ()=>{
    for (let i = 0; i < array.length; i++) {
        let arrayItem = array[i]
        if (arrayItem.classList.contains("is-visible")){
                arrayItem.classList.add("translateDown")
                setTimeout(()=>{
                    arrayItem.classList.remove("is-visible")
                    arrayItem.classList.remove("translateDown")
                },500)
                
                if(array[i-1] === undefined){
                    setTimeout(()=>{
                        array[array.length-1].classList.add("is-visible")
                    },500)
                    break;
                } else {
                    setTimeout(()=>{
                        array[i-1].classList.add("is-visible")
                    },500)
                }
        }
    }
}



const cambiarParaElementoSuperior = ()=>{
    for (let i = 0; i < array.length; i++) {
        let arrayItem = array[i]
        if (arrayItem.classList.contains("is-visible")){
            arrayItem.classList.add("translateUp")
            setTimeout(()=>{
                arrayItem.classList.remove("is-visible")
                arrayItem.classList.remove("translateUp")
            },500)

                if(array[i+1] === undefined){
                    setTimeout(()=>{
                        array[0].classList.add("is-visible")
                    },500)
                } else {
                    setTimeout(()=>{
                        array[i+1].classList.add("is-visible")
                    },500)
                    break;
                }
        }
    }
}

arriba.addEventListener("click", cambiarParaElementoSuperior )
abajo.addEventListener("click", cambiarParaElementoInferior )







