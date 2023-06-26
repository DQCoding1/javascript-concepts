// nombre  = "asdasd"
function saludar(){
  console.log(this);
}
const obj = {
  nombre: "name",
  saludar(){
    console.log(this.nombre);
  },
  salu: () => {
    console.log(this.nombre);
  }
}
// saludar(); obj.saludar(); obj.salu()


const original = {
  nombre : "nombre12345",
  saludar: function (){
    console.log(`hola soy ${this.nombre}`);
  }
}
// original.saludar()
const copiaDeOriginal = original.saludar
// copiaDeOriginal()



const l = {
  name:"diego",
  hola(){
    console.log(this);
  },
  btnSaludar: function(){
    console.log(`hola ${this.name}`)
  }
}

// const copy = l.hola
// copy()
// const btn = document.getElementById("button")
// btn.name= "llllllll"
// btn.addEventListener("click", l.btnSaludar)


function Persona(name){
  if (true){
    if(true){
      this.name = name
    }
  }
}

const nuevaPers = new Persona("nuevo")
// console.log(nuevaPers);
