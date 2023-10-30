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
// 6. uzduotis

function keliuKvadratu(x,n){
    return x * x
 let result = x
    for(let i=x; i<=n;i++){
       result *= 
    }
    return result
    
    x           n-1
    x*x         n-2
    x*x*x       n-3
    x*x*x*x     n-4
    x*x*x*x*x   n-5
}