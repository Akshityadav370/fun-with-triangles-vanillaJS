const inputSides = document.querySelectorAll(".input");
const output = document.querySelector("#output");
const btn = document.querySelector("#submit");


function checkHypotenuse() {
    const a = Number(inputSides[0].value), b = Number(inputSides[1].value);
    const area = 0.5*a*b;
    // console.log(lenHypo);
    output.innerText = `The area of the triangle is ${area} cm²`
}


btn.addEventListener("click", checkHypotenuse);