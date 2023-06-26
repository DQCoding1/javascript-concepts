                // serializar / pasar a json

// JSON.stringify()
// let a = {valor1 : 1, valor2 : 2}
// console.log(typeof JSON.stringify(a));


                // deserializar / pasar a objeto

// JSON.parse()
// let b = '{"valor1": 1, "valor2": 2 }'
// console.log(JSON.parse(b));






        // ajax

// objeto XMLHttprequest


// const request = new XMLHttpRequest()


// get 

// request.onreadystatechange = function(){
//         if (this.readyState === 4 && this.status === 200) {
//             console.log(this.responseText);
//         }
// }



// request.addEventListener('readystatechange', ()=>{
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.responseText);
//         };
    
// })


// request.addEventListener('load', ()=>{
//         let serializado = request.response;
//         console.log(typeof JSON.parse(serializado));
// })



// request.open("get", "https://jsonplaceholder.typicode.com/posts");
// request.send();






// post 


// xhr = new XMLHttpRequest()

// xhr.addEventListener('load', ()=>{
//    console.log(JSON.parse(xhr.response))
// })


// xhr.open('POST', "https://reqres.in/api/users")
// xhr.setRequestHeader("content-type", "application/json;charset=UTF8")
// xhr.send(JSON.stringify({
//     "name": "morpheus",
//     "job": "leader"
// }))











                                 // fetch

// get 

 fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.text())
        .then(res => console.log(res))






// post 

// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         body: JSON.stringify({
//                 "animal": "perro",
//                 "edad": 8 
//         }),
//         headers: {'content-type' : 'application/json' } 
// })
//   .then(res => res.json())
//   .then(res=> console.log(res))







                                // axios
                                
/* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */


// get

// axios('https://jsonplaceholder.typicode.com/posts')
//         .then(res => console.log(res.data))





// post 

// axios.post('https://jsonplaceholder.typicode.com/posts', {
//         "animal": "perro",
//         "edad": 6
// })
//         .then(res => console.log(res))


// axios('https://jsonplaceholder.typicode.com/posts', {
//         method: "post",
//         data: {
//                 "animal": "perro",
//                 "edad": 8
//         }
// })
//         .then(res => console.log(res))












