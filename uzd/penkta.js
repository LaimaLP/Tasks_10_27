console.log("5 uzduotis");
//5 uzduotis  imant max min to ir limit

function creatArr(from, to, limit) {
  let max = 1;
  let min = 0;
  let arr = [];

  if (typeof from === "number" && typeof to === "number") {
    for (let i = 0; i < limit; i++) {
      min = Math.ceil(min);
      max = Math.floor(max);
      if(Math.floor(Math.random() * (max - min + 1) + min) == 0){
        arr.push(from)
      }else{
          arr.push(to);
      }
    }
  }
  return arr;
}
creatArr();

console.log("5 uzduotis, Created array:", creatArr(4, 10, 8));

// console.log("5 uzduotis");
// console.log("----------------------------");
// function createArr2(from, to, limit) {
//   let arr2 = [];
//   if (typeof from === "number" && typeof to === "number") {
//     for (let i = 0; i < limit; i++) {
//       arr2.push(Math.floor(Math.random() * to + 1));
//     }
//   }
//   return arr2;
// }
// createArr2();
// console.log("CreateArr2:", createArr2(1, 5, 6));



//6 uzduotis

function laipsniu(number, laipsnis) {
  let result = 1;
  if (laipsnis === 0) {
    result = 1;
  }
  if (laipsnis < 0) {
    number = 1 / number;
    laipsnis = -laipsnis;
  }
  for (let i = 0; i < laipsnis; i++) {
    result *= number;
  }
  return result;
}
laipsniu();
console.log("laipsniu:", laipsniu(5, 2));

console.log("9 uzduotis");
console.log("----------------------------");

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

console.log("10 uzduotis");
console.log("----------------------------");

let min = 997;
let max = 15991;

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  let arr = [];

  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return arr;
}
rand(997, 15991);
console.log("ats2:", rand(997, 15991));

// 11 uzduotis

console.log("11 uzduotis");
console.log("----------------------------");

function tikDidesni() {
  const maxPrime = 5000;
  let arr = rand(997, 15991);
  let arrOver5000 = [];
  let onlyPrimes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxPrime) {
      arrOver5000.push(arr[i]);
    }
  }
  console.log("Arr su didesniai nei 5000:", arrOver5000);

  for (let i = 0; i < arrOver5000.length; i++) {
    if (isPrime(arrOver5000[i]) === true) {
      onlyPrimes.push(arrOver5000[i]);
    }
  }
  console.log("Pirminiai didesni uz 5000 : ", onlyPrimes);
}
tikDidesni();
