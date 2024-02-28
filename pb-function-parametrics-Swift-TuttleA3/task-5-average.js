const average = (...average) => {
  let result = 0;
  for (let i = 0; i < average.length; i++) {
    result += average[i]; //einfache Summenschleife
  }
  return result / average.length;
};

console.log(average(0)); // -> 0
console.log(average(1, 2)); // -> 1.5
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14

/*
für den Druchschnitt einfach nur einmal 
das Ergebnis durch die Anzahl der Argumente teilen und
per return zurückgeben
MERKEN: Außerhalb der Schleife!!! Und die Variable, in die das Ergebnis geschrieben wird
immer vor der Schleife mit 0 initialisieren, sonst könnte es zu lustigen Seiteneffekten kommen...
weil sie "strenggenommen" bei let result; ja undefined wäre(typescript?!?!?)
*/