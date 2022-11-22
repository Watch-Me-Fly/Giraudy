// =============== DOM Elements
const allowedLetters = document.getElementById('allowedLetters');
const results = document.getElementById('results');
const buttonSubmit = document.querySelector('button');

// =============== variables
const words = ['10', 'after', 'repots', 'poowers', 'powers', 'these',
    'time', 'know', 'from', 'could', 'people', 'tsropwe'];

let allow = [];

// =============== randomized from words in dictionary
const randomizeLetters = () => {
    let randomWord = words[Math.floor(Math.random() * words.length)];

    for (let i = 0; i < 7; i++) {
        let letters = randomWord.split("");
        let randomLetter = letters[Math.floor(Math.random() * letters.length)];

        if (!allow.includes(randomLetter)) {
            allow.push(randomLetter);
            allowedLetters.innerText = allow;
        }
    }
}
const generator = () => {
    while (allow.length < 6) {
        randomizeLetters();
    }
}
generator();

// =============== highest scoring word
const highWord = (inputArray) => {
    let words = ['10', 'after', 'repots', 'poowers', 'powers', 'these',
        'time', 'know', 'from', 'could', 'people', 'tsropwe'];
    let scores = [];
    let foundWords = [];

    words.forEach(word => {
        findLetters = word.split("").every(element => inputArray.includes(element));
        if (findLetters) {
            foundWords.push(word);
        }
        let score = inputArray.reduce((prev, curr) => {
            return prev + window[curr];
        }, 0);
        scores.push(score);
    });

    const index = scores.indexOf(Math.max(...scores));
    return foundWords[index];
}

// =============== calculate
const pointsCalculation = () => {
    e = a = i = o = n = r = t = l = s = u = 1;
    d = g = 2;
    b = c = m = p = 3;
    f = h = v = w = y = 4;
    k = 5;
    j = x = 8;
    q = z = 10;

    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        const $input = document.getElementById('userInput').value;
        const inputArray = $input.toLowerCase().split("");

        const findLetters = inputArray.every(element => allow.includes(element));

        const pointsEarned = inputArray.reduce((prev, curr) => {
            return prev + window[curr];
        }, 0);

        if (findLetters && words.includes($input)) {
            results.innerHTML = `<div class="w-50 mx-auto my-3 alert alert-success">
            The word <b>${$input}</b> is worth : ${pointsEarned} points.
            Highest possible word score is <b>${highWord(inputArray)}</b>
        </div>`;
        }
        else if (!findLetters) {
            results.innerHTML = `<div class="w-50 mx-auto my-3 alert alert-danger">
                    you used characters outside of the allowed range
                </div>`;
        }
        else if (findLetters && !words.includes($input)) {
            results.innerHTML = `<div class="w-50 mx-auto my-3 alert alert-danger">
            <b>${$input}</b> does not exist in the dictionary
            </div>`;
        }

    });
}
pointsCalculation();
