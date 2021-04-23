/* [Snack 1]
Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza. Calcola quanto pesano tutte le zucchine. */


//creo un array di 10 oggetti "zucchine"
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

//calcolo il peso delle zucchine
var totalWeight = 0;

for (var i = 0; i < zucchini.length; i++) {
    totalWeight += zucchini[i].weight_g;
}

console.log("Il peso totale delle zucchine è di " + totalWeight + "g.");

var totalWeightKg = totalWeight / 1000;

console.log("Lo dico anche in kg: sono esattamente " + totalWeightKg + ".");
