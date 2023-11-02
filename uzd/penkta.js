console.log("labas");
//5 uzduotis 


function createArr(from, to, limit){
     let max = to;
    let min = from;
    let arr = [4,10];
   
   
    if(typeof from === "number" && typeof to === "number"){
       for(let i=0; i<limit-2; i++){

        min = Math.ceil(min);
        max = Math.floor(max);
            arr.push(Math.floor(Math.random() * (max - min + 1) + min));
            
       }
    }return arr
}
createArr()
// console.log("number:", arr)
console.log("ziu ka turim:", createArr(4,10,8))

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let arr = [];
    
    for(let i=0; i<100; i++){

        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr
}

//6 uzduotis

function laipsniu(number, laipsnis){
    let result = 1
    if(laipsnis === 0){
        result=1
    }
    if(laipsnis<0){
        number = 1/number;
        laipsnis =-laipsnis
    }
   for(let i=0; i<laipsnis; i++){
       result *= number
    }
    return result
}
laipsniu()
console.log("laipsniu:", laipsniu(5,2))


