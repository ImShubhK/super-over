const strikeButton=document.getElementById("strike");
const resetButton=document.getElementById("reset");
const $team1score=document.getElementById("score-team1");
const $team1wickets=document.getElementById("wickets-team1");
const $team2score=document.getElementById("score-team2");
const $team2wickets=document.getElementById("wickets-team2");

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameoverAudio = new Audio("http://bit.ly/so-crowd-cheer");

const possibleOutcomes = [0,1,2,3,4,5,6,"w"];

var team1score = 0;
var team1wickets = 0;
var team2score = 0;
var team2wickets = 0;
var team1BallFaced = 0;
var team2BallFaced = 0;
var turn = 1;

function gameOver(){
    gameoverAudio.play()
    if(team1score > team2score)
    alert('India wins ')
    if(team2score > team1score)
    alert('Pakistan wins')
    if(team1score === team2score)
    alert('Its tie')
    window.location.relode();
}

function updateScore(){
    $team1score.textContent=team1score;
    $team1wickets.textContent=team1wickets;
    $team2score.textContent=team2score;
    $team2wickets.textContent=team2wickets;
}

resetButton.onclick = () =>{
    window.location.reload();
};
strikeButton.onclick=()=>{
    strikeAudio.pause();
    strikeAudio.currentTime=0;
    strikeAudio.play();
    const randomElement=possibleOutcomes[Math.floor(Math.random()*possibleOutcomes.length)];
    
    if(turn===2)
    {
        team2BallFaced++;
        document.querySelector(`#team2-superover div:nth-child(${team2BallFaced})`).textContent=randomElement;
if(randomElement==="w")
{
    team2wickets++;
        }
        else{
            team2score+=randomElement;
        }
        if(team2BallFaced===6 || team2wickets===2 || team2score>team1score)
        {
            turn=3;
            gameOver();
        }

    }
    if(turn==1)
    {
        team1BallFaced++;
        document.querySelector(`#team1-superover div:nth-child(${team1BallFaced})`).textContent=randomElement;
        if(randomElement==="w")
        {
            team1wickets++;
        }
        else{
            team1score+=randomElement;
        }
    if(team1BallFaced === 6 || team1wickets == 2) turn=2;
    }
    updateScore();
};