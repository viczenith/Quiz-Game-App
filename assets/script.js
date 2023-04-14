const numb1 = Math.ceil(Math.random()*10)
const numb2 = Math.ceil(Math.random()*10)

const elQuestion = document.getElementById("question");

const elInput = document.getElementById("input")

const elForm = document.getElementById("form");

const elScore = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

elScore.innerText = `score: ${score}`

elQuestion.innerText = `What is ${numb1} multipy by ${numb2}?`;

const correctAnswer = numb1 * numb2;

elForm.addEventListener("submit", ()=>{
    const userAns = +elInput.value;
    if(userAns === correctAnswer){
        score++;
        updateLocalStorage()
    }else{
        score--;
        updateLocalStorage()
    }
});
function updateLocalStorage() {
     localStorage.setItem("score", JSON.stringify(score))
}