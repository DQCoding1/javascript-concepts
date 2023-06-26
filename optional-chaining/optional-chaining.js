// si al acceder recibe undefined o null deja de continuar accediendo

const user1 = {
  name: "asd",
  id: {
    number: 1,
    // adress: {
    //   street: "",
    //   number: 0
    // }
  }
}
console.log(user1.id?.adress?.street || "No existe");



const user2 = {
  name: "asd",
  id: {
    number: 1,
    adress: {
      street: "",
      number: 0
    }
  }
}

// console.log(user2.id?.adress?.number || "No existe");
// console.log(user2.id?.adress?.number ?? "No existe");




