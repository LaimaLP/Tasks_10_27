function SayHello(tekstas){
    document.getElementById("paragrafas").innerText = `Labas, ${tekstas}`
}

document.getElementById("buttoniukas").addEventListener("click", ()=>{

    let firstTaskDOM = document.getElementById("vardas").value;
       
    SayHello(firstTaskDOM)
})




// 2.Uzduotis

function TextLength(inputText){
    document.getElementById("length").innerText = inputText.length
}

document.getElementById("mygtukas2").addEventListener("click", ()=>{
    let secondTaskDOM = document.getElementById("ilgis").value;
    TextLength(secondTaskDOM)
})

// 3. Uzduotis

function fullName(parameter1, parameter2){
    document.getElementById("fullname").innerText =
     parameter1[0].toUpperCase()+parameter1.slice(1) + " "
     + parameter2[0].toUpperCase()+parameter2.slice(1)
}

document.getElementById("mygtukasVardui").addEventListener("click", ()=>{
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


document.getElementById("generuojuRandom").addEventListener("click", ()=>{
    let max = 5;
    getRandom(max)
})
console.log("veikia")


// 5. uzduotis


console.log("veikia")




// 7. uzduotis


function embedInH1(parametrasText){
    document.getElementById("textH1").innerHTML =  `<h1>${parametrasText} </h1> `
}   





document.getElementById("button7").addEventListener("click", ()=>{

    let sevenTaskDOM = document.getElementById("inputText").value;
       
    embedInH1(sevenTaskDOM)
})

console.log("test:", embedInH1(sevenTaskDOM))