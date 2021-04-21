'use strict;'
let random = Math.trunc((Math.random() * 20) + 1);
console.log(random);
const dispMessage = str => document.querySelector('.h5-responsive').textContent = `${str}`;

const changeColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('#data').style.backgroundColor = color;
};

document.querySelector('#again').addEventListener('click', function () {
    changeColor('rgb(46, 46, 46)');
    random = Math.trunc((Math.random() * 20) + 1);
    document.querySelector('#score').textContent = 20;
    dispMessage('Start guessing ...');
    document.querySelector('#answerBox').textContent = '?';
    document.querySelector('#data').value = '';
});

const setHighScore = function () {
    if (document.querySelector('#score').textContent > document.querySelector('#hiscore').textContent) document.querySelector('#hiscore').innerHTML = document.querySelector('#score').textContent;
};

const scoreDec = () => document.querySelector('#score').textContent -= 1;

const close = () => dispMessage("👀 Too close!");

const too = (str) => dispMessage(`😂 Too ${str}!`);

const testNumber = function (number) {
    if (number > random) {
        if (number - random <= 2) {
            close();
            changeColor('blue');
        } else {
            too('High');
            changeColor('red');
        }
        scoreDec();

    } else if (number === random) {
        dispMessage("✔ Correct answer");
        document.querySelector('#answerBox').textContent = random;
        document.querySelector('#answerBox').style.width = '20%';
        changeColor('green');
        setHighScore();


    } else {
        if (random - number <= 2) {
            close();
            changeColor('blue');
        } else {
            too('Low');
            changeColor('red');
        }
        scoreDec();

    }
}


const limit = (str) => dispMessage(`${str} Limit,Try again`);

const checkNumber = function (inputNumber) {
    if (inputNumber > 20) {
        limit('Above')
    } else if (inputNumber < 0) {
        limit('Below')
    }
    else {
        testNumber(inputNumber);
    }
}

const checkIt = function () {
    const inputNumber = Number(document.querySelector('#data').value);
    if (document.querySelector('#score').textContent > 1) {
        checkNumber(inputNumber);
    } else {
        document.querySelector('#score').textContent = '0';
        dispMessage('💩 You lost!')
    }

}


document.querySelector('#check').addEventListener('click', function () {
    checkIt();
});
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkIt();
    }
});