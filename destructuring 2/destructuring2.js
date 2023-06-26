            // destructuracion de arrays


let array = [1,2,3,4,5];

let [, dato2, , dato4, dato5] = array;
let [posicion1, ...resto] = array;
// console.log(dato4);
// console.log(resto);




let array2 = [[1,2,3],[4,5,6],[7,8,9]]

let [position1, , position3] = array2
// console.log(position3);




let {
    0: uno,
    2: tres
} = array

// console.log(tres);





const mostrarArray = ([, posicion1, , posicion3, posicion4])=>{
    console.log(posicion1, posicion3, posicion4);
}

// mostrarArray(array)






            // destructuracion de objetos

let objeto = {
    nombre: "juan",
    id : 1,
    edad: 30,
    direccion: {
        calle: 22,
        carrera: 96
    }

} 


let {id, edad: age} = objeto
let {edad, ...restoObjeto} = objeto
let {calle} = objeto.direccion
// let {direccion: {calle}} = objeto
// console.log(id, age);
// console.log(restoObjeto);
// console.log(calle);





const mostrarDestructuracion = ({edad})=>{
    console.log(edad);
}

// mostrarDestructuracion(objeto)





                        // Destructuring con Spread Operator

myText = 'hello world'

// console.log([...myText]);
// console.log({...myText});


a = [...myText]
a.reverse()
// console.log(a);
b = a.join("")
// console.log(b)



as = "asdfkjhkjhkl"
// console.log(as.substring(3));


