const randomNumber:number=Math.floor(Math.random()*10)+1;
const userGuess=document.querySelector('.guess') as HTMLInputElement;
const checkBtn=document.querySelector('.check') as HTMLButtonElement;
const btnPlayAgain=document.querySelector('.again') as HTMLButtonElement;
const message=document.querySelector('.message') as HTMLParagraphElement;
const generatedNumber=document.querySelector('.number') as HTMLDivElement;
const bodyEl=document.querySelector('body') as HTMLBodyElement;
const scores=document.querySelector('.score') as HTMLSpanElement;
let score:number=20;
checkBtn.addEventListener('click',()=>{
    const userGuessValue=+(userGuess.value);
    if(userGuessValue===randomNumber){
        message.textContent=`Congrats You Win The Game`;
        bodyEl.style.backgroundColor='green'
        generatedNumber.textContent=randomNumber;
    }else if(userGuessValue>randomNumber){
        message.textContent=`Too High`;
        score-=1
        scores.textContent=score
    }else if(userGuessValue<randomNumber){
        message.textContent=`Too Low`;
        score--;
        scores.textContent=score
    }else if(!userGuessValue){
        message.textContent=`Please Guess a Number`
    }
});
btnPlayAgain.addEventListener('click',()=>{
    bodyEl.style.backgroundColor=`#222`;
    generatedNumber.textContent='?';
    message.textContent=`Start Guessing`;
    scores.textContent=20;
})