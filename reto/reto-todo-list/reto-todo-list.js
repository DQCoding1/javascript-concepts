const taskInput = document.querySelector(".taskContainer__input")
const taskBtn = document.querySelector(".taskContainer__btn")
const listContainer = document.querySelector(".listContainer")




const addTask = ()=>{
        let contextualFragment = document.createRange().createContextualFragment(`
        
        <div class="listContainer__item">
            <input type="text" class="listContainer__item__input" value="${taskInput.value}">
            <button class="listContainer__item__btnDelete">Delete</button>
        </div>

        `)
        listContainer.appendChild(contextualFragment)


        
        const deleteTask = (e)=>{
            if(e.target.tagName === "BUTTON"){
                listContainer.removeChild(e.target.parentElement)
            }            
        }

        listContainer.lastElementChild.addEventListener("click", deleteTask)

    }



taskBtn.addEventListener("click", addTask)