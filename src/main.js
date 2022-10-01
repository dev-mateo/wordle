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






