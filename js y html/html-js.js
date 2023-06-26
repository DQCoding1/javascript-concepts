                           // /*maneras de llamar elementos a js*/

// console.log(document.getElementById('title1'))
// console.log(document.querySelector('#title1'))
// console.log(document.querySelector('.title'))
// console.log(document.querySelector('h1'))
// console.log(document.querySelectorAll('.container .paragraph'))








                      // cambiar_crear,obtener,eliminar ATRIBUTOS

                      
// si ya esta lo actualiza


// input = document.querySelector('.input')
// input.setAttribute('type', 'color')
// input.setAttribute('id', 'asd')
// console.log(input.getAttribute('id'))
// input.removeAttribute('type')











                        //  atributos globales

// h1 = document.querySelector('.h1')
// h1.setAttribute('contentEditable', true)
// h1.setAttribute('hidden', true)
// h1.setAttribute('tabIndex', '1')
// h1.setAttribute('title', 'asdfghjasdgfhj')
// console.log(h1.className)













                        //    atributos de inputs

// input = document.querySelector('.input')
// console.log(input.value)
// console.log(input.type = 'range')
// input.accept = 'image/png' usado en type="file"
// input.placeholder = 'placeholder'










                        //    style
                    
// h1 = document.querySelector('h1')
// h1.style.backgroundColor = 'blue'












                        //    manejo de clases

// h1 = document.querySelector('h1')
// h1.classList.add('clase')
// h1.classList.remove('h1')
// h1.classList.item(1) trae el indice de clase especificado para varias clases en un elemento
// console.log(h1.classList.contains('h1'))
// h1.classList.toggle('h1') /*si ya existe la elimina, si no existe la agrega*/
// h1.classList.toggle('h1', true) /*agrega o deja igual*/
// h1.classList.toggle('h1', false) /*elimina o deja igual*/
// h1.classList.replace('h1', 'asd')











                        //  createElement_textContent_innerHTML_createTextNode

// h2 = document.createElement('h2')
// h2.textContent = 'este es h2'
// h2.innerHTML = '<b>este es h2</b>'
// texto = document.createTextNode('texto')
// h2.appendChild(texto)
// console.log(h2)









                        //    fragment

// const array = ['perú', 'colombia', 'chile']
// const ul = document.querySelector('ul')
// const fragment = document.createDocumentFragment()

// array.forEach((pais)=>{
//     const li  = document.createElement('li')
//     li.textContent = pais
//     fragment.appendChild(li)
// })

// ul.appendChild(fragment)














                        //   obtencion y modificacion de childs

// div = document.querySelector('.container')
// fisrtChild/lastChild/childNodes trae los espacios
// console.log(div.firstElementChild)
// console.log(div.lastElementChild)
// console.log(div.children)
// console.log(div.hasChildNodes())


// div = document.querySelector('.container')
// h3Viejo = document.querySelector('h3')
// h3Nuevo = document.createElement('h3')
// h3Nuevo.textContent = 'texto Nuevo'
// div.replaceChild(h3Nuevo, h3Viejo)
// div.removeChild(h3Viejo)


// paragraph = document.createElement('p');
// paragraph.textContent = "paragraph"
// div.appendChild(paragraph)












                        //    parentElement

// h3 = document.querySelector('h3')
// console.log(h3.parentElement)











                        //    sibling hermanos

// nextSibling lastSibling incluye los espacios
// parrafo = document.querySelector('p')
// h3 = document.querySelector('h3')
// console.log(parrafo.nextElementSibling)
// console.log(h3.previousElementSibling)







                                    // .matches 


// .matches(".clase")
// .matches("#id")
// .matches("[data-fruta]")









