class Persona {
  constructor(nombre, edad) {
    if (edad > 0 && edad < 100){
      this._edad = edad;
    } else {
      this._edad = "no valida"
    }
    this.nombre = nombre;
  }

  saludar() {
    return "hola";
  }

  static metodoEstatico() {
    console.log(
      "static son metodos que se pueden usar sin necesidad de instansiar un objeto"
    );
  }

  // Los setter getter son una forma de usar los atributos 
  // de una clase de una manera mas controlada

  set edad(edad) {
    if (edad > 0 && edad < 200) {
      this._edad = edad;
    } else {
      console.log("no tiene edad valida");
    }
  }

  get edad() {
    return this._edad;
  }
}

// let persona1 = new Persona("diego", 10);
// persona1.edad = 200;
// console.log(persona1.edad); 
// Persona.metodoEstatico();





class Desarrollador extends Persona {
  constructor(name, age, computer){
    super(name, age)
    this.computer = computer
  }

  saludar(){
    return "asldaskdhaksj";
  }

  saludoDesarrollador() {
    this.saludar();
    console.log("hola desde desarrollador");
  }
}

const desarrolador1 = new Desarrollador("desarr", 99, "lenovo");
// desarrolador1.saludoDesarrollador();
console.log(desarrolador1.saludar())

