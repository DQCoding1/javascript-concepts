     // manera no tan optimizada
// const children = document.querySelectorAll(".child");

// children.forEach(item=>{
//     item.addEventListener('click',()=>{
//         item.classList.toggle('changeColor')
//     });
// })



    // manera optimizada
const container = document.querySelector('.container');

container.addEventListener('click', (e)=>{
    if (e.target.classList.contains('child')){
        e.target.classList.toggle('changeColor')   
    }
    e.stopPropagation()
})



