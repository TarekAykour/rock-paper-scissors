const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
let rounds = 0;
const elements = ['rock', 'paper', 'scissors']
const points = document.querySelector('.points')
points.innerHTML = `${rounds}`
const text = document.querySelector('.text')
const retry = document.querySelector('.retry')
let computerScore =0;
let userScore=0;


let userScoreElement = document.querySelector('.computer').innerHTML = userScore
let computerScoreElement = document.querySelector('.user').innerHTML = computerScore




let computerChoice = elements[Math.round(Math.random() *2)];
let userChoice = ''



retry.addEventListener('click', ()=> {
    replay()
})

function replay(){
    computerScore =0;
    userScore=0;
    text.innerHTML=''
    points.innerHTML = rounds
    document.querySelector('.retry').classList.add('hidden')
    document.querySelector('.retry').classList.remove('display')
}






    rock.addEventListener('click', ()=> {
        computerChoice = elements[Math.round(Math.random() *2)];
        userChoice = 'rock'
        console.log(`com choice:${computerChoice}, user choice:${userChoice}`);
        if(computerChoice == userChoice){
            text.innerHTML = 'Tie!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
        }
        else if(computerChoice == 'paper'){
            text.innerHTML = 'You lost!'
            computerScore += 1
            text.classList.remove('hidden')
            text.classList.add('displayed')
        }
        else if(computerChoice == 'scissors'){
            text.innerHTML = 'You won!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
           userScore += 1
        }

        rounds += 1
        points.innerHTML = rounds
        userScoreElement = document.querySelector('.user').innerHTML = userScore
        computerScoreElement = document.querySelector('.computer').innerHTML = computerScore
    })

    // paper
    paper.addEventListener('click', ()=> {
        computerChoice = elements[Math.round(Math.random() *2)];
        userChoice = 'paper'
        if(computerChoice == userChoice){
            text.innerHTML = 'Tie!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
        }
        else if(computerChoice == 'scissors'){
            text.innerHTML = 'You lost!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
            computerScore += 1
        }
        else if(computerChoice == 'rock'){
            text.innerHTML = 'You won!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
           userScore += 1
        }

        rounds += 1
        points.innerHTML = rounds
        userScoreElement = document.querySelector('.user').innerHTML = userScore
        computerScoreElement = document.querySelector('.computer').innerHTML = computerScore
        
    })

    // scissors
    scissors.addEventListener('click', ()=> {
        computerChoice = elements[Math.round(Math.random() *2)];
        userChoice = 'scissors'
        if(computerChoice == userChoice){
            text.innerHTML = 'Tie!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
        }
        else if(computerChoice == 'rock'){
            text.innerHTML = 'You lost!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
            computerScore += 1
        }
        else if(computerChoice == 'paper'){
            text.innerHTML = 'You won!'
            text.classList.remove('hidden')
            text.classList.add('displayed')
            userScore += 1
            
        }
       rounds += 1
       points.innerHTML = rounds
       userScoreElement = document.querySelector('.user').innerHTML = userScore
       computerScoreElement = document.querySelector('.computer').innerHTML = computerScore
    })


























