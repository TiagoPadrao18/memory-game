const grid = document.getElementById("grid");
const gridBtn = document.getElementsByClassName("grid-btn");
const arrayGridBtn = Array.from(gridBtn);


const emojisArr = ["🦁","🦊","🐱","🐮","🐵","🐸"];

arrayGridBtn[0].innerHTML = emojisArr[0];
console.log(arrayGridBtn);
grid.addEventListener("click", (e) =>{
console.log(e.target);

});
