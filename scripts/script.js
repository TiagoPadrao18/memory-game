const grid = document.getElementById("grid");

const gridBtn = document.getElementsByClassName("grid-btn");

const arrayGridBtn = Array.from(gridBtn);

const lifes = document.getElementById("lives");

const subLives = document.getElementById("lives-sub");

const addLives = document.getElementById("lives-add");


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
let counter = 5;

subLives.addEventListener("click", () =>{
    const lifesLeft=  lifes.innerText;
    const updatedLifes = eval(`${lifesLeft}-1`);
    lifes.innerText = updatedLifes;
});

addLives.addEventListener("click", () =>{
    const lifesLeft=  lifes.innerText;
    const updatedLifes = eval(`${lifesLeft}+1`);
    lifes.innerText = updatedLifes;
});


grid.addEventListener("click", (e) => {

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

            console.log(rightArr);
            rightArr.forEach((btn) => {
                btn.style.color = "black";
                btn.style.backgroundColor = "green";
                btn.disabled = true;
            });
            processingClick=false;
        } else {
            counter--;

            lifes.innerText = lifes.innerText.substring(0,lifes.innerText.length-2) + counter;
            const wrongArr = arrayGridBtn.filter(
                (btn) =>
                    btn.textContent === comparatorArr[0] ||
                    btn.textContent === comparatorArr[1]
            );

            console.log(wrongArr);

            setTimeout(() => {
                wrongArr.forEach((btn) => {
                    btn.style.color = "transparent";
                    btn.disabled = false;
                });
                processingClick = false;
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
