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
  e.target.style.color = "black";
  comparatorArr.push(e.target.textContent);

  if (comparatorArr.length === 2) {
    if (comparatorArr[0] === comparatorArr[1]) {
      const rightArr = arrayGridBtn.filter(
        (e) => e.textContent === comparatorArr[0]
      );
      console.log(rightArr);
      rightArr.forEach((e) => (e.style.color = "black"));
    } else {
      const wrongArr = arrayGridBtn.filter(
        (e) =>
          e.textContent === comparatorArr[0] ||
          e.textContent === comparatorArr[1]
      );
      console.log(wrongArr);
      setTimeout(() => {
        wrongArr.forEach((e) => (e.style.color = "transparent"));
      }, 1000);
    }
    comparatorArr.length = 0;
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
