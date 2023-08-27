const output = document.querySelector("#output");
const btn = document.querySelector("#submit");
const quizForm = document.querySelector(".quizz-form");

const correctAns = ["90°", "right angled"];


function calculateScore() {
    let score = 0, index = 0;

    const formResult = new FormData(quizForm);
    // for (let entry of formResult.entries()) {
    //     // console.log(entry);
    // }
    for (let value of formResult.values()) {
        // console.log(value);
        if (correctAns[index] === value) {
            score += 1;
        }
        index += 1;
    }
    // console.log(score);
    output.innerText = `Your score is ${score}`;
}



btn.addEventListener("click", calculateScore);