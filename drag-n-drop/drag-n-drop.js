const listItems = document.querySelectorAll(".list-item")
const list = document.querySelectorAll(".list")


let draggedItem;

listItems.forEach(item =>{
    item.addEventListener("dragstart", function(){
        // console.log("start");
        draggedItem = item
        setTimeout(()=>{
            draggedItem.style.display = "none"
        },50)
    })
    
    item.addEventListener("dragend", function(){
        // console.log("end");
        setTimeout(()=>{
            draggedItem.style.display = "block"
        },50)
    })
    
    list.forEach(list =>{        
        list.addEventListener("dragover", (e)=>{
            // console.log("over");
            e.preventDefault()
        })
        list.addEventListener("drop", ()=>{
            // console.log("drop");
            list.appendChild(draggedItem)
        })
    })
})



