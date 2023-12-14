// desafio classificador de nivel de herói

let nickheroum = "roben"
let xproben = "12000"
let xp

if(xproben<1000) {
    xp = "ferro"
} else if(xproben>1001 & xproben<= 2001){
    xp = "bronze"
} else if(xproben>= 2001 & xproben<= 5000){
    xp = "prata"
} else if(xproben>= 6001 & xproben<= 7000){
    xp = "ouro"
} else if(xproben>= 7001 & xproben<= 8000){
    xp = "platina"
} else if(xproben>= 8001 & xproben>= 9000){
    xp = "ascendente"
} else if(xproben>= 9001 & xproben>= 10000){
    xp = "imortal"
} else if(xproben>= 10001){
    xp = "radiante"
}

console.log("o herói:",nickheroum,"está no nivel:",xp)