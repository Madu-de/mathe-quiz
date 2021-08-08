let zahl1;
let zahl2;
let ergebnis;
let input;

function start() {

    document.getElementById("eingabe").style.display = "none";

 }
function plus() {

    einblenden();

    zahl1 = Math.floor(Math.random() * 50);
    zahl2 = Math.floor(Math.random() * 50);

    ergebnis = zahl1 + zahl2;


    document.getElementById("zahl1").innerHTML = zahl1;
    document.getElementById("zahl2").innerHTML = zahl2;

    document.getElementById("operator").innerHTML = "+";




}

function minus(negativ) {

    einblenden();

    zahl1 = Math.floor(Math.random() * 50);
    zahl2 = Math.floor(Math.random() * 50);

    ergebnis = zahl1 - zahl2;

    if (ergebnis <= 0) {

        if (negativ === false) {

            ergebnis = 0;

        }

    }



    document.getElementById("zahl1").innerHTML = zahl1;
    document.getElementById("zahl2").innerHTML = zahl2;

    document.getElementById("operator").innerHTML = "-";


}

function mal(klein) {

    einblenden();

    if (klein === true) {

        zahl1 = Math.floor(Math.random() * 10);
        zahl2 = Math.floor(Math.random() * 10);

        ergebnis = zahl1 * zahl2;

        document.getElementById("zahl1").innerHTML = zahl1;
        document.getElementById("zahl2").innerHTML = zahl2;

        document.getElementById("operator").innerHTML = "x";

    } else {

        zahl1 = Math.floor(Math.random() * 50 + 10);
        zahl2 = Math.floor(Math.random() * 50 + 10);

        ergebnis = zahl1 * zahl2;

        document.getElementById("zahl1").innerHTML = zahl1;
        document.getElementById("zahl2").innerHTML = zahl2;

        document.getElementById("operator").innerHTML = "x";

    }
    


}

function submit() {

    input = Number(eingabe.value);

    if (input === ergebnis) {



        document.getElementById("feedback").style = "color:green"
        document.getElementById("feedback").innerHTML = "Richtig!"

        eingabe.value = "";

        document.getElementById("zahl1").innerHTML = "";
        document.getElementById("zahl2").innerHTML = "";

        document.getElementById("operator").innerHTML = "";

        document.getElementById("gleich").innerHTML = "";

        document.getElementById("eingabe").style.display = "none";

    } else {

        document.getElementById("feedback").style = "color:red"
        document.getElementById("feedback").innerHTML = "Leider falsch!"

        eingabe.value = " ";

        document.getElementById("zahl1").innerHTML = "";
        document.getElementById("zahl2").innerHTML = "";

        document.getElementById("operator").innerHTML = "";

        document.getElementById("gleich").innerHTML = "";

        document.getElementById("eingabe").style.display = "none";

    }


}

function einblenden() {

    document.getElementById("feedback").innerHTML = ""

    document.getElementById("gleich").innerHTML = "="

    document.getElementById("eingabe").style.display = "";


}