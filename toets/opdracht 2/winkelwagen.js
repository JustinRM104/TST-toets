let winkelwagen = [];
let producten = [
    ["Broek"] = [kleur = "geel", maat = "m", voorraad = 5],
];



function getKleurMaat(item) {
    if (producten.includes(item)) {
        console.log(producten[item].kleur);
        console.log(producten[item].maat);
    }
}

