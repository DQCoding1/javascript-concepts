function getCharacter(done){

    const results = fetch("https://rickandmortyapi.com/api/character")
    results
        .then(res => res.json())
        .then(data => {
            console.log(data);
            done(data)
        })

}


getCharacter(data => {
   
    data.results.forEach(personaje =>{
        
        const article = document.createRange().createContextualFragment(/*html*/
        `<article>

            <div class="image-container">
                <img src="${personaje.image}">
            </div>

            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
            
        </article>`
        )

        const main = document.querySelector("main")
        main.appendChild(article)        
        
    })
})