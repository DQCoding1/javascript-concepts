const inputColor = document.getElementById('inputColor')
const button = document.querySelector('button')
const paragraph = document.querySelector('p')
const card = document.querySelector('div')


button.addEventListener('click', ()=>{

    console.log(inputColor.value);
    paragraph.textContent = inputColor.value;
    card.style.backgroundColor = inputColor.value;

})
