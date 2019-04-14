let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const counter_div = document.getElementById("dlgbox");

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
    result_div.innerHTML = "You WIN!";
}
function lose(userChoice,computerChoice)
{
    console.log("lose");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You LOSE!";
}
function draw()
{
    result_div.innerHTML = 'DRAW!';
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
            draw();
            break;
    }
}
function started_pop_up(){
    swal.fire({   
        title: "New Game",   
        text: "How much you wanna play???:",   
        input: 'text',   
        showCancelButton: true,   
        closeOnConfirm: false,   
        animation: "slide-from-top",   
        inputPlaceholder: "insert a number" ,
        closeOnClickOutside: false },
        function(inputValue)
        {   
            if (inputValue === false) 
            return false;      
               if (inputValue === "") {     
                swal.showInputError("Please enter a number!");     
                return false   
                }      
             swal("Action Saved!", "You entered following email: " + inputValue, "success"); 
        });

}
function main()
{
    pop_up();
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