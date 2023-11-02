console.log("labas");
//9 uzduotis

function isPrime(number) {
  let result = true;
  if (number < 2) {
    result = false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      result = false;
    }
  }
  return result;
}

const number2 = 8;
isPrime(number2);
console.log("ats:", isPrime(-6));

//10 uzduotis 997 15991

let min = 997;
let max = 15991;

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let arr = [];
    
    for(let i=0; i<100; i++){

        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr
}
rand(997, 15991)
console.log("ats2:", rand(997, 15991))

// 11 uzduotis

const maxPrime = 5000;
let arr = rand(997, 15991)
// function primeMoreThan5000(arr){


console.log("hiiiiiii")


function tikDidesni(){
    let arrOver5000 = [];
    let onlyPrimes = [];
    
    for(let i=0; i<arr.length; i++){
        if (arr[i]>5000){
        arrOver5000.push(arr[i])
        }
    }
    console.log("arrOver5000:", arrOver5000)


    for(let i=0; i<arrOver5000.length; i++){
        if(isPrime(arrOver5000[i])===true){
        onlyPrimes.push(arrOver5000[i])
        }
    }
    console.log("Primai : ", onlyPrimes)
}
tikDidesni()



// function isPrime(number) {
//     let result = true;
//     if (number < 2) {
//       result = false;
//     }
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         result = false;
//       }
//     }
//     return result;
//   }
  
//   const number2 = 8;
//   isPrime(number2);
//   console.log("ats:", isPrime(-6));
  