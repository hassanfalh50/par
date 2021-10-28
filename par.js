let text = document.querySelector(".num");

let numToText = 1;

let time = setInterval(function(){
    numToText += 1;
    text.textContent = numToText + "%";

    if(numToText === 70){
        clearInterval(time);
    }
},14)
