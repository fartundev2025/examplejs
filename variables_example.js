// Variables tusaale dheeraad ah

// 1. Isticmaalka var
var magaca = "Ahmed";
var da = 25;
var waaMuslim = true;

// Daabacida qiimaha variables-ka
console.log("Magaca: " + magac);
console.log("Da'da: " + da);
console.log("Muslim ma yahay?: " + waaMuslim);

// 2. Isticmaalka let (JavaScript casri ah)
let magaalada = "Muqdisho";
let wadanka = "Soomaaliya";
let dadka = 2000000;

// Daabacida magaalada iyo wadanka
console.log("Magaalada: " + magaalada);
console.log("Wadanka: " + wadanka);
console.log("Tirada dadka: " + dadka);

// 3. Isticmaalka const (qiimaha ma beddeli karo)
const SANADKII_DHALASHADA = 1998;
const LUUQADA = "Soomaali";

// Isku darka variables
let macluumaad = `${magac} wuxuu ku nool yahay ${magaalada}, ${wadanka}`;
console.log(macluumaad);

// 4. Numbers variables
let sicirka = 10.5;
let tirada = 100;
let wadarta = sicirka * tirada;

console.log("Wadarta: $" + wadarta);

// 5. Arrays tusaale
let magacyada = ["Ahmed", "Farah", "Maryam", "Hodan"];
let lambarada = [1, 2, 3, 4, 5];
let isku_dhafan = ["Xamdi", 20, true, "Hargeysa"];

// Daabacida arrays
console.log("Magacyada oo dhan:", magacyada);
console.log("Qofka koowaad:", magacyada[0]);
console.log("Qofka labaad:", magacyada[1]);

// Array methods
magacyada.push("Cabdi");  // Ku dar qof cusub
console.log("Kadib markaan ku darnay Cabdi:", magacyada);

// Loop ku samee array
console.log("Dhammaan magacyada:");
for (let i = 0; i < magacyada.length; i++) {
    console.log(`${i + 1}. ${magacyada[i]}`);
}

// Array of objects
let ardayda = [
    {magac: "Faadumo", fasalka: 12, celceliska: 85},
    {magac: "Xasan", fasalka: 11, celceliska: 90},
    {magac: "Caasha", fasalka: 12, celceliska: 95}
];

// Daabacida macluumaadka ardayda
console.log("Macluumaadka Ardayda:");
ardayda.forEach(arday => {
    console.log(`${arday.magac} wuxuu dhigtaa fasalka ${arday.fasalka}, celceliskiisuna waa ${arday.celceliska}`);
});

// 6. Objects tusaale
let qof = {
    magac: "Cabdiraxmaan",
    da: 30,
    magaalo: "Burco",
    waaMuslim: true,
    luuqadaha: ["Soomaali", "English", "Arabic"],
    xirfadaha: {
        primary: "Software Engineer",
        secondary: "Teacher"
    }
};

// Helitaanka qiimaha object
console.log("Magaca qofka:", qof.magac);
console.log("Magaaladda:", qof["magaalo"]);
console.log("Xirfadda ugu weyn:", qof.xirfadaha.primary);

// 7. Functions tusaale
// Function caadi ah
function isuGee(lambar1, lambar2) {
    return lambar1 + lambar2;
}

// Arrow function
const kuDhuf = (lambar1, lambar2) => lambar1 * lambar2;

// Function oo wax daabacda
function soodhawee(magac) {
    console.log(`Soo dhawoow ${magac}!`);
}

// Function oo object isticmaalaya
function macluumaadkaQofka(qof) {
    let faahfaahin = `
        Magaca: ${qof.magac}
        Da'da: ${qof.da}
        Magaalada: ${qof.magaalo}
        Xirfadaha: ${qof.xirfadaha.primary}, ${qof.xirfadaha.secondary}
    `;
    return faahfaahin;
}

// Functions isticmaalkooda
console.log("2 + 3 =", isuGee(2, 3));
console.log("4 * 5 =", kuDhuf(4, 5));
soodhawee(qof.magac);
console.log("Macluumaadka qofka:\n", macluumaadkaQofka(qof));

// Function oo array isticmaalaya
function celcelisBixiye(ardayda) {
    let wadarta = 0;
    ardayda.forEach(arday => {
        wadarta += arday.celceliska;
    });
    return wadarta / ardayda.length;
}

console.log("Celceliska guud ee ardayda:", celcelisBixiye(ardayda)); 