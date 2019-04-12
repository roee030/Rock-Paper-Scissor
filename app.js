let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
var span = document.getElementsByClassName(".close-button")[0];


span.onclick = function() {
    modal.style.display = "none";
  }

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function getComputerChoice()
{
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = userChoice + " beats " + computerChoice + ". You WIN!";
}
function lose(userChoice,computerChoice)
{
    console.log("lose");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = computerChoice + " beats " + userChoice + ". You LOSE!";
}
function game(userChoice)
{
    const computerChoice = getComputerChoice();
    switch(userChoice+computerChoice)
    {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("draw");
            break;
    }
}
function main()
{
    toggleModal();
    rock_div.addEventListener('click',function()
    {
        game("r");
    })
    paper_div.addEventListener('click',function()
    {
        game("p");
    })
    scissors_div.addEventListener('click',function()
    {
        game("s");
    })
}
main();