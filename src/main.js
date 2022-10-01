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

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
document.addEventListener('keydown', function(event) {
    if (alphabet.includes(event.key.toUpperCase())) { // Handle key press

        const boxes = document.getElementsByClassName("box");

        for (let n=0; n < boxes.length; n++) {
            let iteration = n;

            if (boxes[iteration].textContent === "") {
                boxes[iteration].textContent = event.key.toUpperCase();
                break;
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




