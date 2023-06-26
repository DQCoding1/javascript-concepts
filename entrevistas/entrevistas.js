// FIND IF A NUMBER IS EVEN OR ODD
// function evenOrOdd(num){
//   num % 2 === 0 ? console.log( `${num} : even`) : console.log(`${num} : odd`);
// }
// evenOrOdd(239)



// PORCENTAJE
// x = 765.33
// porcent = 15 * x / 100
// console.log(x - porcent);









// RETURN THE SUM OF THE MIN AND MAX OF AN ARRAY
// function sumOfMinAndMax(arr){
//   let min = arr[0]
//   let max = arr[0]
//   arr.forEach(num => {
//     if (num < min){
//       min = num
//     } 
//     if (num > max){
//       max = num
//     }
//   })
//   return min + max
  // ANOTHER WAY TO SOLVE IT
  // let max = (Math.min(...arr));
  // let min = (Math.max(...arr));
  // return min + max
// }
// console.log(sumOfMinAndMax([3,5,7,2,41,8]))









// RETURN THE SUM OF THE 2 FIRST MIN OF AN ARRAY
// function sumOf2Min(arr) {
//   let firstMin = arr[0]
//   for (let item of arr){
//     if (item < firstMin){
//       firstMin = item
//     }
//   }
//   let arrWithoutFirstMin = arr.filter(i => i !== firstMin)
//   let secondMin = arrWithoutFirstMin[0]
//   for (let item of arrWithoutFirstMin){
//     if (item < secondMin){
//       secondMin = item
//     }
//   }
//   return firstMin + secondMin
// }
// ANOTHER WAY TO SOLVE IT 
//   let orderedArr = arr.sort((a, b) => a-b)
//   let res = []
//   orderedArr.forEach((item) => {
//     if (!res.includes(item)){
//       res.push(item)
//     }
//   })
//   return res[0] + res[1]
// }
// console.log(sumOf2Min([4,12,6,9,78,4,21]));









// ENCONTRAR REPETICIONES DE UN ITEM EN UN ARRAY 
// const vehiculos = ["mazda", "toyota", "audi", "mazda", "ford", "audi", "mazda"]

// function encontrarRepeticiones(arr){
//   let resultado = {}
//   for (let item of vehiculos){
//     if (resultado[item]){
//       resultado[item] = resultado[item] + 1
//     } else {
//       resultado[item] = 1
//     }
//   }
//   return resultado
// }

// console.log(encontrarRepeticiones(vehiculos))








// FIND THE LONGEST WORD IN A TEXT 
// function findLongestWord(text){
//   let res = ""
//   const textToArr = text.split(" ")
//   textToArr.forEach((item) => {
//     if (item.length > res.length){
//       res = item
//     }
//   })
//   return res
// }
// console.log(findLongestWord("what's the longest word here ?"));








// SORT AN ARRAY WITHOUT USING ANY METHOD 
// function sortArray(arr) {
//   let res = arr.map(num => num)

//   for (let i = 0; i < res.length; i++){
//     for (let j = i+1; j < res.length; j++){
//       if (res[j] < res[i]){
//         let firstIter = res[i]
//         let secondIter = res[j]
//         res[i] = secondIter
//         res[j] = firstIter
//       }
//     }
//   }

//   return res
// }
// console.log(sortArray([22,5,1,5,7,3,9]));







// METODOS
// Array.isArray(var)
// Number.isInteger(var)
// parseInt(var)
// Number(var)
// var.toString()
// var.join()
// var.split(".")
// JSON.stringify(var)
// JSON.parse(var)
// arr.sort( ( a=proximo index b=index actual ) => {
  // return 1 si quiero que a este en el lado derecho
  // return -1 si quiero que a este en el lado izquierdo
  // return 0 si quiero que se mantengan
// })

// let a = [3,2,210,43,3,98,1]

// a.sort((a,b) => {
//   if (a<b) return -1
//   if (a>b) return 1
//   return 0
// })

// modifica el array original 
// console.log(a);


// arr.reduce()
// Object.freeze(var)
// var.slice()
// var.substring() solo strings
// var.splice() solo arrays
// indexOf()
// lastIndexOf()








// VALOR VS REFERENCIA 
// al crear por valor cada var es independiente de la otra 
// (str,int,boole)

// al crear por referencia 
// las var son la misma asi se actualize el contenido de la estru. de dat
// las var son independientes si se actualiza la estructura 

// let a = [1,2]
// let b = a

// a = "l"
// console.log(a) 
// console.log(b) 







// FIBONACCI
// function fibonaccii(numero){
//   let serie = [0,1]

//   for (let i = 2; i <= numero; i++) {
//       serie.push(serie[i - 1] + serie[i - 2])
//   }

//   return [serie, serie[numero]]
// }

// console.log('serie completa : ',fibonaccii(15)[0])
// // console.log('resultado fib : ',fibonaccii(15)[1])

// const a = Math.floor(Math.random())






// const fibonacci = (numMax) => {
//   let currentCount = 1
//   const asd = [0,1]
  

//   while(currentCount <= numMax){
//     let newNumber = asd[asd.length-1] + asd[asd.length-2]
//     asd.push(newNumber) 
//     currentCount ++
//   }

//   return asd
// }

// console.log(fibonacci(15))












// COUNT HOW MANY CHARACTERS EXIST IN AN ARRAY WITHOUT SPACES
// function countCharactersWithoutSpaces (text){
//   let counter = 0

//   for (let i = 0; i < text.length; i++){
//     if (text[i] !== " ") counter ++
//   }

//    return counter
// }

// console.log(countCharactersWithoutSpaces("how many characters"));







// RETURN THE AMOUNT OF CHARACTERS SPECIFIED OF A STRING 
// function rangeOfString (text, num){
//   const res = text.substring(0, num+1)
//   return res
// }

// console.log(rangeOfString("this is a text", 8))







//TRANSFORM A STRING TO AN ARRAY WITHOUT USING ANY METHOD
// function transformToArray(text){
//   let res = []
//   let indexOfRes = 0 

//   for (let item of text){
//     if (item !== " "){
//       res[indexOfRes] === undefined 
//         ? res[indexOfRes] = item
//         : res[indexOfRes] = res[indexOfRes] + item 
//     } else {
//       indexOfRes++
//     }
//   }

//   return res
// }

// console.log(transformToArray("this is a text"));








// GIVEN A STRING RETURN THE SAME STRING x AMOUNT OF TIMES 
// function repeatString(text, times){
//   let res = ""

//   for (let i = 0; i < times; i++){
//     res = res + text + " "
//   }

//   return res
// }

// console.log(repeatString("repeat this", 4));








// GIVEN A STRING RETURN THE SAME STRING BACKWARDS 
// function backwardsText(text){
  // let res = []

  // for (let i = 0; i < text.length; i++) {
  //   res.unshift(text[i]);
  // }
  // res = res.join("")
  // return res
  // ANOTHER WAY TO SOLVE IT
//   let res = ""

//   for (let i = 0; i < text.length; i++) {
//     res = text[i] + res
//   }

//   return res
// }
// console.log(backwardsText("this is a text"));







// FIND HOW MANY TIMES A WORD IS REPEATED
// function timesRepeated (text, wordToFind){
//   let textToArray = text.split(" ")
//   let res = 0
//   textToArray.forEach((item) => {
//     item === wordToFind && res ++
//   })
//   return res
// }

// console.log(timesRepeated("i like this, i like that", "like"));








// VALIDATE IF A WORD IS PALINDROME  
// function isPalindrome(word){
//   let res = false
//   let reverseWord = ""

//   let cleanWord = word.toLowerCase()
//   cleanWord = cleanWord.split(" ")
//   cleanWord = cleanWord.join("")

//   for (let i = cleanWord.length-1; i >= 0; i--){
//     reverseWord = reverseWord + cleanWord[i] 
//   }

//   if (reverseWord === cleanWord) return !res
//   return res
// }

// console.log(isPalindrome("RADar"))
// console.log(isPalindrome("Taco Cat"))








// ELIMINAR CARACTERES DE UN STRING 
// function deleteCharactersInString(text, charactersToDelete){
//   let res = ""
//   let doIHaveToAdd = true

//   for (let value of text){
//     for (let char of charactersToDelete){
//       if (value === char){
//         doIHaveToAdd = false
//       }
//     }

//     if (doIHaveToAdd){
//       res = res + value
//     } else {
//       doIHaveToAdd = true
//     }
//   }

//   return res
// }
// console.log(deleteCharactersInString("xyz1,xyz2,xyz3,xyz4", "xyz"));








// ELIMINAR PATRON DE CARACTERES DE UN STRING 
// const deleteCharactersInString = (text, charactersToDelete) => {
//   const res = text.replaceAll(charactersToDelete, "")
//   return res
// }
// console.log(deleteCharactersInString("xyz1,xyz2,xyz3,xyz4", "xyz"));









// CREAR FUNCION QUE DEVUELVA NUMERO ALEATORIO DE 501 A 600 
// function processToRandomNum (){
//   return Math.round(Math.random()*600)+1
// }

// function returnRandomNum (){
//   let randomNum = processToRandomNum()
//   while (randomNum < 501){
//     randomNum = processToRandomNum()
//   }
//   return randomNum
// }
// console.log(returnRandomNum());








// CALCULAR FACTORIAL DE UN NUMERO 
// RESULTADO * NUMERO Y EL RESULTADO INICIAL ES DE 1 
// function getFactorial (num){
//   let res = 1

//   while(num > 1){
//     res = res * num
//     num = num - 1
//   }

//   return res
// }
// console.log(getFactorial(5))









// DEVOLVER SI UN NUMERO ES PRIMO 
// function isPrime (num){
//   let res = true

//   for (let i = 2; i < num; i++){
//     if (num % i === 0){
//       res = false
//       break;
//     }
//   }

//   return res
// }
// console.log(isPrime(6));










// TRANSFORMAR GRADOS CELCIUS A FAHRENHEIT 
// function transformTemperature (degree, mesure){
//   let res = 0

//   if (mesure === "f"){
//     res = (degree - 32) * 5/9
//   } else if ("c"){
//     res = (degree * 9/5) + 32
//   }

//   return res
// }
// console.log(transformTemperature(34, "f"));











// SACAR DESCUENTO DE UN NUMERO DADO 
// function getDiscount (num, percentage){
//   let res = num

//   let discount = Math.round(percentage * num / 100)
//   res = res - discount

//   return `discount ${discount}, res ${res}`
// }
// console.log(getDiscount(322, 17));










// CALCULAR CUANTOS AÑOS HAN PASADO DESDE UNA FECHA DADA 
// function getDate (date){
//   let res = 0

//   let currentDate = parseInt(new Date().getFullYear())
//   res = currentDate - date

//   return res
// }
// console.log(getDate(1761))












// DADO UN TEXTO DETERMINAR CUANTAS VOCALES Y CONSONANTES HAY 
// function countVowelsAndConsonants(text){
//   text = text.toLowerCase()
//   text = text.replaceAll(" ", "")

//   let res = {
//     vowels: 0,
//     consonants: 0
//   }

//   let isItVowel = false

//   let vowels = ["a", "e", "i", "o", "u"]

//   for (let value of text){
//     for (let vowel of vowels){
//       if (value === vowel){
//         isItVowel = true
//       }
//     }

//     if (isItVowel){
//       res.vowels += 1
//       isItVowel = false
//     } else {
//       res.consonants += 1
//     }
//   }

//   return res
// }
// console.log(countVowelsAndConsonants("buenos dias como estas"));












// GIVEN AN ARRAY OF NUMBERS 
// DIVIDE IT BY EVEN NUMBERS AND ODD NUMBERS
// function divideByEvenAndOdd (arr){
//   let res = {
//     even: [],
//     odd: []
//   }

//   arr.forEach((num) => {
//     num % 2 === 0 ? res.even.push(num) : res.odd.push(num) 
//   })

//   return res
// }
// console.log(divideByEvenAndOdd([1,2,3,4,5,6,7]));









// GIVEN AN ARRAY OF NUMBERS
// DIVIDE IT BY ASCENDING NUMBERS AND DESCENDING NUMBERS 
// function divideByAscendingAndDescending(arr){
//   let res = {
//     ascending: [],
//     descending: []
//   }

//   let cloneArrForAsc = arr.map((item) => item)
//   let cloneArrForDesc = arr.map((item) => item)
//   res.ascending = cloneArrForAsc.sort((a,b) => a-b)
//   res.descending = cloneArrForDesc.sort((a,b) => a-b).reverse()

// OR 

  // for (let i = 0; i < arr.length; i++){
  //   for (let j = i+1; j < arr.length; j++){
  //     if (arr[j] < arr[i]){
  //       let prevI = arr[i] 
  //       arr[i] = arr [j]
  //       arr[j] = prevI
  //     }
  //   }
  // }

  // res.ascending = arr

  // for (let i = arr.length-1; i > 0; i--) {
  //   res.descending.push(arr[i]) 
  // }

  // return res
// }
// console.log(divideByAscendingAndDescending([3,6,22,3,1,7,4]));









// GIVEN AN ARRAY ELIMINATE THE DUPLICATES 
// function removeDuplicates(arr){
//   let res = []

//   for (let i = 0; i < arr.length; i++){
//     if (!res.includes(arr[i])){
//       res.push(arr[i])
//     } 
//   }

//   return res
// }
// console.log(removeDuplicates([2,4,2,5,2,4]));









// GIVEN AN ARRAY ELIMINATE THE CONSECUTIVE DUPLICATES 
// function removeConsecutiveDuplicates(arr){
//   let res = []

//   for (let i = 0; i < arr.length; i++){
//     res.push(arr[i])
//     if (res[res.length-1] === res[res.length-2]){
//       res.pop()
//     }
//   }

//   return res
// }
// console.log(removeConsecutiveDuplicates([1,3,3,2,3,6,2,2,6]));



















// FIND AND RETURN 2 INDEX OF AN ARRAY THAT TOGETHER RETURN THE TARGET NUMBER 
// function findTwoIndex(arr, target){
//   let res = []
//   for(let i=0; i< arr.length; i++){
//     for(let j=i+1; j< arr.length; j++){
//       if (arr[i] + arr[j] === target){
//         res.push(i)
//         res.push(j)
//         break;
//       }
//     }
//   }
//   return res
// }
// console.log((findTwoIndex([3,6,1,7,8,9], 8)));
function findTwoIndex(arr, target){
  const numToIndex = new Map()
  
  for(let i =0; i< arr.length; i++){
    const complement = target- arr[i]
    // console.log(complement);
    if (numToIndex.has(complement)){
      return [numToIndex.get(complement), i]
    }
    numToIndex.set(arr[i], i)
  }
  return numToIndex
}
console.log((findTwoIndex([3,6,1,7,8,9], 8)));
