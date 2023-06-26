const carrito = document.querySelector("#carrito")
const template = document.querySelector("#template").content
const fragment = document.createDocumentFragment()
const btns = document.querySelectorAll(".button")



carritoArray = []


const agregarAlCarrito = (e)=>{

    const producto = {
        titulo: e.target.dataset.fruta,
        cantidad: 1,
    }
    
    const indice = carritoArray.findIndex(item => item.titulo === producto.titulo)
    
    if (indice === -1){
        carritoArray.push(producto)
    } else {
        carritoArray[indice].cantidad ++
    }
    pintarCarrito()

}






const pintarCarrito = ()=>{

    carrito.textContent = ""

    carritoArray.forEach((item) => {

        const clone = template.cloneNode(true)
        clone.querySelector(".template-title").textContent = item.titulo
        clone.querySelector(".template-cantidad").textContent = item.cantidad
        fragment.appendChild(clone)
        carrito.appendChild(fragment)
    
    })
}




btns.forEach(btn => btn.addEventListener("click", agregarAlCarrito))

