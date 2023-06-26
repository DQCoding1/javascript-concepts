const padre = document.querySelector('.padre')
const hijo = document.querySelector('.hijo')
const nieto = document.querySelector('.nieto')

// ,false por defecto = burbujeo (de arriba hacia abajo)
// ,true = fase de captura (de abajo hacia arriba)


padre.addEventListener('click', (e)=>{
    console.log('click padre')
    // e.stopPropagation() 
}, false)


hijo.addEventListener('click', (e)=>{
    console.log('click hijo')
    // e.stopPropagation() 
}, false)

nieto.addEventListener('click', (e)=>{
    console.log('click nieto')
    // e.stopPropagation() 
}, false)

