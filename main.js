let hauptanzeige = document.getElementById("hauptanzeige")
let baum_bild = document.getElementById("baum");
let stein_bild = document.getElementById("stein");
let gold_bild = document.getElementById("gold");
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

let holz_faktor = 10;
function holzSammeln() {
  holz += holz_faktor;
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

baum_bild.onclick = holzSammeln;
stein_bild.onclick = steinSammeln;
gold_bild.onclick = goldSammeln;
bauen_knopf.onclick = bauen;
