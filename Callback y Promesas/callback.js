                                // callback 


// function hola(num, nombre){
//     console.log(num, nombre());
// }

// hola(4, ()=>{return "diego"});




// function hola(num, nombre){
//     console.log(num, nombre("ASD"));
// }

// hola(4, (a)=>{return "diego" + a});









// function prueba(callback){
//     callback('diego')
// }

// function saludar(nombre){
//     console.log(`Hola ${nombre}`)
// }

// function decirHora(hora){
//     console.log(`La hora es ${hora}`)
// }


// prueba(saludar)
// prueba(decirHora)

// prueba((nombre)=>{
//     console.log(`hola ${nombre}`)
// })
// prueba(nombre => console.log(`hola ${nombre}`))
























// function primera(callback){
//     setTimeout(function(){
//         console.log('primera')
//         callback()
//     }, 3000)
// }

// function segunda(){
//     console.log('segunda')
// }

// primera(segunda)
// primera(()=>{console.log('seg')})






























                                 // PROMESAS
           

// let x = 10
// const p = new Promise((resolve, reject)=>{
//     if(x === 10){
//         resolve("si es igual a 10")
//     }else{
//         reject('No es igual a 10')
//     }
// })

// console.log(p);
// p
// .then((res)=>{
//     console.log('success: ' + res);
// })
// .catch((err)=>{
//     console.log('error: ' + err);
// })











// el resultado se ejecuta en otro orden
// let x = 10

// console.log('1 paso');

// setTimeout(()=>{
//     x = x*2
//     console.log('2 haciendo proceso');
// },2000)

// console.log('3 ultimo paso, x =  ' + x);



// el resultado se ejecuta en orden

// const p = new Promise((resolve, reject)=>{
//     x = 10
//     setTimeout(()=>{
//         x = x *2
//         console.log('haciendo proceso');
//         resolve(x)
//     },2000)
// })

// console.log('1 paso');

// p
// .then((res)=>{console.log('3 paso final, x = ' + res)})









// let usuarios = [
//     {
//         nombre: 'Diego',
//         id: 1
//     },
//     {
//         nombre: 'Alejandro',
//         id: 2  
//     }
// ]


// let telefonos = [
//     {
//         tel: 12345,
//         id: 1
//     },
//     {
//         tel: 9876,
//         id:2
//     }
// ]


// const obtenerUsuario = id =>{
//     return new Promise((resolve, reject)=>{
//         if(usuarios.find(usuario => usuario.id === id)){
//             resolve('el usuario si existe')
//         }else{
//             reject('el usuario no existe')
//         }
//     })
// }



// const obtenerTelefono = id =>{
//     return new Promise((resolve, reject)=>{
//         if(telefonos.find(tel => tel.id === id)){
//             resolve('el telefono si existe')
//         }else{
//             reject('el telefono no existe')
//         }
//     })
// }


// obtenerUsuario(1)
//     .then(resultado =>{
//             console.log(resultado);
//     })
//     .catch(err=>{
//         console.log(err);
//     })


// obtenerTelefono(4)
//     .then(resul=>{
//         console.log(resul);
//     })
//     .catch(err=>{
//         console.log(err);
//     })










// let desarrollo = new Promise(function (resolve, reject){
//     const proyecto = 'hola'
//     setTimeout(()=>{
//         let aleatorio = Math.random()
//         if (aleatorio < 0.4){
//             resolve(proyecto)
//         }else{
//             reject('no entregado a tiempo')
//         }
//     },1500)
// })


// desarrollo
//     .then((proyecto)=>{console.log(proyecto)})
//     .catch((error)=>{console.log(error)})
//     .finally(()=>console.log('finalizado'))








                                // Promise.all 
                         
function getJob (job) {
    return new Promise(res => {
        setTimeout(() => {
            res(job)
        },200)
    })
}


Promise.all([getJob("baker"), getJob("fireman")])
    .then((res) => console.log(res))
    












