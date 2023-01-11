
let countEL = document.getElementById("count-el")  // h2->0
let saveEL = document.getElementById("save-el")  
let count = 0

function increment(){
    count = count + 1
    countEL.textContent = count
}

function save(){
    let countSTR = count + " - "
    saveEL.textContent = saveEL.textContent + countSTR
    countEL.textContent = 0
    count = 0
}
