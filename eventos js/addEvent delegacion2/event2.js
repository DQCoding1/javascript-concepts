const btn = document.querySelector('.btn')
const container = document.querySelector('.container') 



// forma no optimizada
// const changeColor = ()=>{
//     container.childNodes.forEach(i=>{
//         i.addEventListener('click',(e)=>{
//             i.classList.toggle('changeColor')
//             e.preventDefault()
//         })
//     })
// }

// changeColor()


// btn.addEventListener('click', ()=>{
//     container.innerHTML += `<a href="">elemento</a>` 
//     changeColor()
// })



// forma optimizada

container.addEventListener('click',(e)=>{
    if (e.target.tagName === 'A'){
        e.target.classList.toggle('changeColor');
    }
    e.preventDefault()
})



btn.addEventListener('click', ()=>{
    container.innerHTML += `<a>Elemento</a>` 
})