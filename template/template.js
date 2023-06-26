const lista = document.querySelector(".lista")
const template = document.getElementById("template-li").content
const fragment = document.createDocumentFragment()

console.log(template);
arrayLista = ["item1", "item2", "item3"]

arrayLista.forEach(item=>{

    template.querySelector("li .item").textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)



