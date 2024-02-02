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


grid.addEventListener("click",(e)=>{
  e.target.style.color ="blue";
});


function randomizeEmotes() {
  const emojiArrCopy = emojisArr.map((x) => x); 
  
  let count = 0;
  while (emojiArrCopy.length > 0) {
    let randomEmoji = Math.floor(Math.random() * emojiArrCopy.length);
    console.log(randomEmoji);

    if (emojiArrCopy[randomEmoji].triesNumber !== 0) {
      gridBtn[count].innerHTML = emojiArrCopy[randomEmoji].emoji;
      count++;
      emojiArrCopy[randomEmoji].triesNumber--;
      if (emojiArrCopy[randomEmoji].triesNumber===0){
        emojiArrCopy.splice(randomEmoji,1);
        console.log(emojiArrCopy);
      }
    } 
  }

}

