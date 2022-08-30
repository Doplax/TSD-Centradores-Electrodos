
let $content = document.getElementById("content");
let optionChoice = document.getElementById("option-choice");

// console.log(optionChoice);

optionChoice.addEventListener("change",function(){
    
    optionChoice = document.getElementById("option-choice");
    let newElement = document.createElement("h1");
    newElement.innerText = optionChoice.value
    $content.insertBefore($content ,newElement);
    
})







