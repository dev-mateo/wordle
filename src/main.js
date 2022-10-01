fetch('./words.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        response.json()
            .then(data => {
                let wordList = Object.values(data)[0];
                const chosenWord = wordList[Math.floor(Math.random()*wordList.length)];
                console.log(chosenWord);
            })
    })

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ENTER"];
document.addEventListener('keydown', function(event) {
    const boxes = document.getElementsByClassName("box");

    if (alphabet.includes(event.key.toUpperCase())) { // Handle letter press

        if (event.key.toUpperCase() === "ENTER") {

            for (let n=0; n < boxes.length; n++) {
                let iteration = boxes.length - n - 1;
                if (boxes[iteration].textContent !== "") {
                    if ([5,10,15,20,25,30].includes(iteration+1)) {
                        console.log("Submitted word");
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




