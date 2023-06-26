                              // maneras de crear eventos


// function clickTitulo(){
//     alert('Click')
// }


// h3 = document.querySelector('h3')
// h3.onclick = clickTitulo


                    // addEventListener

// h4 = document.querySelector('h4')

// h4.addEventListener('click', clickTitulo)
// h4.removeEventListener('click', clickTitulo)

// h4.addEventListener('click', () => {
//     alert('click')
// })


                    // parametro e 


// form = document.querySelector('form')

// form.addEventListener('submit', (e)=>{
//     console.log('enviado')
//     console.log(e.target.name.value)
//     e.preventDefault()
// })












                                // Eventos del Mouse

// click, mousedown, mouseup, dblclick
//  mousemove, contextmenu
// mouseenter, mouseleave | mouseover, mouseout(bubbling)

// enterDiv = document.querySelector('.enterDiv')
// enterP = document.querySelector('.enterP')
// overDiv = document.querySelector('.overDiv')
// overP = document.querySelector('.overP')



// enterDiv.addEventListener('mouseenter',()=>{
//     console.log('enter div')
// })

// enterDiv.addEventListener('mouseleave', ()=>{
//     console.log('leave div')
// })

// enterP.addEventListener('mouseenter', ()=>{
//     console.log('enter p')
// })


// enterP.addEventListener('mouseleave', ()=>{
//     console.log('leave p')
// })





// overDiv.addEventListener('mouseover',()=>{
//     console.log('over div')
// })

// overDiv.addEventListener('mouseout', ()=>{
//     console.log('out div')
// })

// overP.addEventListener('mouseover', ()=>{
//     console.log('over p')
// })


// overP.addEventListener('mouseout', ()=>{
//     console.log('out p')
// })
















                            //   eventos del teclado



input = document.querySelector('input')

// input.addEventListener('keydown', (e)=>{
//     console.log('se activó al bajar')
//     console.log(e.key);
// })

// input.addEventListener('keyup', ()=>{
//     console.log('se activó al subir')
// })

// input.addEventListener('keypress', ()=>{
//     console.log('no sirven flechas ni borrar')
// })















                            //   eventos de interfaz

// error: se ejecuta cuando hay un error en la carga de un archivo multimedia
// load: se ejecuta cuando un objeto se ha cargado
// beforeunload: se ejecuta cuando se esta por ir del sitio
// resize: se ejecuta cuando cambia la resolucion de vista del documento
// scroll: se ejecuta cuando se mueve la barra de scroll
// select: se ejecuta cuando se selecciona contenido de input  o textarea












                                    // Timers


    // setTimeout

// const timeout = setTimeout(()=>{
//     console.log('hola')   
// },1000)

// clearTimeout(timeout)


    // setInterval

// const interval = setInterval(()=>{
//     console.log('hola')
// },1000)

// clearInterval(interval)


    // example

// const interval = setInterval(()=>{
//     console.log('hola')
// }, 1000)

// setTimeout(()=>{
//     clearInterval(interval)
// },5000)