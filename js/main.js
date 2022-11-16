const bodyElement = document.querySelector("body");
function bodyAddLegislature(){
    bodyElement.className = "legislature"
}

const legislature = document.getElementsByClassName("header__legislature")[0]
legislature.addEventListener("click",bodyAddLegislature,false)

function bodyAddPetition(){
    // const bodyElement = document.querySelector("body");
    bodyElement.className = "petition"
}

const petition = document.getElementsByClassName("header__petition")[0]
petition.addEventListener("click",bodyAddPetition,false)

function bodyDefault(){
    bodyElement.className = ""
}