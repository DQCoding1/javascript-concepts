const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close')


openModal.addEventListener('click', (e)=>{
    modal.classList.add("modal--show")
    e.preventDefault()
})


closeModal.addEventListener('click',(e)=>{
    modal.classList.remove("modal--show")
    e.preventDefault()
})


