// function tiempo(){
//     return new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve('proceso 2 segundos');
// },2000)
// })}


// async function funcionAsincronaDeclarada(){
//     console.log('inicio async');
//     await tiempo().then((res)=>{console.log(res);});
//     console.log('fin');
// }

// funcionAsincronaDeclarada()





    
// let hola = new Promise((resolve)=>{
//         setTimeout(()=>{
//         resolve(console.log(('proceso 2 segundos')));
//     },2000)
// })


// funcionAsincronaDeclarada = async()=>{
//     console.log('inicio async');
//     await hola.then();
//     console.log('fin');
// }

// funcionAsincronaDeclarada()




  







// b = new Promise((r)=>{
//     setTimeout(()=>{
//         r(console.log("2"))

//     }, 3000)
// });


// a = async()=>{
//     console.log("1");
//     await b.then((r)=>{return r})
// }
// a();







const getComments = async() => {
  try{
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    if (!res.ok){
      throw new Error("kkkkk")
    }
    const data = await res.json()
    return data
  } catch (e) {
    console.log(e);
  }
}
const a = async() => {
  const ass = await getComments()
  console.log(ass);
}
a()