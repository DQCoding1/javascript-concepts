const carrito = document.querySelector("#carrito")
const fragment = document.createDocumentFragment()
const containerFrutas = document.querySelector(".container-frutas")
const ul = document.querySelector(".ul")
const footer = document.querySelector(".footer")
const modal = document.querySelector(".modal")


const carritoObjeto = {}


const agregarAlCarrito = (e)=>{
    if (e.target.tagName === "BUTTON" ){
        const producto = {
            titulo: e.target.dataset.fruta,
            cantidad: 1,
            precio: parseInt(e.target.dataset.precio)
        }
        
        if (carritoObjeto.hasOwnProperty(producto.titulo)){
            producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1
        }
        
        carritoObjeto[producto.titulo] = producto  
        pintarCarrito(e)  

    } else if (e.target.className === "fruit-plus"){
        carritoObjeto[e.target.dataset.fruta].cantidad ++
        pintarCarrito(e)

    } else if (e.target.className === "fruit-minus"){
        if (carritoObjeto[e.target.dataset.fruta].cantidad >= 1){
            carritoObjeto[e.target.dataset.fruta].cantidad --
            pintarCarrito(e)
        }
    }
}




const pintarCarrito = (e)=>{
    carrito.textContent = ""
    let total = 0
    
        Object.values(carritoObjeto).forEach(item => {
            footer.textContent = ""

            let subtotal = item.cantidad * item.precio
            total += subtotal
    
            let fragment = document.createRange().createContextualFragment(`
            
                <li class = "fruit-result">
                    <div class ="fruit-title"> ${item.titulo} </div>
                    <div class ="fruit-minus" data-fruta =${item.titulo}> - </div>
                    <div class ="cantidad"> ${item.cantidad} </div>
                    <div class ="fruit-plus" data-fruta =${item.titulo}> + </div>
                    <div class ="subtotal"> $ ${subtotal} </div>
                </li>
    
    
            `)
            
            //1 forma
            // carrito.appendChild(fragment)

            // if (item.cantidad === 0){
            //     let lastChild = carrito.lastElementChild
            //     carrito.removeChild(lastChild)
            // }

            //2 forma
            if (item.cantidad !== 0){
                carrito.appendChild(fragment)
            }
            
            
            let fragmentFooter = document.createRange().createContextualFragment(`
                <div class ="conatiner-pagar">
                    <h2>TOTAL : </h2>
                    <div class ="total">$ ${total}</div>
                </div>
                <button class ="button"> Pagar </button>
                
            `)
            footer.appendChild(fragmentFooter)

        })

        

}


const pagar = (e)=>{
    if (e.target.classList.contains("button")){
        modal.style.visibility = "visible"
        modal.style.opacity = 1;
        modal.style.transform =  "translateY(0%)";


        setTimeout(()=>{
        modal.style.visibility = "hidden"
        modal.style.opacity = 0;
        modal.style.transform =  "translateY(100%)";
        }, 1500)
    }    

}




containerFrutas.addEventListener("click", agregarAlCarrito)
carrito.addEventListener("click", agregarAlCarrito)
footer.addEventListener("click", pagar)







