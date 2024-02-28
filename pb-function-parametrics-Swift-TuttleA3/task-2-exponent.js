const exponent = (num, exp = 2) => {
  let result = num ** exp;
  return result;
};

console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9

/*
const exponent = (num, exp) => {
  let result = 1; 
    for (let i = 0; i < exp; i++) {
    result *= num;
  }
  return result;
};
console.log(exponent(3, 3)); // -> 27
console.log(exponent(3)); // -> 9
*/

// Das war knackiger als gedacht...
// WICHTIG: Nach der Vorgabe wird die Variable mit dem Wert 0 initialisiert,
// Ansonsten wird das Ergebnis IMMER 0, weil 0 * irgendwas = 0. Das ist der Grund für die 1...
// aber eigentlich soll das das Ergebnis gleich
// num hoch exp sein. Aber warum übergebe ich nicht direkt den Inhalt beider Parameter
// an die Funktion? Also Initialisierung sparen und die Funktion
// kann dann auch negative Eingaben verarbeiten.
// Das sähe so aus:
// const exponent = (num, exp) => {
//   return num ** exp;
// };
// Und wenn ich nur einen Parameter übergebe, dann wird der Exponent automatisch hoch
// 2 bzw mit sich selber mal genommen. Das sähe so aus:
// const exponent = (num, exp = 2) => {
//   return num ** exp;
// };
// UND LETZTERES MUSSTE ICH GOOGELN(speziell die Möglichkeit, dass
// bei der Schreibweise (num, exp = 2) der zweite Parameter automatisch
// auf 2 gesetzt wird, wenn ich nur einer im Karton ist.
/*
Und noch dafür sorgen, dass die globalen Variablen nicht verändert werden:
const exponent = (num, exp) => {
  let result = 1; 
  for (let i = 0; i < exp; i++) {
    result *= num;
  }
  return result;
};

So...Und jetzt zum Vorschlag der KI, reduce() und Math.pow() zu verwenden. Der Hintergrund ist, dass
die Funktion exponent() auch für negative Exponenten funktionieren soll. Das ist mit ** nicht möglich.

Aber mit Math.pow() und reduce(). Sie gehören zu Grupp der eingebauten Funktionen wie auch Math.floor() oder typeof(). 
Math.pow() nimmt ZWEI parameter entgegen und potenziert das erste mit dem zweiten. Das Ergebnis ist eine Gleitkommazahl, 
die ich dann mit Math.floor(), Math.ceil() oder Math.round() in eine ganze Zahl umwandeln kann.

reduce() ist eine Funktion, die ein Array in ein einzelnes Ergebnis umwandelt. Sie nimmt zwei Parameter entgegen,
eine Funktion und einen Startwert.

Auf deusch und für ein besserers Verständnis folgt jetzt eine Erklärung von MDN, formuliert als Fantasyabenteuer und erstellt
von der KI: 

Natürlich, ich verstehe. Lass uns die magische Welt der Mathematik in den Alltag übersetzen! Keine Märchen, nur praktische Beispiele, die du sofort anwenden kannst. 🌟

---

**1. Math.pow() – Der Superheld der Potenzen**

Stell dir vor, du bist ein Kuchenbäcker. Du hast eine geheime Zutat: **Zucker**. Aber nicht irgendeinen Zucker – nein, das ist **Zauberzucker**! Dieser Zauberzucker kann sich vermehren, wenn du ihn mit sich selbst mischst.

Jetzt kommt Math.pow() ins Spiel. Das ist wie ein magischer Ofen, der den Zauberzucker potenziert. Du gibst ihm zwei Zahlen: den Zauberzucker und eine geheime Zahl, die wir den **Exponenten** nennen. Der Exponent sagt dem Ofen, wie oft er den Zauberzucker mit sich selbst vermehren soll.

Beispiel:

- Du hast 2 Zauberzucker (Zahl 2).
- Der Exponent ist 3.
- Math.pow(2, 3) bedeutet: Vermehre den Zauberzucker 3-mal mit sich selbst.

Der Ofen brummt und zaubert: 2 * 2 * 2 = 8 Zauberzucker! Das ist das Ergebnis.

Warum ist das nützlich im Alltag? Denk an Zinsen auf deinem Sparkonto. Wenn du 100 Euro hast und sie mit 5% Zinsen pro Jahr vermehrst, ist das wie Math.pow(1.05, Jahre). Die Jahre sind der Exponent. So wächst dein Geld wie Zauberzucker im Ofen!

**2. reduce() – Der Schatzsucher im Supermarkt**

Stell dir vor, du gehst einkaufen. Dein Einkaufszettel ist ein geheimes Array mit Preisen für Obst: Äpfel, Bananen, Orangen. Du möchtest den Gesamtpreis wissen.

Hier kommt reduce() ins Spiel. Das ist wie ein magischer Einkaufswagen. Du schiebst die Preise hinein und sagst: "Lieber Einkaufswagen, addiere alle Preise zusammen!"

Beispiel:

- Äpfel kosten 2 Euro.
- Bananen kosten 1 Euro.
- Orangen kosten 3 Euro.

Jetzt nimmst du reduce() und gibst ihm die Preise:

```javascript
const obstPreise = [2, 1, 3];
const gesamtPreis = obstPreise.reduce((akkumulator, preis) => akkumulator + preis, 0);
```

Der Einkaufswagen summiert die Preise: 2 + 1 + 3 = 6 Euro. Das ist der Gesamtpreis!

Warum ist das nützlich im Alltag? Denk an Rechnungen, Trinkgeld teilen oder Noten im Zeugnis. Alles, wo du viele Zahlen zusammenzählst, ist wie ein magischer Einkaufswagen mit reduce().

Und so, liebe Freunde, haben wir die Mathematik aus dem Märchenland geholt und in unseren Alltag gebracht. Zauberzucker und Einkaufswagen – das sind unsere Helden! 🌠✨

Diese untergeordnete Funktion nimmt zwei Parameter entgegen, den Akkumulator und den Wert.
Der Akkumulator ist das Ergebnis der vorherigen Berechnung und der Wert ist das aktuelle Element des Arrays.

Also noch mal in langsam für mich zum verstehen:

  acc ist das Ergebnis aus acc * val und val ist das aktuelle Element des Arrays.

const exponent = (num, exp) => {
  return Array(exp).fill(num).reduce((acc, val) => acc * val, 1);
}

Als kleine Vorschau nehme ich diese Funktion jetzt auseinander und beschreibe den Ablauf in Pseudocode:

1. Die Funktion exponent() nimmt zwei Parameter entgegen, num und exp.        -->const exponent = (num, exp) => {
2. In der Funktion wird ein Array erstellt, das aus exp vielen num besteht indem 
3. Das Array wird mit fill() gefüllt.                                         
4. Das Array wird mit reduce() bearbeitet.
5. In reduce() wird das Array in ein einzelnes Ergebnis umgewandelt.
6. Das Ergebnis wird zurückgegeben.

Ein einfacheres Beispiel für die Anwendung von reduce() wäre:

const sum = (arr) => {
  return arr.reduce((acc, val) => acc + val, 0);  -->auf deutsch: gib das Ergebnis folgender Rechnung zurück: acc + val
}


console.log(sum([1, 2, 3, 4, 5])); // -> 15



*/
