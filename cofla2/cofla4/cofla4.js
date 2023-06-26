                      // saber los integrantes de una materia


// const obtenerInfo = (materia)=>{
//     materias = {
//         fisica: ['prof 1','pedro', 'pepito', 'cofla', 'maria'],
//         programacion:['prof 2','pedro', 'juan', 'pepito'] ,
//         logica:['prof 3','pedro', 'juan', 'pepito', 'cofla', 'maria'] ,
//         quimica:['prof 4','pedro', 'juan', 'pepito', 'cofla', 'maria'] , 
//     }
//     if (materias[materia]){
//         return [materias[materia],materia]
//     }
//     else{
//         return false
//     }
// }



// const mostrarInfo = (materia)=>{
//     let informacion = obtenerInfo(materia)

//     if (informacion !== false){
//         let profesor = informacion[0][0];
//         let alumnos = informacion[0]
//         alumnos.shift()
//         alert(`el prof de ${informacion[1]} es: ${profesor} y los alumnos son ${alumnos}`)
//     }

// }


// mostrarInfo('fisica')
// mostrarInfo('quimica')
// mostrarInfo('programacion')
// mostrarInfo('logica')





           // saber en cuantas materias esta inscrito una persona


           // 1 forma

// materias = {
//     fisica: ['prof 1','pedro', 'pepito', 'cofla', 'maria'],
//     programacion:['prof 2','pedro', 'juan', 'pepito'] ,
//     logica:['prof 3','pedro', 'juan', 'pepito', 'cofla', 'maria'] ,
//     quimica:['prof 4','pedro', 'juan', 'pepito', 'cofla', 'maria'] , 
// }




// const cuantasMateriasEsta = (alumno)=>{
//     cont = 0

//     for (i in materias){
//         for (j in materias[i]){
//             if (alumno === materias[i][j]){
//                 cont += 1
//             }
//         }
//     }
//     return `${alumno} esta inscrito en ${cont} materias`            
// }
  
// console.log(cuantasMateriasEsta('cofla'))                  
// console.log(cuantasMateriasEsta('juan'))                  



            //  2 forma


// materias = {
//     fisica: ['prof 1','pedro', 'pepito', 'cofla', 'maria'],
//     programacion:['prof 2','pedro', 'juan', 'pepito'] ,
//     logica:['prof 3','pedro', 'juan', 'pepito', 'cofla', 'maria'] ,
//     quimica:['prof 4','pedro', 'juan', 'pepito', 'cofla', 'maria'] , 
// }



// const cuantasMateriasEsta = (alumno)=>{
//     cont = 0
//     materiasPresentes = []
//     for (i in materias){
//         if (materias[i].includes(alumno)){
//             cont += 1
//             materiasPresentes.push(' ' + i)
//         }
//     }
//     return `${alumno} esta inscrito en ${cont} materias, y son${materiasPresentes} ` 
// }


// console.log(cuantasMateriasEsta('pedro'))
// console.log(cuantasMateriasEsta('maria'))











