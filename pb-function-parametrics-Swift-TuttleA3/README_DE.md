# Parametrik

## Aufgaben

### Aufgabe 1 - twofer

Ergänze die Funktion in [`task-1-twofer.js`](./task-1-twofer.js) so, dass sie folgendes zurückgibt:

- `"Two for me and one for you"`: wenn keine Argumente übergeben werden
- `"Two for me and one for <name>"`: wenn ein Argument übergeben wird. "<name>" sollte durch das übergebene Argument ersetzt werden

Zum Beispiel:

```js
console.log(twofer("Fran")) // "Two for me and one for Fran"
console.log(twofer()) // "Two for me and one for you"
```
    
### Aufgabe 2 - Exponent 

Ergänze die Funktion in [`task-2-exponent.js`](./task-2-exponent.js) so, dass sie das Ergebnis einer Potenzierung abhängig von den übergebenen Argumenten zurückgibt.

- Wenn wir 2 Argumente übergeben, gibt sie das Ergebnis des ersten Arguments zur Potenz des zweiten zurück
- Wenn wir nur 1 Argument übergeben, sollte das zweite standardmäßig auf 2 gesetzt werden

Zum Beispiel:

```js
console.log(exponent(2, 4)); // 16
console.log(exponent(3, 3)); // 27
console.log(exponent(2, 3)); // 8 
console.log(exponent(3)); // 9
console.log(exponent(4)); // 16 
```

### Aufgabe 3 - howManyArgs 

Ergänze die Funktion in [`task-3-howManyArgs.js`](./task-3-howManyArgs.js).

Die Funktion sollte die Gesamtzahl der an sie übergebenen Argumente zurückgeben.

Zum Beispiel:
```js
console.log(howManyArgs()); // 0
console.log(howManyArgs(1, false, "hello")); // 3
console.log(howManyArgs("better")); // 1
```

### Aufgabe 4 - Summe 

Ergänze die Funktion in [`task-4-sum.js`](./task-4-sum.js).

Die Funktion akzeptiert eine beliebige Anzahl von Zahlen und gibt die Gesamtsumme zurück.

Zum Beispiel:

```js
console.log(sum(1)); // 1
console.log(sum(1, 15)); // 16
console.log(sum(25, 25, 20)); // 70
```

### Aufgabe 5 (BONUS) - Durchschnitt

Erstelle eine Funktion in [`task-5-average.js`](./task-5-average.js).

Die Funktion akzeptiert eine beliebige Anzahl von Zahlen und gibt ihren Durchschnittswert zurück.

Zum Beispiel:

```js
console.log(average(0)); // 0
console.log(average(1, 2)); // 1.5
console.log(average(1, 3, 6, 10)); // 5
console.log(average(12, 14, 16)); // 14
```

Der Durchschnittswert einer Zahlenmenge wird berechnet, indem man alle Zahlen zusammenzählt und das Ergebnis der Addition durch die Anzahl der Zahlen in der Menge teilt.

Zum Beispiel:
```
Um den Durchschnitt von 12, 14 und 16 zu berechnen

12 + 14 + 16 = 42
42 / 3 = 14
```