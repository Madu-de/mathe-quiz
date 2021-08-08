# Das Mathe Quiz


## Die Plus Funktion

* Zuerst wird die einblenden Funktion ausgeführt:

`document.getElementById("feedback").innerHTML = ""`

`document.getElementById("gleich").innerHTML = "="`

`document.getElementById("eingabe").style.display = "";`

Mit dieser Funktion wird das Feedback entfernt und das Gleichzeichen und die Eingabe eingefügt.


* Danach werden 2 Zahlen generiert, die sich im Zahlenraum 0-50 befinden, um den Zahlenwert 100 nicht zu überschreiten:

`zahl1 = Math.floor(Math.random() * 50);`
`zahl2 = Math.floor(Math.random() * 50);`

* Kurz darauf werden beide Zahlen addiert und in einer Variable gespeichert:

`ergebnis = zahl1 + zahl2;`

* Beide Zahlen werden nun mit dem Operator (+) angezeigt:

`document.getElementById("zahl1").innerHTML = zahl1;`
`document.getElementById("zahl2").innerHTML = zahl2;`
`document.getElementById("operator").innerHTML = "+";`

### Somit entsteht diese Funktion:

    function plus() {

    einblenden();

    zahl1 = Math.floor(Math.random() * 50);
    zahl2 = Math.floor(Math.random() * 50);

    ergebnis = zahl1 + zahl2;

    document.getElementById("zahl1").innerHTML = zahl1;
    document.getElementById("zahl2").innerHTML = zahl2;

    document.getElementById("operator").innerHTML = "+";

    }
    
## Die Minus Funktion

Bei dieser Funktion gibt es einen Boolean als Übergabewert, da wir ja 2 unterschiedliche Übungen haben und damit der Code etwas übersichtlicher ist.

* Zuerst wird wieder die einblenden Funktion ausgeführt:

`document.getElementById("feedback").innerHTML = ""`

`document.getElementById("gleich").innerHTML = "="`

`document.getElementById("eingabe").style.display = "";`

Mit dieser Funktion wird das Feedback entfernt und das Gleichzeichen und die Eingabe eingefügt.

* Danach werden wieder 2 Zahlen generiert, die sich im Zahlenraum 0-50 befinden, um den Zahlenwert 100 nicht zu überschreiten:

`zahl1 = Math.floor(Math.random() * 50);`
`zahl2 = Math.floor(Math.random() * 50);`

* Kurz darauf werden beide Zahlen subtrahiert und in einer Variable gespeichert:

`ergebnis = zahl1 + zahl2;`

* Da es eine Übung mit und eine andere ohne negativen Zahlen gibt, wird jetzt geschaut ob der Wert unter 0 ist. Wenn dem so ist, wird geschaut ob der Übergabewert (hier "negativ" genannt) false ist. Wenn dem so ist wird der Wert auf 0 gesetzt.

      if (ergebnis <= 0) {

        if (negativ === false) {

            ergebnis = 0;

        }

      }

* Danach werden wieder die Zahlen und der Operator (-) auf dem Bildschirm eingeblendet:

`document.getElementById("zahl1").innerHTML = zahl1;`
`document.getElementById("zahl2").innerHTML = zahl2;`
`document.getElementById("operator").innerHTML = "-";`

### Somit entsteht diese Funktion:

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

## Die Mal Funktion

Hier gibt es ebenso einen Boolean als Übergabewert. true bedeutet in dem fall Kleines 1x1 und false großes 1x1.

* Zuerst wird natürlich wieder die einblenden Funktion angewendet.

`document.getElementById("feedback").innerHTML = ""`

`document.getElementById("gleich").innerHTML = "="`

`document.getElementById("eingabe").style.display = "";`

* Als zweiten Schritt wird auch direkt der Übergabe Wert überprüft:

      if (klein === true) {

              zahl1 = Math.floor(Math.random() * 10);
              zahl2 = Math.floor(Math.random() * 10);

          } else {

              zahl1 = Math.floor(Math.random() * 50 + 10);
              zahl2 = Math.floor(Math.random() * 50 + 10);

      }
      
Dadurch wird dann entschieden, wie die zwei Zahlen erstellt werden. Bei dem kleinem 1x1 werden natürlich nur Werte von 1-10 verwendet. Bei dem großem 1x1 Werte von 10-50.

* Danach werden die Zahlen multipliziert und inklusive dem Operator (x) auf der Seite angezeigt:

`document.getElementById("zahl1").innerHTML = zahl1;`
`document.getElementById("zahl2").innerHTML = zahl2;`
`document.getElementById("operator").innerHTML = "x";`

### Somit entsteht diese Funktion:

    function mal(klein) {

        einblenden();

        if (klein === true) {

            zahl1 = Math.floor(Math.random() * 10);
            zahl2 = Math.floor(Math.random() * 10);

        } else {

            zahl1 = Math.floor(Math.random() * 50 + 10);
            zahl2 = Math.floor(Math.random() * 50 + 10);


        }

        ergebnis = zahl1 * zahl2;

        document.getElementById("zahl1").innerHTML = zahl1;
        document.getElementById("zahl2").innerHTML = zahl2;

        document.getElementById("operator").innerHTML = "x";


    }

## Überprüfung der Eingabe

* Zuerst wird der eingegebene Wert als Number in einer Variable gespeichert.

`input = Number(eingabe.value);`

* Danach wird geschaut ob der Wert mit dem bevor berechneten Ergebnis übereinstimmt:

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
Danach wird das Feedback ausgegeben, alle Zahlen, der Operator, das Gleichzeichen und die Eingabe inklusive Wert entfernt bzw unsichtbar gemacht.
