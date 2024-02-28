const howManyArgs = (...args) => {
  //das mit den drei Punkten ist schon ein wenig Teufelswerk...
  let result = args.length;
  return result;
};

console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1

/*
const howManyArgs = () =>  {
    let result = arguments.length;
    return result;
};
console.log(howManyArgs()); // -> 0
console.log(howManyArgs(1, false, "hello")); // -> 3
console.log(howManyArgs("better")); // -> 1


Dafür habe ich den CoPiloten als stummen aber enthusiastischen
Berater gebraucht...

    // Ändern Sie die Definition der Funktion
    const howManyArgs = (...args) =>  {
        let result = args.length;
        return result;
    };

    // Verwenden Sie die Funktion in Ihrem Code
    console.log(howManyArgs()); // -> 0
    console.log(howManyArgs(1, false, "hello")); // -> 3
    console.log(howManyArgs("better")); // -> 1

Der Parameter ...args ist ein Array, das alle Argumente enthält, die an die Funktion übergeben wurden.
args.length gibt die Anzahl der Argumente zurück, die an die Funktion übergeben wurden.
Die drei Punkte vor args haben in Javascrpit folgende Bedeutung:

    - Sie können verwendet werden, um die Argumente einer Funktion in ein Array zu packen.
    - Dafür sind die drei Punkte vor dem Namen des Parameters notwendig.
    - Der Name selber ist wurscht, aber die drei Punkte müssen sein.

Eine Funktion, die so definiert ist, kann eine beliebige Anzahl von Argumenten verarbeiten.
Mit dem "dreiPunkteSpezialTodesGriff" kann nicht nur die Anzahl der Argumente auslesen,
sondern auch den Inhalt auslesen und verarbeiten. Das ist gängige Praxis
bei der Verwendung von Funktionen, denen eine variable Anzahl von Argumenten
übergeben werden soll. Normalerweise wird ein array mit eckigem Klammeraffen
übergeben, aber mit dem "dreiPunkteSpezialTodesGriff" wird automatisch
ein Array aus den Argumenten gebastelt. 

FRAGEN: KAnn ich mit dieser Methode auch merhrdimensionale Arrays übergeben?
        Und ist das gängige Praxis? 
        Oder gibt es da eine bessere Methode?
        Können das alle Browser verarbeiten?

ANTWORT:

*/
