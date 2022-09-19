let fields = [];
let gameOver = false;

let currentShape = 'cross';
let winner;

/**
    *Highlight the current player
*/

function fillShape(id) {

    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShapeCross();
        } else {
            currentShapeCircle();
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}

/**
    *if current shape is cross
*/

function currentShapeCross() {
    currentShape = 'circle';
    document.getElementById('player1').classList.remove('player-inactive');
    document.getElementById('player2').classList.add('player-inactive');
}

/**
    *if current shape is circle
*/

function currentShapeCircle() {
    currentShape = 'cross';
    document.getElementById('player1').classList.add('player-inactive');
    document.getElementById('player2').classList.remove('player-inactive');
}

/**
    *draw gamefield
*/

function draw() {
    for (let i = 0; i < fields.length; i++) {

        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
            document.getElementById('cross-' + i).classList.add('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
            document.getElementById('circle-' + i).classList.add('d-none');
        }
    }
}

/**
    *check whether someone has won
*/

function checkForWin() {
    fromLeftToRightWin();
    fromAboveToBottomWin();
    diagonalWin();
}

/**
    *check whether someone has won from left to right
*/

function fromLeftToRightWin() {
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
        updateWinner(winner);
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
        updateWinner(winner);
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
        updateWinner(winner);
    }
}

/**
    *check whether someone has won from above to bottom
*/

function fromAboveToBottomWin() {
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(1)';
        updateWinner(winner);
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
        updateWinner(winner);
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
        updateWinner(winner);
    }
}

/**
    *check whether someone has won diagonal
*/

function diagonalWin() {
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(1)';
        updateWinner(winner);
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(1)';
        updateWinner(winner);
    }
}

/**
    *if some has won
*/

function updateWinner(winner) {
    if (winner) {
        console.log('GEWONNEN', winner);
        gameOver = true;
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1000);
    }
}

/**
    *restart the game
*/

function restartGame() {
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('line-0').style.transform = 'scaleX(0.0)';
    document.getElementById('line-1').style.transform = 'scaleX(0.0)';
    document.getElementById('line-2').style.transform = 'scaleX(0.0)';
    document.getElementById('line-3').style.transform = 'rotate(90deg) scaleX(0.0)';
    document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(0.0)';
    document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(0.0)';
    document.getElementById('line-6').style.transform = 'rotate(45deg) scaleX(0.0)';
    document.getElementById('line-7').style.transform = 'rotate(-45deg) scaleX(0.0)';

    for (let i = 0; i < fields.length; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
    fields = [];
    gameOver = false;
}

/*
* Kommentare:

-mit dem && fields [0] fragst du einfach in Kurzform, ob das Element an der Stelle null überhaupt existiert.
 Weil sonst hat man ja sofort gewonnen, wenn drei Felder in einer Reihe leer sind ( undefined ). Mit dieser Abfrage gucken wir, ob in den Feldern überhaupt etwas drin steht. 
 Wenn da circle oder cross drin steht existiert das element ( ist also true ). Wenn es undefined ist und wir danach fragen bekommen wir false, weil das Element nicht definiert wurde.

 -if(!fields[id]): frage existiert in fields[id] überhaupt ein Element. Zuerst wenn undefined für fields[i] rauskommt, wird die if Bedingung false und ! macht ein true draus und if Block wird
 ausgeführt.
Falls in fields[id] bereits ein Element drin ist, wird die Bedingung zunächst true, allerdings macht ! draus wieder ein false und if block wird nicht ausgeführt

*/ 