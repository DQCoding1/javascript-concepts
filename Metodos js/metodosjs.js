                        // METODOS DE ARRAYS//


// some ,every ,map ,filter ,find, findIndex, slice, splice
// concat, spreadSyntax, join, reduce
// let guitarras = [
//     {marca: 'fender', precio: 3500, color: 'azul',pais:'eeuu'}, 
//     {marca: 'gibson', precio: 2100,color: 'naranja',pais: 'canada'},
//     {marca: 'suhr', precio: 5000, color: 'negra',pais: 'suiza'},
//     {marca: 'tagima', precio: 300, color: 'verde',pais: 'brasil'},
//     {marca: 'gibson', precio: 4000, color: 'blanca',pais: 'australia'}
// ]

// // let arr2 = [1,2,3]
// // let arr3 = '1,2,3,4,5'
// // let arr4 = ['mi', 'nombre', 'es', 'diego']

// console.log(guitarras.find((item)=>{return item.color === "naranja"}));






// // MAP//
// const frutas = ['pera','fresa','piña']

// const nuevoArray = frutas.map((item) => {
//     return item
// })
// // const nuevoArray = frutas.map((item) => item)
// console.log(nuevoArray)






// const users = [
//     {name: 'john', age: 34},
//     {name: 'amy', age: 47},
//     {name: 'jack', age: 2},
//     {name: 'jack', age: 8},
// ]

// const names = users.map((user) => user.name )
// console.log(names)



// //FILTER//
// const mayores = users.filter((item) => item.age < 30)
// console.log(mayores)



// FIND
// const findJack = users.find((item) => item.name === 'jack')
// console.log(findJack) 




// FINDINDEX
// const indice = users.findIndex((item) => item.name === 'jack')
// console.log(indice)




// SOME
// const existe = users.some((item) => item.age === 47)
// console.log(existe)




// SLICE
// const arr = ['cat','dog','tiger','zebra']
// //             0     1      2       3

// const slice = arr.slice(1,3)
// console.log(slice)




// CONCAT - SPREAD SYNTAX
// const arr1 = ['asd','asd','asd']
// const arr2 = ['qwe','qwe','qwe']

// const concat = arr1.concat(arr2)
// console.log(concat)


// const spreadSyntax = [...arr1, "-", ...arr2]
// console.log(spreadSyntax)






// //JOIN//
// const array = ['ene', 'feb', 'mar', 'abr']

// const join = array.join(' - ')
// console.log(join)




// PUSH //
// let nombres = ['juan', 'pedro', 'maria']
// push = nombres.push('hola')
// console.log(nombres)


// UNSHIFT //
// let nombres = ['juan', 'pedro', 'maria']
// unshift = nombres.unshift('hola')
// console.log(nombres)


// POP //
// let nombres = ['juan', 'pedro', 'maria']
// pop = nombres.pop()
// console.log(nombres)


// SHIFT //
// let nombres = ['juan', 'pedro', 'maria']
// shift = nombres.shift()
// console.log(nombres)


// REVERSE //
// let nombres = ['juan', 'pedro', 'maria']
// reverse = nombres.reverse()
// console.log(nombres)


// SORT ordena //
// let nombres = ['a', 'p', 'b']
// sort = nombres.sort()
// console.log(nombres)




//  SPLICE (indice, numero de elementos)
//         (indice, numero de elementos, reemplazar)

// let letras1 = ['a','b','c','d']
// let splice1 = letras1.splice(1,2)
// console.log(letras1)
// console.log(splice1)

// let letras2 = ['a','b','c','d']
// let splice2 = letras2.splice(1,2,'w','w')
// console.log(letras2)
// console.log(splice2)



// let a = [1,2,3,4]
// console.log(a[a.length-1], a.at(-1));




// REDUCE
// let a = [11,2,3,4,5,65]
// let s = a.reduce((acc, i) => acc + i)
// console.log(s);



// let b = ["carro", "moto", "moto", "carro"]
// let r = b.reduce((acc, i) => {
  // if (acc[i]){
//     acc[i] += 1
//   } else {
//     acc[i] = 1
//   }
//   return acc
// }, {})

//  console.log(r);




// let a = [1,2,3,4,5]
// let r = a.reduce((acc, i) => {
//   acc.push(i*2)
//   return acc
// },[])
// console.log(r);
















                            //METODOS DE CADENA//



// //STARTS ENDS WITH//
// let cadena1 = 'cadena 1 en vaiable'
// let cadena2 = 'cade'

// res = cadena1.startsWith(cadena2)
// console.log(res)



// //ICLUDES//
// let cadena1 = "cadena 1 en variable"
// let cadena2 = "en"

// res = cadena1.includes(cadena2)
// console.log(res)




//INDEX OF   lastIndexOf//
// let cadena1 = "cadena 1 en variable"
// let cadena2 = "en"


// res = cadena1.indexOf(cadena2)
// ress = cadena1.lastIndexOf(cadena2)
// console.log(res,ress)




// SUBSTRING //
// let letras = 'abcdef'
// console.log(letras.substring(1,3));
// console.log(letras.substr(1,3));
// console.log(letras.substring(1))
// console.log(letras.substr(1))






// TOLOWERCASE TOUPPERCASE //
// let nombre = 'La Variable Nombre'
// toLowerCase = nombre.toLowerCase()
// toUpperCase = nombre.toUpperCase()
// console.log(toLowerCase)
// console.log(toUpperCase)





// //SPLIT//
// const str = "ene,feb,mar,abr"

// const split = str.split(",")
// console.log(split)




//TRIM TRIMSTART TRIMEND//
// trim      '   hola   '  ->  'hola'
// trimStart '   hola   '  ->  'hola   ' 
// trimEnd   '   hola   '  ->  '   hola'





// REPLACE - REPLACE ALL
// let a = "123223"
// let b = a.replace("2", "x")
// let c = a.replaceAll("2", "x")
// console.log(b, c);              
