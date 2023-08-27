const inputSides = document.querySelectorAll(".input");
const output = document.querySelector("#output");
const btn = document.querySelector("#submit");


function checkHypotenuse() {
    const a = Number(inputSides[0].value), b = Number(inputSides[1].value);
    const sumSquares = a**2 + b**2;

    const lenHypo = Math.sqrt(sumSquares);
    // console.log(lenHypo);
    output.innerText = "The length of Hypotenuse is "+lenHypo;
}


btn.addEventListener("click", checkHypotenuse);