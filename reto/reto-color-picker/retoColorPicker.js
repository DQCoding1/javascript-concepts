const colorPicker = document.querySelector('[type = "color"]')
const colorValue = document.querySelector("h1")
const colorDiv = document.querySelector("div") 
const button = document.querySelector("button") 


button.addEventListener("click", printValue)
button.addEventListener("click", printColor)

function printValue(){
    colorValue.textContent = colorPicker.value
}

function printColor(){
    colorDiv.style.backgroundColor = colorPicker.value
    colorDiv.classList.add("div-color")
}