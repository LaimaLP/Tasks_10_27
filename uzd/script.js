function SayHello(tekstas){
    document.getElementById("paragrafas").innerText = `Labas, ${tekstas}`
}

document.getElementById("button1").addEventListener("click", ()=>{

    let firstTaskDOM = document.getElementById("vardas").value;
       
    SayHello(firstTaskDOM)
})




// 2.Uzduotis

function TextLength(inputText){
    document.getElementById("length").innerText = inputText.length
}

document.getElementById("button2").addEventListener("click", ()=>{
    let secondTaskDOM = document.getElementById("ilgis").value;
    TextLength(secondTaskDOM)
})

// 3. Uzduotis

function fullName(parameter1, parameter2){
    document.getElementById("fullname").innerText =
     parameter1[0].toUpperCase()+parameter1.slice(1) + " "
     + parameter2[0].toUpperCase()+parameter2.slice(1)
}

document.getElementById("button3").addEventListener("click", ()=>{
    let thirdTaskDOMvardui = document.getElementById("vardoInput").value;
    let thirdTaskDOMpavardei = document.getElementById("pavardesInput").value;

    fullName(thirdTaskDOMvardui, thirdTaskDOMpavardei)

})


//4. Uzduotis

// function getRandom(max){
//     return Math.floor(Math.random()* max)
// }
// getRandom(5)

// let pirmas = getRandom(5);
// let antras = getRandom(5);
// let trecias = getRandom(5);

// console.log(`${pirmas}, ${antras}, ${trecias}`)

function getRandom(max){
    let firstRandom = Math.floor(Math.random()* max)
    let secondRandom = Math.floor(Math.random()* max)
    let thirdRandom = Math.floor(Math.random()* max)

    document.getElementById("randomuLaukas").textContent=
    `${firstRandom}, ${secondRandom}, ${thirdRandom}`
}

document.getElementById("button4").addEventListener("click", ()=>{
    let max = 5;
    getRandom(max)
})
console.log("veikia")


// 7. uzduotis


function embedInH1(parametrasText){
    document.getElementById("textH1").innerHTML =  `<h1>${parametrasText} </h1> `
}   

document.getElementById("button7").addEventListener("click", ()=>{

    let sevenTaskDOM = document.getElementById("inputText").value;
       
    embedInH1(sevenTaskDOM)
})




//6 uzduotis


// function laipsniu(number, laipsnis){
//     let result = 1
//     if(laipsnis === 0){
//         result=1
//     }
//     if(laipsnis<0){
//         number = 1/number;
//         laipsnis =-laipsnis
//     }
//    for(let i=0; i<laipsnis; i++){
//        result *= number
//     }
//     return result
// }
// laipsniu()
// console.log("laipsniu:", laipsniu(5,2))

// function laipsniu(number, laipsnis){
//     let result = 1
//     if(laipsnis === 0){
//         result=1
//     }
//     if(laipsnis<0){
//         number = 1/number;
//         laipsnis =-laipsnis
//     }
//    for(let i=0; i<laipsnis; i++){
//        result *= number
//     }
//     document.getElementById("powResult").textContent = `${result}` 
// }
// laipsniu()



    
   

// document.getElementById("button6").addEventListener("click", ()=>{
//     let sixthTaskDOMvardui = document.getElementById("skaicius").value;
//     let sixth2TaskDOMvardui = document.getElementById("laipsnis").value;

//     laipsniu(sixthTaskDOMvardui, sixth2TaskDOMvardui)

// })






//8 uzduotis
function changingH(parametrasText2, number){
    document.getElementById("textH2").innerHTML =  `<h${number}>${parametrasText2} </h${number}> `
}   

document.getElementById("button8").addEventListener("click", ()=>{

    let eightTaskDOM = document.getElementById("inputText2").value;
    let eightTaskDOMnumber = document.getElementById("inputTextnumber").value;

       
    changingH(eightTaskDOM, eightTaskDOMnumber)
})

