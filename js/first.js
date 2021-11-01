/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/


function brutto(tomb) {

    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    var ossz = tomb.map(element => element * 1.27).reduce(reducer);

    return Math.floor(ossz);
}


//