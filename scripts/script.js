const grid = document.getElementById("grid");

const gridBtn = document.getElementsByClassName("grid-btn");

const arrayGridBtn = Array.from(gridBtn);

const lifes = document.getElementById("lives");

const subLives = document.getElementById("lives-sub");

const addLives = document.getElementById("lives-add");

let clickTimes = 0;

let processingClick = false;


const emojisArr = [
  { emoji: "🦁", triesNumber: 2 },
  { emoji: "🦊", triesNumber: 2 },
  { emoji: "🐯", triesNumber: 2 },
  { emoji: "🦅", triesNumber: 2 },
  { emoji: "🐗", triesNumber: 2 },
  { emoji: "🐒", triesNumber: 2 },
];

randomizeEmotes();

const comparatorArr = [];
const winArr =[];
let counter;

subLives.addEventListener("click", () => {
  const lifesLeft = lifes.innerText;
  if (lifesLeft !== "1") {
    const updatedLifes = eval(`${lifesLeft}-1`);
    lifes.innerText = updatedLifes;
  }
});

addLives.addEventListener("click", () => {
  const lifesLeft = lifes.innerText;

  const updatedLifes = eval(`${lifesLeft}+1`);
  lifes.innerText = updatedLifes;
});

grid.addEventListener("click", (e) => {
  if (clickTimes === 0) {
    subLives.disabled = true;
    addLives.disabled = true;
    counter = parseInt(lifes.innerText);
  }
  clickTimes++;
  console.log(clickTimes);
  if (processingClick || e.target.disabled) {
    return;
  }

  e.target.style.color = "black";

  //if the array is empty, I add the disabled attribute to the element
  if (comparatorArr.length === 0) {
    e.target.disabled = true;
  }

  //then the emoji is pushed to an array in order to be compared to the second emoji to be clicked
  comparatorArr.push(e.target.textContent);

  if (comparatorArr.length === 2) {
    processingClick = true;
    if (comparatorArr[0] === comparatorArr[1]) {
      const rightArr = arrayGridBtn.filter(
        (btn) => btn.textContent === comparatorArr[0]
      );

   
      rightArr.forEach((btn) => {
        btn.style.color = "black";
        btn.style.backgroundColor = "green";
        winArr.push(btn);
        btn.disabled = true;
      });
      processingClick = false;
      console.log(winArr);
      console.log(emojisArr);
    } else {
      counter--;

      lifes.innerText =
        lifes.innerText.substring(0, lifes.innerText.length - 2) + counter;
      const wrongArr = arrayGridBtn.filter(
        (btn) =>
          btn.textContent === comparatorArr[0] ||
          btn.textContent === comparatorArr[1]
      );

     

      setTimeout(() => {
        wrongArr.forEach((btn) => {
          btn.style.color = "transparent";
          btn.disabled = false;
        });
        processingClick = false;
      }, 1000);
    }

    comparatorArr.length = 0;
    verifyIfDefeat();
    verifyIfWin();
  }
});

function randomizeEmotes() {
  const emojiArrCopy = emojisArr.map((x) => x);

  let count = 0;
  while (emojiArrCopy.length > 0) {
    let randomEmoji = Math.floor(Math.random() * emojiArrCopy.length);

    if (emojiArrCopy[randomEmoji].triesNumber !== 0) {
      gridBtn[count].innerHTML = emojiArrCopy[randomEmoji].emoji;
      count++;
      emojiArrCopy[randomEmoji].triesNumber--;
      if (emojiArrCopy[randomEmoji].triesNumber === 0) {
        emojiArrCopy.splice(randomEmoji, 1);
      }
    }
  }
}

function verifyIfDefeat() {
  if (+lifes.textContent === 0) {
    console.log("defeat");
    window.location.href = "/containers/defeatScreen.html";
  }
}


function verifyIfWin(){
  if(winArr.length === emojisArr.length*2){
    console.log("win");
    window.location.href = "/containers/winScreen.html"
  }

}