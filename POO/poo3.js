class Hola {
  constructor(nombre, edad) {
    this._nombre = nombre;
    this._edad = edad;
  }

  set edad(edad) {
    if (edad > 10) {
      this.edad = edad;
    } else {
      console.log("edad no valida");
    }
  }

  get edad() {
    return this._edad;
  }

  get nombre() {
    return this._nombre;
  }
}

class Ee extends Hola {
  constructor(a, b, arr) {
    super(a, b);
    this.arr = arr;
  }
}

const ee = new Ee("diego", 24, [1, 3]);
console.log(ee);
