const sum = (...sum) => {
  let result = 0;
  for (let i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  return result;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70

// dreipunktetodesgriff! (...sum) ist auch diesmal das Sammelbecken für alle Argumente
// MERKEN: Außerhalb der Schleife initialisieren!!!
