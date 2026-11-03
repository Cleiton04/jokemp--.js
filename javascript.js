
const result = document.querySelector('.result')
const HumanScore=document.querySelector('#Human-score')
const machineScore=document.querySelector('#machine-score')




let HumanScoreNumber = 0
let machineScoreNumber = 0


const playHumano = (humanoChoise) => {
playTheGame(humanoChoise, playMachine())
   

}


const playMachine = () => {
     const choyses =['rock', 'paper', 'scissors']
    const radowNumber = Math.floor(Math.random() * 3)


    

return choyses[radowNumber]

}



const playTheGame = (human, machine) => {

    if (human === machine) {
result.innerHTML ='🤝 Empatou!';



    } else if (human === 'paper' && machine === 'rock'|| human === 'rock' && machine === 'scissors'
        || human === 'scissors' && machine === 'paper') {
HumanScoreNumber++
HumanScore.innerHTML= HumanScoreNumber
            
        result.innerHTML='🎉você é o ganhador'
HumanScoreNumber++;
    } else {
machineScoreNumber++
machineScore.innerHTML= machineScoreNumber
        result.innerHTML = '💻 A alexa ganhou!'
    
    }



    }
