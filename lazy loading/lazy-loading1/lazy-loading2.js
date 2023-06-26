const informacion = {
    content : [{
       nombre:"diego",
       content:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa asperiores molestias repudiandae praesentium placeat. Officia neque vitae rem, temporibus odio non perspiciatis expedita iure quisquam architecto iusto omnis ut dicta.Atque molestiae incidunt accusantium voluptate nesciunt? Iste sed illum in, dolore inventore voluptate modi? Debitis esse labore molestiae quisquam sit cumque corporis, ut nobis. Voluptatibus ea quis eos tempore recusandae!"
     },
     {
       nombre:"alejandro",
       content:"orem ipsum, dolor sit amet consectetur adipisicing elit. Culpa asperiores molestias repudiandae praesentium placeat. Officia neque vitae rem, temporibus odio non perspiciatis expedita iure quisquam architecto iusto omnis ut dicta.Atque molestiae incidunt accusantium voluptate nesciunt? Iste sed illum in, dolore inventore voluptate modi? Debitis esse labore molestiae quisquam sit cumque corporis, ut nobis. Voluptatibus ea quis eos tempore recusandae!"
     },
     {
       nombre:"DiegoAlejandro",
       content:"rem ipsum, dolor sit amet consectetur adipisicing elit. Culpa asperiores molestias repudiandae praesentium placeat. Officia neque vitae rem, temporibus odio non perspiciatis expedita iure quisquam architecto iusto omnis ut dicta.Atque molestiae incidunt accusantium voluptate nesciunt? Iste sed illum in, dolore inventore voluptate modi? Debitis esse labore molestiae quisquam sit cumque corporis, ut nobis. Voluptatibus ea quis eos tempore recusandae!"
     }] 
 }

 
 
createPublication = (title, content)=>{
    const div = document.createElement("div")
    div.classList.add("publication")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    h2.textContent = title
    p.textContent = content
    div.append(h2, p)
    return div
}



printPublication = ()=>{
    let fragment = document.createDocumentFragment()
    for (let i = 0; i < informacion.content.length; i++){
        let divPublication = createPublication(informacion.content[i].nombre, informacion.content[i].content)
        fragment.appendChild(divPublication)
        if (i === informacion.content.length-1){
            observer.observe(divPublication)
            console.log(1);
        }
    }
    container.appendChild(fragment)
}



const loadMorePublications = (entries)=>{
    if (entries[0].isIntersecting){
            printPublication()
    }
}

const container = document.querySelector(".container")
const observer = new IntersectionObserver(loadMorePublications)

printPublication()


    








