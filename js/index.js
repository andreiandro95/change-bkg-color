// change background color
function changeColor(){
    let textDisplay = document.getElementsByClassName("code-hex")[0]
    let background = document.getElementsByClassName("color-container")[0]

    let arr = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let text = [];
    for(let i = 0; i < 6; i++){
        text[i] = arr[(Math.floor(Math.random() * arr.length))]
    }
    let hexCode = "#" + text.join("")
        
    textDisplay.textContent = hexCode
    background.style.backgroundColor = hexCode
}