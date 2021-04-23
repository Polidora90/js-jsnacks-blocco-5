/* [Snack 2]
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine */

var zucchini = [
    {
        variety: "Nera di Milano",
        weight_g: 220,
        length_mm: 162
    },
    {
        variety: "Nera di Milano",
        weight_g: 242,
        length_mm: 181
    },
    {
        variety: "Nera di Milano",
        weight_g: 187,
        length_mm: 142
    },
    {
        variety: "Nera di Milano",
        weight_g: 175,
        length_mm: 136
    },
    {
        variety: "Lunga fiorentina",
        weight_g: 310,
        length_mm: 206
    },
    {
        variety: "Lunga fiorentina",
        weight_g: 297,
        length_mm: 196
    },
    {
        variety: "Bianca triestina",
        weight_g: 204,
        length_mm: 154
    },
    {
        variety: "Bianca triestina",
        weight_g: 324,
        length_mm: 237
    },
    {
        variety: "Bianca triestina",
        weight_g: 289,
        length_mm: 214
    },
    {
        variety: "Bianca triestina",
        weight_g: 253,
        length_mm: 150
    }
];

//divido le zucchine in base alla loro lunghezza
var longZucchini = [];
var shortZucchini = [];
var longZucchiniWeight = 0;
var longZucchiniWeightKg = 0;
var shortZucchiniWeight = 0;
var shortZucchiniWeightKg = 0;

for (var i = 0; i < zucchini.length; i++) {

    if (zucchini[i].length_mm < 150) {
        shortZucchini.push(zucchini[i]);
    } else {
        longZucchini.push(zucchini[i])
    }
}

console.log(longZucchini)
console.log(shortZucchini)

//stampo separatamente quanto pesano i due gruppi di zucchine
for (var i = 0; i < longZucchini.length; i++) {
    longZucchiniWeight += longZucchini[i].weight_g;
}

longZucchiniWeightKg = longZucchiniWeight / 1000;

console.log("Le zucchine lunghe pesano in totale " + longZucchiniWeightKg + " Kg.")

for (var i = 0; i < shortZucchini.length; i++) {
    shortZucchiniWeight += shortZucchini[i].weight_g;
}

shortZucchiniWeightKg = shortZucchiniWeight / 1000;

console.log("Le zucchine corte pesano in totale " + shortZucchiniWeightKg + " Kg.")

