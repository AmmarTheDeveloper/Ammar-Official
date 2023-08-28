const startBtn =  document.querySelector('.start-btn'),
    boxes = document.querySelectorAll('.box'),
    restartBtn = document.querySelector('.restart'),
    message = document.querySelector('.title'),
    img = document.querySelector('.pop-up img'),
    newGame = document.querySelector('.new-btn'),
    popUp = document.querySelector('.pop-up'),
    Player =  document.querySelector('.turn-container .turn');
let player1 , player2;
    let xTurn = true;
    let count = 0;

let winProbability = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

startBtn.onclick = ()=>{
    player1 = document.querySelector('.player1 input').value.trim(),
        player2 =  document.querySelector('.player2 input').value.trim();
        if(player1.length > 0 && player2.length > 0){
            let home = document.querySelector('.home');
            home.style.display = 'none';
            Player.innerText = player1;
        }
}
const checkWin = ()=>{
   winProbability.forEach((win , index)=>{
    let box = [boxes[winProbability[index][0]].innerText , boxes[winProbability[index][1]].innerText , 
    boxes[winProbability[index][2]].innerText]
    let [element1 , element2 , element3] = box;
    if(element1 == element2 && element2 == element3 && element1 == element3 ){
        if(element1.length != 0 && element2.length != 0 && element3.length != 0){
            if(element1 != undefined && element2 != undefined && element3 != undefined){
                popUp.classList.remove('hide');
                let turn;

                if(xTurn){
                    turn = player2;
                }else{
                    turn = player1;
                }

                img.src = 'images/win.png';
                message.innerText = `'${turn}' win's `;

                if(count == 9){
                    count = 0;
                }
            }
        }
    }
   })

}
const  checkDraw = ()=>{
    if(count == 9){
        popUp.classList.remove('hide');
        message.innerText = 'The match is draw';
        img.src = 'images/draw.png';
    }
}

boxes.forEach(box => {
    box.onclick = () => {
        if (xTurn) {
            box.innerText = 'X';
            box.style.pointerEvents = 'none';
            xTurn = false;
            Player.innerText = player2;
            Player.style.color = 'red';
            box.style.color = 'black';
        } else {
            box.innerText = '0';
            box.style.pointerEvents = 'none';
            xTurn = true;
            Player.innerText = player1;
            Player.style.color = 'black';
            box.style.color = 'red';
        }
        count += 1;
        checkWin();
        checkDraw();
    }
})


const  resetAllBox = function(){
    count = 0;
    boxes.forEach(box =>{
        xTurn = true;
        box.style.pointerEvents = 'auto';
        box.innerText = '';
        Player.innerText = player1  ;
        Player.style.color = 'black';
    })
}

restartBtn.addEventListener('click' , resetAllBox);

newGame.onclick = ()=>{
    popUp.classList.add('hide');
    resetAllBox();
}