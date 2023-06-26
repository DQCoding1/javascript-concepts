class Book {
    constructor(title, author, price){
        this.title = title
        this.author = author
        this.price = price
    }
}
const book1 = new Book('asd', 'g.h', '250')
const book2 = new Book('jtyjtyj', 'f.g.h', '800')
// console.log(book1.title)


class Comics extends Book {
    constructor(title, author, price, ilustrators) {
        super(title, author, price)
        this.ilustrators = ilustrators
    }
}
const comic1 = new Comics(
    'the joke', 
    'A-M', 480, 
    ['Brian Bolland', 
    'John Higgins']
)
// console.log(comic1.ilustrators)







class Shopping {
    constructor(){
        this.products = []  
    }

    addProduct(amount, price){
        this.products.push(...Array(amount).fill(price))
    }

    showProducts(){
        console.log(this.products)
    }
    
}
const cart = new Shopping()
cart.addProduct(2, comic1.price)
cart.addProduct(1, book1.price)
// cart.showProducts()

