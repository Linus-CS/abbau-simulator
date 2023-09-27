let hauptanzeige = document.getElementById("hauptanzeige")

// Wir wählen das baum bild aus, um später zu programmieren, dass wir holz dazubekommen sobald wir auf das Bild klicken.
let baum_bild = document.getElementById("baum");

// Damit wir Stein bekommen, sobald auf das Steinbild geklickt wird, müssen wir zuerst das stein Bild auswählen.
let stein_bild = document.getElementById("stein");

// Also sobald wir eine Steinspitzhacke haben, können wir gold sammeln, dafür brauchen wir das gold Bild um zu programmiern: Wenn das Gold Bild
// angeklickt wird, bekommen wir gold dazu.
let gold_bild = document.getElementById("gold");

// Der Text wo hingeschrieben wird wie viel Holz wir haben, wird hier ersteinmal ausgewählt, damit wir da reinschreiben können wie viel Holz wir haben.
let holz_text = document.getElementById("holzText");

let stein_text = document.getElementById("steinText");
let gold_text = document.getElementById("goldText");
let item_bild = document.getElementById("item");

let slots = document.getElementsByClassName("slot");

let rezept_textfeld = document.getElementById("rezept");
let bauen_knopf = document.getElementById("bauBtn");

let holz = 0;
let stein = 0;
let gold = 0;
let hat_holzSpitzhacke = false;
let hat_steinSpitzhacke = false;

let ausgewählterRohstoff = "";


// Hier wird die holzSammeln funktion dem baum Bild hinzugefügt, sodass diese jedes mal aufgerufen wird sobald man das Baum Bild anklickt.
baum_bild.onclick = holzSammeln;

stein_bild.onclick = steinSammeln;

gold_bild.onclick = goldSammeln;

// Eine Variable die definiert wie viel holz wir pro klick dazubekommen sollen.
let holz_faktor = 10;

// Eine Funktion die aufgerufen werden kann um holz hinzuzufügen
function holzSammeln() {
  // Fügt soviel holz zu der Variable holz hinzu wie in der Variable holz_faktor steht.
  holz += holz_faktor;

  // Zeigt auf der Seite an, wie viel Holz in der Variable holz steckt.
  holz_text.textContent = "Holz: " + holz;
}

function steinSammeln() {
  if (inventar.includes("holzSpitzhacke")) {
    stein += 5;
  }
  stein_text.textContent = "Stein: " + stein;
}

function goldSammeln() {
  if (inventar.includes("steinSpitzhacke")) {
    gold += 5;
  }
  gold_text.textContent = "Gold: " + gold;
}

function holzAuswählen() {
  ausgewählterRohstoff = "holz";
  holz_text.style.color = "green";
  stein_text.style.color = "white";
  gold_text.style.color = "white";
}

function steinAuswählen() {
  ausgewählterRohstoff = "stein";
  holz_text.style.color = "white";
  stein_text.style.color = "green";
  gold_text.style.color = "white";
}

function goldAuswählen() {
  ausgewählterRohstoff = "gold";
  holz_text.style.color = "white";
  stein_text.style.color = "white";
  gold_text.style.color = "green";
}

holz_text.onclick = holzAuswählen;
stein_text.onclick = steinAuswählen;
gold_text.onclick = goldAuswählen;

let craftingTable = ["", "", "", "", "", "", "", "", ""];

function holzReintuen(i) {
  if (ausgewählterRohstoff == "holz" && holz >= 100) {
    holz -= 100;
    holz_text.textContent = "Holz: " + holz;

    slots[i].children[0].src = "holz.png";
    slots[i].children[0].style.display = "block";
    craftingTable[i] = "holz";
  }
}

function steinReintuen(i) {
  if (ausgewählterRohstoff == "stein" && stein >= 100) {
    stein -= 100;
    stein_text.textContent = "Stein: " + stein;

    slots[i].children[0].src = "stein.png";
    slots[i].children[0].style.display = "block";
    craftingTable[i] = "stein";
  }
}

function goldReintuen(i) {
  if (ausgewählterRohstoff == "gold" && gold >= 100) {
    gold -= 100;
    gold_text.textContent = "Gold: " + gold;

    slots[i].children[0].src = "goldErz.png";
    slots[i].children[0].style.display = "block";
    craftingTable[i] = "gold";
  }
}

function reintuen(i) {
  if (craftingTable[i] != "") return;
  holzReintuen(i);
  steinReintuen(i);
  goldReintuen(i);
}

function holzRaustuen(i) {
  if (craftingTable[i] == "holz") {
    holz += 100;
    holz_text.textContent = "Holz: " + holz;

    slots[i].children[0].src = "";
    slots[i].children[0].style.display = "none";
    craftingTable[i] = "";
  }
}

function steinRaustuen(i) {
  if (craftingTable[i] == "stein") {
    stein += 100;
    stein_text.textContent = "Stein: " + stein;

    slots[i].children[0].src = "";
    slots[i].children[0].style.display = "none";
    craftingTable[i] = "";
  }
}

function goldRaustuen(i) {
  if (craftingTable[i] == "gold") {
    gold += 100;
    gold_text.textContent = "Gold: " + gold;

    slots[i].children[0].src = "";
    slots[i].children[0].style.display = "none";
    craftingTable[i] = "";
  }
}

function raustuen(i) {
  holzRaustuen(i);
  steinRaustuen(i);
  goldRaustuen(i);
}

for (let i = 0; i < 9; i++) {
  slots[i].onclick = () => reintuen(i);
  slots[i].ondblclick = () => raustuen(i);
}


function craftingTableLeeren() {
  for (let i = 0; i < 9; i++) {
    slots[i].children[0].src = "";
    slots[i].children[0].style.display = "none";
    craftingTable[i] = "";
  }
}

function teste_rezept(name, rezept, bild, erfolgsFunktion) {
  if (
    craftingTable[0] == rezept[0] &&
    craftingTable[1] == rezept[1] &&
    craftingTable[2] == rezept[2] &&
    craftingTable[3] == rezept[3] &&
    craftingTable[4] == rezept[4] &&
    craftingTable[5] == rezept[5] &&
    craftingTable[6] == rezept[6] &&
    craftingTable[7] == rezept[7] &&
    craftingTable[8] == rezept[8]
  ) {
    erfolgsFunktion();
    inventar.push(name);
    craftingTableLeeren();
    item_bild.src = bild;
  }
}

function bauen() {
  for (const [name, item] of Object.entries(items)) {
    teste_rezept(name, item[0], item[1], item[2]);
  }
}

bauen_knopf.onclick = bauen;
