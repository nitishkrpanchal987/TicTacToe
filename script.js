console.log('welcome to tic tac toe')

// let music = new Audio('music.mp3');
let ting = new Audio('ting.mp3');
// let gameover = new Audio('gameover.mp3');
let turn = 'X';
// console.log(boxText[0]);

const changeTurn = ()=>{
    return turn === 'X'?'O':'X';
}

let checkWin = ()=>{
    let win = [
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [6,4,2]
    ]
    let boxText = document.getElementsByClassName('boxText')
    win.forEach(e=>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== '')){
        document.querySelector('.con').innerText = boxText[e[0]].innerText + ' won'
        document.getElementsByClassName('imgbox')[0].getElementsByTagName('img')[0].style.width = '100px'
        }
    })
}

//game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element)=>{
    // console.log(element)
    element.addEventListener('click', ()=>{
        let boxText = element.querySelector('.boxText');
        if(boxText.innerText == '')
        {
            ting.play();
            boxText.innerText = turn;
            turn = changeTurn();
            
            document.getElementsByClassName('con')[0].innerText = 'Turn for ' + turn;
            checkWin();
        }
    })
})

let btn = document.getElementById('button');
btn.addEventListener('click', ()=>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(ele=>{
        ele.innerText = '';
    })
    turn = 'X'
    document.getElementsByClassName('con')[0].innerText = 'Turn for ' + turn;
    document.getElementsByClassName('imgbox')[0].getElementsByTagName('img')[0].style.width = '0px'
})