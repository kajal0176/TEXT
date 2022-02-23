console.log("welcome to tic toc game")
let music = new Audio("Game Music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("Game over.mp3")
let turn = "x";
let isgameover = false;
//function to change the turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x"
}

//function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            isgameover = true
            document.getElementsByTagName('img')[0].style.width="200px";
        }
    })
}
// Game logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})
// add onclick for listner button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
     element.innerText=" "
    });
    turn="x"
    isgameover=false;
    
        document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    
})