                                      /* CONDICIONALES */



// let stringUsuario = prompt('escriba "Javascript"');

// if(stringUsuario === 'Javascript' ){
//     console.log('correcto');
// }
// else{
//     console.log('incorrecto')
// }



// let datoUno = 1
// let datoDos = 2

       /* datoUno >= 100 || datoDos >= 100*/
// if ((datoUno || datoDos) >= 100){        
//     console.log(`${datoUno} y ${datoDos} son mayores`)
// }
// else {
    //     console.log(`${datoUno} y ${datoDos} son menores`)
    // }
    
    
    

    
// let respuesta = "asd";
    
// if(respuesta === "si"){
//     console.log("la respuesta fue si")
// }
// else if(respuesta === "no"){
//     console.log("las respuesta fue no")
            
// }
// else{
//     console.log("la respuesta fue otra")
// }





// let nombre = "gaseosa";
// let cantidad = 30;
// let precioProducto


// if (nombre === 'gaseosa'){
//     precioProducto = 1.7
// }
// else if(nombre === 'papas'){
//     precioProducto = 1.15
// }
// else if(nombre === "malteada"){
//     precioProducto = 2.5
// }
// else{
//     console.log("no disponemos de ese articulo")
// }

// let total = precioProducto * cantidad;
// console.log(`En total tiene que pagar ${total} dolares`);











// let numUsuario = parseInt(prompt('ingrese un numero del 1 al 10'));

// if(numUsuario <= 10){
//     console.log('perfecto');
// }
// else{
//     console.log('numero incorrecto')
// }







// si es socio:
// 1 gratis a partir de 25
// 5% descuento  a partir de 50
// 15 gratis a partir de 100
// si no es socio: 5 gratis a partir de 100
// no acumulable

// let esSocio = true;
// let total = 110;

// if (esSocio){
    
//     if (total >= 100){
//         total = total - 15
//     }
//     else if (total >= 50){
//         total = total * 0.95
//     }
//     else if (total >= 25) {
//         total = total - 1
//     }

// } else{
//     if (total >= 100){
//         total = total - 5
//     }
    
// }
// console.log(`tiene que total ${total}`)





                                        // Operador Ternario

// Terminar con ; el codigo de arriba para que funcione el operador ternario
                             
// (1 < 10) ? console.log("si") : console.log("no");

// (1 < 10) ? (console.log("si"), console.log("1 es menor a 10"))
//          : console.log("no");










                                    /*  SWITCH */





// let opcionUsuario = prompt(`
// Elija una opcion
// 1: azul
// 2: verde
// 3: rojo 
// `)

// console.log(opcionUsuario)

// switch(opcionUsuario){

//     case '1': console.log('azul respuesta')
//     break;

//     case '2' : console.log('verde respuesta')
//     break;

//     case '3' : console.log('rojo respuesta')
//     break;

//     default : console.log('No valido')
//     break;

// }



// 'DIFERENCIA SWITCH = ESPECIFICO Y IF = MUCHO MAS FLEXIBLE' 

// let instrumento = 'bajo'

// switch(instrumento){
    
//      case 'guitarra':
//          console.log('si es guitarra')
//          break;
//      case 'bajo':
//          console.log('si es bajo')
//          break;
//      case 'piano':
//          console.log('si es piano')
//          break;
//     default :
//          console.log('es otro')
// }


// let instrumento = 'piano'

// if(instrumento === 'guitarra'){
//     console.log('es guitarra')
// } else if( instrumento === 'bajo'){
//     console.log('es bajo')
// } else if(instrumento === 'piano'){
//     console.log('es un piano')
// }
// else{
//     console.log('es otro')
// };





                                  /* CICLOS */




// let numero = 1;

// while (numero <= 10){
//     console.log(numero)
//     numero ++
// }
// console.log(numero)




// while(palabra !== 'hola'){
//     var palabra = prompt('la palabra es incorrecta');
// }




// let num = 0

// while(num <= 100){
//     console.log(num)
//     num++
//     if(num === 20){
//         console.log(num)
//         break;
//     }
// }









// let numeroMaquina = Math.floor(Math.random()* (10 - 1)) + 1;

// console.log(numeroMaquina);

// let numeroUsuario = parseInt(prompt('adivina el numero del 1 al 10')); 

// let vidas = 3;





// while(numeroMaquina !== numeroUsuario && vidas > 1){

//     let mensaje = (numeroUsuario < numeroMaquina) 
//         ? 'El numeroMaquina es mayor' 
//         :'el numeroMaquina es menor';

//     console.log('te equivocaste' + ' ' + mensaje )
//     numeroUsuario = parseInt(prompt('adivina el numero del 1 al 10'))
//     vidas --;
// }


// if(numeroUsuario === numeroMaquina){
//     console.log('Felicidades adivinaste');
// }
// else{
//     console.log('perdiste')

// }






/*
let frutas = ['manzana', 'pera', 'durazno', 'banano', 'uva', 'sandía', 'arandano'];
console.log(frutas[1]);



for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
  

for (let item of frutas){
    console.log(item);
}
*/








//                          maneras de crear funciones







// function saludar(nombre){
//     let frase = `hola ${nombre}`
//     document.write(frase);
// }

// saludar("diego");






// const saludar = function (nombre) {
//     let frase = `hola ${nombre}`;
//     document.write(frase)
// }

// saludar("diego");






// const saludar = (nombre)=>{
//     let frase = `hola ${nombre}`
//     document.write(frase);

// }

// saludar("diego");








// function saludar (nombreUsuario) {
//     return("Bienvenido" + nombreUsuario);

// } 

// console.log(saludar(" Diego"));



// function sumar(n1, n2){
//     return   parseInt(n1) + parseInt(n2);
// }

// let hola = prompt("ingrese el primer numero")
// let chao = prompt("ingrese el segundo numero")


// console.log(sumar(hola, chao))








// let nombreUsuario = "diego";
// let estado = false;

// console.log("bienvenido: \n" + nombreUsuario);
// console.log(`bienvenido:
// ${nombreUsuario.toUpperCase()}`);


// console.log(`
//   ${estado ? 'on line' : 'offline'}
// `)





// let respuesta = prompt("si?");

// function preguntar(){
    
//   (respuesta === "si") ? console.log("la respuesta fue si") : console.log("es otra respuesta");
    
// }


// preguntar();
// preguntar();
// preguntar();
// preguntar();
// preguntar();
// preguntar();
// preguntar();
// preguntar();
// preguntar();








// function operacion (num1, num2){
//     let res = num1 + num2;
//     document.write(res);    
// }

// operacion(1,1);
// operacion(2,2);
// operacion(5,5);







                                       /*OBJETOS*/



// const gato = {
//         nombre: 'michi',
//         duerme: true,
//         edad: 10,
//         enemigos: ['agua', 'perro'],
//         otros: {
//             amigos: ['gato1', 'gato2'],
//             favoritos: {
//                 comida: {
//                     fria: 'salmon',
//                     caliente: 'pollo'
//                 }
//             }
//         }
// };



/* ACCEDER */

// console.log(gato.nombre)
// console.log(gato['nombre'])
// console.log(gato.otros.amigos[1])
// console.log(gato['otros']['amigos'][1])
// console.log(gato.otros.favoritos.comida.caliente)
// console.log(gato['otros']['favoritos']['comida']['caliente'])
 



/* MODIFICAR */
 

// gato.color = 'blanco'
// gato.duerme = false
// delete gato.nombre
// console.log(gato)


/*ELIMINAR*/

// delete gato.nombre



// /*metodo*/

// const gato = {
//     nombre: 'michi',
//     duerme: true,
//     edad: 10,
//     comer: function(alimento){
//         console.log(`funcion ${this.nombre} esta comiendo ${alimento} 1`)
//     },
//     comerDos(alimento){
//         console.log(`funcion ${this.nombre} esta comiendo ${alimento} 2`)
//     } 
// }
// gato.comer('pez');
// gato.comerDos('pez');    



/* RECORRER OBJETO */


// for (let i in gato){
//     console.log(gato[i])
// }

// console.log(Object.values(gato))
// console.log(Object.keys(gato));
// Object.values(gato).forEach((item) => console.log(item))






/*DESTRUCTURING OBJECTS*/


// const gato = {
//     nombre:'michi',
//     color:'blanco',
//     edad:7,
//     otros:{
//         amigos:['gato1,gato2']
//     }
// }

// const gatoNombre = gato.nombre
// console.log(gatoNombre)
// // es hacer eso mismo //

// const {nombre : nombreCat} = gato
// console.log(nombreCat)

// const {nombre : n, color : c, edad : e} = gato
// console.log(n,c,e)  

// const {amigos} = gato.otros
// console.log(amigos)
























































