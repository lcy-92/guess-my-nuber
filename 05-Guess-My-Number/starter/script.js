
let secretNumber = Math.floor((Math.random()*20) +1)
console.log(secretNumber)

let score = 20;
let highScore =0;



document.querySelector(".check").addEventListener("click",()=>{
  
   
    const guess = Number(document.querySelector(".guess").value)
    const message = document.querySelector(".message")
    const scores = document.querySelector(".score")
    const box = document.querySelector(".number")
    const body =document.querySelector("body")

    if(secretNumber>guess){
        if(score>0){ score = score-1
            scores.innerHTML = score
            message.innerHTML="To Low"   }
          else if(score===0){
            message.innerHTML ="You Lose!"
          }
       
         
    
    }
    else if(secretNumber<guess){
        if(score>0){ score = score-1
            scores.innerHTML = score
            message.innerHTML="To High"   }
          else if(score===0){
            message.innerHTML ="You Lose!"
          }
    }
    else if(secretNumber === guess){
        message.innerHTML="Correct"
        box.style.width ="30rem"
        box.innerHTML = secretNumber
        body.style.backgroundColor ="green"
        
        
        if(highScore<score){
            highScore = score
           document.querySelector(".highscore").innerHTML = score
    
        }
    }
    
})


document.querySelector(".btn").addEventListener("click",()=>{
    score= 20;
    secretNumber = Math.floor((Math.random()*20) +1)
    console.log(secretNumber)
 
    const message = document.querySelector(".message")
    const scores = document.querySelector(".score")
    const box = document.querySelector(".number")
  
    
    
    
   
    
    message.innerHTML="Strat Guessing..."
        document.querySelector(".guess").innerText =""
       
        scores.innerText =20;
        box.style.width ="15rem"
        
      
        box.innerHTML = "?"
        document.querySelector("body").style.backgroundColor ="black"
        document.querySelector(".guess").value =""

        

})



/*
1.1~20까지 랜덤으로 숫자를 뽑는걸 만든다.
=> 그걸 ?안에 넣어준다.
2.button click을 만든다.

공통된부분 . 
클릭을하면 score가 감소한다
score의 처음값은 20이다.

경우의 수는 3가지인데
1.check box의 숫자가 secretNumber보다 큰 경우
=> 1. score의숫자가 -1 된다.
 2.start guessing....이라는 text가 to high라는걸 나타내야한다.

2.check box의 숫자가 secretNumber보다 작은경우
=> 1. score의숫자가 -1 된다.
 2.start guessing....이라는 text가 to low라는걸 나타내야한다.

 3.check box의 숫자가 secretNumber와 같아서 정답인경우
=> ?의 div에 secretNumber가 나타난다. 
div의 크기가 2배로 커진다
body의 backgruondColor가 변한다
4.highScore가 크다면 기록된다.



**** again
again버튼을 누르면
1.배경과 ? 의 박스가 크기와 배경색이 원래대로 변한다
2.score => 20이되고
3.highscore는 그대로이다.
-> 만약 highscore보다 score가 크다면 highscore를 score로 바꿔준다.

*/