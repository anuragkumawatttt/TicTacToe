let reset = new Audio("Reset.wav")
let click = new Audio("Turn.mp3")
let win = new Audio("win.wav")

let turn ="X"; 
let isover =false;

//function to change turn
const changeTurn = () => {
    return turn ==="X"?"O":"X";
}
//funtion to check win
const winner = () => {
        let boxtexts = document.getElementsByClassName("text");
        let iswin = [
            [0,1,2,5,5,0],
            [3,4,5,5,15,0],
            [6,7,8,5,25,0],
            [0,3,6,-5,15,90],
            [1,4,7,5,15,90],
            [2,5,8,15,15,90],
            [0,4,8,5,15,45],
            [2,4,6,5,15,-45]
        ];
        iswin.forEach(e =>{
            if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && boxtexts[e[0]].innerText!=='') {
                document.querySelector(".infotext").innerText = boxtexts[e[0]].innerText + " Won";
                isover = true;
                document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "120px";
                win.play();
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector(".line").style.width = "20vw";
            }
        })
}

//Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".text");
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            click.play();
            winner();
            if(!isover) {
            document.getElementsByClassName("infotext")[0].innerText = "Turn of " + turn;
        }
    }
    })
})

//for reset button

onClick = ()=> {
    let boxtext = document.querySelectorAll(".text");
    Array.from(boxtext).forEach(element=>{
        element.innerText = "";
    })
    turn = "X";
    isover= false;
    reset.play();
    document.querySelector(".line").style.width = "0";
    document.getElementsByClassName("infotext")[0].innerText = "Turn of " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0";
}