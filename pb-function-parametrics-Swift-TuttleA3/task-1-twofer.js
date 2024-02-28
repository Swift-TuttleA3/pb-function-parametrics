const twofer = who => {      
  let name = who || "you";  
  return `Two for me and one for ${name}`;
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"

  /*
  eine längere aber leichter lesbare Variante:
  
  if (who === undefined) {
     name = "you";
   } else {
     name = who;
   }
  
   Nachtrag zur Lösung:
   Das ODER || nach der Deklaration von who ist ein kurzer Weg um zu schauen, 
   ob who einen wahren Wert hat. Wenn JA, wird dieser verwendet, andernfalls "you"
   nicht wahre Werte sind: undefined, null, 0, false, NaN und ""
   Ganze Werte wären z.Bsp Strings, Zahlen, true, Objekte, Arrays und Funktionen.
   Das kann wahrscheinlich sehr schnell sehr verwurschtelt werden wenn ich mehrere Funktionen, Objekte und was
   sonst noch gleichzeitig übergeben muss.

   
   WICHTIG: Niemand, der True heißt, darf jemals seinen Namen eingeben :)))
            Das ist ein extrem schlaffer Witz aber in javascript lustigerweise wahr...
            weil true ein wahrer Wert ist und deshalb auch als Name verwendet werden kann...
            

   Gedankenspiel:
   Also mal ein hypothetisches Beispiel für eine komplexe Funktion, die mit allen möglichen Werten und jeder
   denkbaren Anzahl umgehen muss. Dabei nimmt sie jeden erdenklichen Wert entgegen, sortiert ihn nach seinem Typ, 
   erfasst die Anzahl, den Inhalt und den Index und gibt das Ergebnis als Konsolenausgabe zurück.:
  
   function complexFunction(...args) {
      let result = [];
      for (let i = 0; i < args.length; i++) {
        let type = typeof args[i];
        let value = args[i];
        let index = i;
        let length = args.length;
        result.push({type, value, index, length});
      }
      return result;
    }
  
    VARIANTE(von KI erstellt) für mehrdimensionale Arrays und komplexe Objekte:

    function complexFunction(...args) {
      let result = [];
      for (let i = 0; i < args.length; i++) {
        let type = typeof args[i];
        let value = args[i];
        let index = i;
        let length = args.length;
        if (type === "object") {
          value = JSON.stringify(value);
        }
        result.push({type, value, index, length});
      }
      return result;
    }

UND DAS WÄRE DANN DIE AUSGABE:
      console.log(complexFunction(1, 2, 3, "Hallo", true, false, null, undefined, NaN, [], {}, function(){}));
      // -> [ { type: 'number', value: 1, index: 0, length: 11 },
      //      { type: 'number', value: 2, index: 1, length: 11 },...
      ...
      ...


NACHTRAG ZUM NACHTRAG:

    In Zeile 57 wird die Länge des gesamten übergebenen Arrays erfasst aber das 
    war nicht meine Intention.
    Wenn ich die Länge der einzelnen Argumente ermitteln will, dann muss ich das
    in der Schleife machen. Verlass dich deshalb niemals alleine auf die KI, 
    so hilfreich das auch sein mag denn dafür ist alleine schon die Syntax menschlichen
    Denkens auf sehr vielen Ebenen zu komplex und die Deutung einer Anweisung oder eines Befehls 
    ist wie der Name schon sagt, nur eine Interpretation meiner Eingaben, abgeglichen und vermischt mit 
    unzähligen Milliarden Zeilen gecrawlten Code. 
    Ich muss also wissen was und vor allem auch, mit welchen Mitteln, mein Ziel oder Vorgabe 
    zu erreichen ist. Auch Erklärungen der KI IMMER über OFFIZIELLE QUELLEN abgleichen! 

    Zwischenfazit: Ein Werkzeug, dass am besten nicht griffbereit auf dem
    Tisch liegen sollte. 
    Nach meinem Empfinden, nimmt das Hirn üblicherweise ein gewisses
    Mass an Faulheit allzu gerne an und solange ich, im übertragenen Sinne, nicht weiß,
    wie man eine Schraube per Hand eindreht, sollte der Akkuschrauber erstmal
    weit weg sein:))))))))))

                                                                                 REGISTRIEREN UND ERSTMAL IN DEN HINTERKOPF!

   NÜTZLICH, um sicherstellen, dass die Funktion auch dann fehlerfrei
   arbeitet wenn die Art und Menge der übergebenen Werte nicht bekannt ist.
   */