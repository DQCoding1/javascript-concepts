
                            // Clausura o cierre 
// const validarEdad = (e)=>{

//     let respuesta;
//     try {
//         if (e) respuesta = prompt(e) 
//         else {
//             respuesta =  prompt("Introduce cualquier numero")
//         }
//         parseInt(respuesta)
//         if (isNaN(respuesta)) throw "El campo suministrado es incorrecto, Introduce cualquier numero";
//         (respuesta < 18) ? console.log("mayor de edad") : console.log("menor de edad");
//     } catch (e) {
//         validarEdad(e)
//     }

// }

// validarEdad()





                        // localStorage ___ sessionStorage


// localStorage.setItem("nombre", "diego");
// console.log(localStorage.getItem("nombre"));


// sessionStorage.setItem("nombre", "alejandro")
// console.log(sessionStorage.getItem("nombre"));


// localStorage.removeItem();
// sessionStorage.removeItem();



                        // drag n drop 

// eventos del elemento 

// dragstart / e.dataTransfer.setData("nombre", e.target.className)
// drag
// dragend

// eventos de zona de destino 

// dragenter
// dragover -> e.preventDefault()
// dragleave
// drop / e.dataTransfer.getData("nombre")


                        // history

// window.history.back()
// window.history.forward()


// const el = document.querySelector(".element")
// const zoneBlue = document.querySelector(".zoneBlue")
// const zoneBlack = document.querySelector(".zoneBlack")
// const h1 = document.querySelector("h1")


// el.addEventListener("dragstart", (e)=>{
//     e.dataTransfer.setData("nombreEl", e.target.className)
// })


// zoneBlue.addEventListener("dragstart", (e)=>{
//     e.dataTransfer.setData("nombreZoneBlue", e.target.className)
// })
// zoneBlue.addEventListener("dragover", (e)=>{
//     e.preventDefault()
// })
// zoneBlue.addEventListener("drop", (e)=>{
//     let className = e.dataTransfer.getData("nombreEl")
//     if (className.includes("element")){
//         zoneBlue.appendChild(el)
//         zoneBlue.classList.add("centerElement")
//     }
// })


// zoneBlack.addEventListener("dragover", (e)=>{
//     e.preventDefault()
// })
// zoneBlack.addEventListener("drop", (e)=>{
//     let className = e.dataTransfer.getData("nombreZoneBlue")
//     if (className.includes("zoneBlue")){
//         zoneBlack.appendChild(zoneBlue)
//         zoneBlack.classList.add("centerElement")
//     }
    
// })




