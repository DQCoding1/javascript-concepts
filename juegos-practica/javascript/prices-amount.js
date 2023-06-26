const plus = document.querySelectorAll(".main__price-plus")
const minus = document.querySelectorAll(".main__price-minus")
const amount = document.querySelectorAll(".main__amount") 
const prices =  document.querySelectorAll(".main__price")




const increment = (e) => {
  amount.forEach(item => {
    if (item.dataset.game === e.target.dataset.game){
      let counter = parseInt(item.textContent)
      counter += 1
      item.textContent = counter 
    } 
  })
  prices.forEach(item => {
    if (item.dataset.game === e.target.dataset.game) {
      let price = parseInt(item.dataset.price)
      let acc = [...item.textContent].filter(item => {
        return item !== "$" && item !== " "
      })
      let accInString = acc.join("")
      let accInInt = parseInt(accInString)
      price = price + accInInt
      item.textContent = `$ ${price}`
    }
  })
}



const decrement = (e) => {
  amount.forEach(item => {
    if(item.dataset.game === e.target.dataset.game){
      if (item.textContent === "1"){
        return
      };
      let counter = parseInt(item.textContent)
      counter -= 1
      item.textContent = counter
    }
  })
  prices.forEach(item => {
    if (item.dataset.game === e.target.dataset.game) {
      let acc = [...item.textContent].filter(item => {
        return item !== "$" && item !== " "
      })
      let accInString = acc.join("")
      let accInInt = parseInt(accInString)
      let price = parseInt(item.dataset.price)
      if (accInInt > price) {
        price = accInInt - price  
        item.textContent = `$ ${price}`
      }
    }
  })
  
}

plus.forEach(item => item.addEventListener("click", increment))
minus.forEach(item => item.addEventListener("click", decrement))