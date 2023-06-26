// const carrito = document.querySelector("#carrito")
// const template = document.querySelector("#template").content
// const fragment = document.createDocumentFragment()
// const btns = document.querySelectorAll(".button")






// const carritoObjeto = {}


// const agregarAlCarrito = (e)=>{
    
//     const producto = {
//         titulo: e.target.dataset.fruta,
//         cantidad: 1
//     }
    
//     if (carritoObjeto.hasOwnProperty(producto.titulo)){
//         producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1
//     }
    
//     carritoObjeto[producto.titulo] = producto
//     pintarCarrito()
    
// }





// // const pintarCarrito = ()=>{

// //                             // USANDO TEMPLATE

// //     carrito.textContent = ""
    
// //     Object.values(carritoObjeto).forEach(item => {
        
        
// //         const clone = template.cloneNode(true)
// //         clone.querySelector(".template-title").textContent = item.titulo
// //         clone.querySelector(".template-cantidad").textContent = item.cantidad
        
// //         fragment.appendChild(clone)
// //     })
    
// //     carrito.appendChild(fragment)
    
// // }






// const pintarCarrito = ()=>{
    
//                             // USANDO createRange.CreateContextualFragment

//     carrito.textContent = ""

//     Object.values(carritoObjeto).forEach(item => {

//         const fragment = document.createRange().createContextualFragment(`
        
//             <li>
//                 <span class = "template-title"> ${item.titulo} </span>
//                 <span class = "template-cantidad"> ${item.cantidad} </span>
//             </li>

//         `)

//         carrito.appendChild(fragment)
//     })

// }





// btns.forEach(btn => btn.addEventListener("click", agregarAlCarrito))

