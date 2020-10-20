let winkelwagen = [];
let producten = [
    ["Broek"] = [kleur = "geel", maat = "m", voorraad = 5],
    ["Shoenen"] = [kleur = "bruin", maat = "1,42", voorraad = 10],
    ["Shirt"] = [kleur = "groen", maat = "s", voorraad = 2],
    ["Pet"] = [kleur = "zwart", maat = "x", voorraad = 6],
];

function voegProduct(item) {
    if (producten.includes(item)) {
        winkelwagen.push(producten[item]);
    }   
}

function getAantalWinkelmandje() {
    console.log(winkelwagen.length);
    return winkelwagen.length
}

function getVoorraad(item) {
    if (producten.includes(item)) {
        return producten[item].voorraad;
    }   
}

function getKleurMaat(item) {
    if (producten.includes(item)) {
        console.log(producten[item].kleur);
        console.log(producten[item].maat);
    }
}

