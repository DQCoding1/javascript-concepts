const form = document.querySelector("#new-task-form")
const input = document.querySelector("#new-task-input")
const tasks = document.querySelector("#tasks")



const editTask = (e)=>{

    const editBtn = e.target
    const taskContent = editBtn.parentElement.previousElementSibling

    if (editBtn.textContent === "EDIT"){
        editBtn.textContent = "SAVE"
        taskContent.removeAttribute("readonly")
        taskContent.focus()
    } else {
        editBtn.textContent = "EDIT"
        taskContent.setAttribute("readonly", "readonly")
    }

}




const deleteTask = (e)=>{

    const taskContainer = e.target.parentElement.parentElement
    tasks.removeChild(taskContainer)

}




const addTask = (e)=>{

    e.preventDefault()

    let taskValue = input.value


    if (taskValue !== ""){

        const taskContainer = document.createElement("div")
        taskContainer.classList.add("task-container")

        const taskContent = document.createElement("input")
        taskContent.classList.add("task-content")
        taskContent.setAttribute("readonly", "readonly")
        taskContent.value = taskValue
    
        taskContainer.appendChild(taskContent)
        tasks.appendChild(taskContainer)



         
        const btnsContainer = document.createElement("div")
        const editBtn = document.createElement("button")
        editBtn.textContent = "EDIT"
        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "DELETE"

        btnsContainer.append(editBtn, deleteBtn)
        taskContainer.append(btnsContainer)


        
        editBtn.addEventListener("click", editTask)
        deleteBtn.addEventListener("click", deleteTask)

    } else {
        alert("There's no task")
        return
    }    

}




form.addEventListener("submit", addTask)