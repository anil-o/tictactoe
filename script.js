let fields = [];

let currentShape = 'cross';

function fillShape(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    }

    fields[id] = currentShape;
    console.log(fields);
    draw();
    checkForWin();
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    conditionsForWin();
}

function conditionsForWin() {
    let winner;
    //die sind von links nach rechts
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
    }

    //die sind von oben nach unten
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }

    //die beiden mit Diagonal gewinnt
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }

    if (winner) {
        console.log('GEWONNEN', winner);
    }
}

/*
* Kommentare:

-mit dem && fields [0] fragst du einfach in Kurzform, ob das Element an der Stelle null überhaupt existiert.
 Weil sonst hat man ja sofort gewonnen, wenn drei Felder in einer Reihe leer sind ( undefined ). Mit dieser Abfrage gucken wir, ob in den Feldern überhaupt etwas drin steht. 
 Wenn da circle oder cross drin steht existiert das element ( ist also true ). Wenn es undefined ist und wir danach fragen bekommen wir false, weil das Element nicht definiert wurde.

*/ 