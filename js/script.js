const optionArray = ['rock', 'paper', 'scissors'];

// selectors
const scoreCount = document.querySelector('.scoreCount')
const resultTxt = document.querySelector('.resultTxt')
const resultSBlk = document.querySelector('.resultSBlk')
const optionsBlk = document.querySelector('.optionsBlk')
const playBtn = document.querySelector('.playBtn')
const rulesBtn = document.querySelector('.rulesBtn')
const closeBtn = document.querySelector('.closeBtn')
const rulesModalBlk = document.querySelector('.rulesModalBlk')

let score = 0;
scoreCount.textContent = score;

rulesBtn.addEventListener('click', function(){
  rulesModalBlk.style.display = "block"
})

closeBtn.addEventListener('click', function(){
  rulesModalBlk.style.display = "none"
})

playBtn.addEventListener('click', function(){
  optionsBlk.style.display = "flex"
  resultSBlk.style.display = "none";
})

function myPick(pick) {
  computerPick(pick)
  resultSBlk.style.display = "flex";
  optionsBlk.style.display = "none";
}

function computerPick(pick) {
  var randomItem = optionArray[Math.floor(Math.random()*optionArray.length)];
  comparePicks(pick, randomItem)
  displayResult(pick, randomItem)
}

function comparePicks(pick, randomItem){
  if (pick == 'rock' && randomItem == 'rock' || pick == 'paper' && randomItem == 'paper' || pick == 'scissors' && randomItem == 'scissors'){
    resultTxt.textContent = 'tie'
  } else if (pick == 'rock' && randomItem == 'scissors' || pick == 'paper' && randomItem == 'rock' || pick == 'scissors' && randomItem == 'paper') {
    resultTxt.textContent = 'you win'
    updateScore('win')
  } else if (pick == 'rock' && randomItem == 'paper' || pick == 'paper' && randomItem == 'scissors' || pick == 'scissors' && randomItem == 'rock'){
    resultTxt.textContent = 'you lose'
    updateScore('lose')
  }
}

function displayResult(pick, randomItem){
  let playerPick = document.querySelector('.resultSBlk .player .pick')
  let computerPick = document.querySelector('.resultSBlk .computer .pick')
  
  playerPick.innerHTML =  `<p class="pick"><p class="pickBtn ${pick}"><span></span></p></p>`;
  computerPick.innerHTML =  `<p class="pick"><p class="pickBtn ${randomItem}"><span></span></p></p>`;
}

function updateScore(result){
  if (result == 'win') {
    score++
    scoreCount.textContent = score
    console.log(score);
  } else if (result == 'lose') {
    if (score == 0) {
      score = 0
    } else {
      score--
      scoreCount.textContent = score
    }
  }
}