let chosenWord = "";

function getMatchIndexes(toMatch, str) {
    let green = [];
    let yellow = [];
    let nil = [];

    for (let e=0; e < toMatch.length; e++) {
        if (str.includes(toMatch[e])) {
            if (str[e] === toMatch[e]) {
                green.push(toMatch[e]);
            } else {
                yellow.push(toMatch[e]);
            }
        } else {
            nil.push(toMatch[e]);
        }
    }

    return {
        Green: green,
        Yellow: yellow,
        None: nil
    };
}

fetch('./words.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        response.json()
            .then(data => {
                let wordList = Object.values(data)[0];
                chosenWord = wordList[Math.floor(Math.random()*wordList.length)];
                console.log(chosenWord);
            })
    })

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ENTER"];
document.addEventListener('keydown', function(event) {
    const boxes = document.getElementsByClassName("box");

    if (alphabet.includes(event.key.toUpperCase())) { // Handle letter press

        if (event.key.toUpperCase() === "ENTER") { // Handle enter press

            for (let n=0; n < boxes.length; n++) {
                let iteration = boxes.length - n - 1;
                if (boxes[iteration].textContent !== "") {
                    if ([5,10,15,20,25,30].includes(iteration+1)) {
                        const guess = `${boxes[iteration-4].textContent}${boxes[iteration-3].textContent}${boxes[iteration-2].textContent}${boxes[iteration-1].textContent}${boxes[iteration].textContent}`.toLowerCase();

                        if (guess === chosenWord) {
                            console.log("Correct Word!");
                        } else {
                            const matches = getMatchIndexes(guess, chosenWord);
                            console.log(matches);
                            if (matches["None"]) {
                                for (let m=0; m < matches["None"].length; m++) {
                                    let changeIndexOf = chosenWord.indexOf(matches["None"][m]);
                                    boxes[changeIndexOf].style.backgroundColor="#909090";
                                }
                            }
                            if (matches["Yellow"]) {
                                for (let m=0; m < matches["Yellow"].length; m++) {
                                    let changeIndexOf = chosenWord.indexOf(matches["Yellow"][m]);
                                    boxes[changeIndexOf].style.backgroundColor="#E6D70B";
                                }
                            }
                            if (matches["Green"]) {
                                for (let m=0; m < matches["Green"].length; m++) {
                                    let changeIndexOf = chosenWord.indexOf(matches["Green"][m]);
                                    boxes[changeIndexOf].style.backgroundColor="#26A65B";
                                }
                            }
                        }
                    }
                    return;
                }
            }
            return;
        }

        for (let n=0; n < boxes.length; n++) {

            if (boxes[n].textContent === "") {
                if (![5,10,15,20,25,30].includes(n)) {
                    boxes[n].textContent = event.key.toUpperCase();
                    return;
                }
                return;
            }
        }

    } else if (event.key === "Delete" || event.key === "Backspace") { // Handle delete key
        const boxes = document.getElementsByClassName("box");

        for (let n=0; n < boxes.length; n++) {
            let iteration = boxes.length - n - 1;
            if (boxes[iteration].textContent !== "") {
                boxes[iteration].textContent = "";
                break;
            }
        }
    }

});




