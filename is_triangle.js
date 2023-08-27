const anglesInput = document.querySelectorAll(".angle-input");
const button = document.querySelector("#submit");
const output = document.querySelector("#output");

function sum(a, b, c) {
    return a+b+c;
}

function formation(sumOfAngles) {
    if (sumOfAngles === 180)
        return true;
    return false;
}

function clickHandler() {
    
    const sumOfAngles = sum(Number(anglesInput[0].value), Number(anglesInput[1].value), Number(anglesInput[2].value));
    if (formation(sumOfAngles))
        output.innerText = "Yay! The given angles form a Triangle.";
    else 
        output.innerText = "Oh! Oh! The given angles do not form a Triangle.";

}

button.addEventListener("click", clickHandler);