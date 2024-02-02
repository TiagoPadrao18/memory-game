const grid = document.getElementById("grid");
const gridBtn = document.getElementsByClassName("grid-btn");
const arrayGridBtn = Array.from(gridBtn);

const emojisArr = [
  { emoji: "🦁", triesNumber: 2 },
  { emoji: "🦊", triesNumber: 2 },
  { emoji: "🐱", triesNumber: 2 },
  { emoji: "🐮", triesNumber: 2 },
  { emoji: "🐵", triesNumber: 2 },
  { emoji: "🐸", triesNumber: 2 },
];

randomizeEmotes();

const comparatorArr = [];

grid.addEventListener("click", (e) => {
  comparatorArr.push(e.target.textContent);
  console.log(comparatorArr);

  if (comparatorArr[comparatorArr.length - 1] == e.target.emoji) {
    e.target.style.color = "black";
    console.log(true);
  } else {
    e.target.style.color = "transparent";
  }
});

function checkHowManyClicks() {}

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
