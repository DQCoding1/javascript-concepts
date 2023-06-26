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

 
 createPublication = (entries)=>{
     if (entries[0].isIntersecting && entries[0].target === container.lastElementChild ){
        console.log(1);
         const fragment = document.createDocumentFragment()
         for (let i = 0; i < informacion.content.length; i++){
             const div = document.createElement("div")
             div.classList.add("publication")
             const h2 = document.createElement("h2")
             const p = document.createElement("p")
             h2.textContent = informacion.content[i].nombre
             p.textContent = informacion.content[i].content
             div.append(h2, p)
             fragment.appendChild(div)
            }
            container.appendChild(fragment)
            observer.observe(container.lastElementChild)
        }
    }
    
    
const container = document.querySelector(".container")
const observer = new IntersectionObserver(createPublication)
observer.observe(container.lastElementChild)








