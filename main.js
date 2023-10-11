let hauptanzeige = document.getElementById("hauptanzeige")

/* Wir wählen das baum bild aus, um später zu programmieren, dass wir holz dazubekommen sobald wir auf das Bild klicken. */
let baum_bild = document.getElementById("baum");

/* Damit wir Stein bekommen, sobald auf das Steinbild geklickt wird, müssen wir zuerst das stein Bild auswählen. */
let stein_bild = document.getElementById("stein");

/* Also sobald wir eine Steinspitzhacke haben, können wir gold sammeln, dafür brauchen wir das gold Bild um zu programmiern: Wenn das Gold Bild
angeklickt wird, bekommen wir gold dazu. */
let gold_bild = document.getElementById("gold");

/* Der Text wo hingeschrieben wird wie viel Holz wir haben, wird hier ersteinmal ausgewählt, damit wir da reinschreiben können wie viel Holz wir haben. */
let holz_text = document.getElementById("holzText");

/* Das ist eine Variable welche den text auswählt wo reingeschrieben wird wie viel Stein wir haben. */
let stein_text = document.getElementById("steinText");

/* Das ist eine Variable welche den text auswählt wo reingeschrieben wird wie viel Stein wir haben. */
let gold_text = document.getElementById("goldText");


let item_bild = document.getElementById("item");
let slots = document.getElementsByClassName("slot");

let rezept_textfeld = document.getElementById("rezept");
let bauen_knopf = document.getElementById("bauBtn");

/* Das ist die Variable in der wir abspeichern wie viel holz wir haben */
let holz = 0;

/* Hier wird eine neue Variale angelegt die stein heißt und in der wir abspeichern wie viel Stein wir haben */
let stein = 0;

/* Die Varibale in der Zeile wird genutzt um abzuspeichern wie viel gold wir haben. */
let gold = 0;

let hat_holzSpitzhacke = false;
let hat_steinSpitzhacke = false;

// Hier wird die holzSammeln funktion dem baum Bild hinzugefügt, sodass diese jedes mal aufgerufen wird sobald man das Baum Bild anklickt.
baum_bild.onclick = holzSammeln;

// Wir geben mit dieser Zeile Code an, dass die Funktio steinSammeln aufgerufen wird, sobald wir auf das sein Bild klicken.
stein_bild.onclick = steinSammeln;

gold_bild.onclick = goldSammeln;

/* Eine Variable die definiert wie viel holz wir pro klick dazubekommen sollen. */
let holz_faktor = 10;

/** Eine Funktion die aufgerufen werden kann um holz hinzuzufügen */
function holzSammeln() {
  // Fügt soviel holz zu der Variable holz hinzu wie in der Variable holz_faktor steht.
  holz += holz_faktor;

  // Zeigt auf der Seite an, wie viel Holz in der Variable holz steckt.
  holz_text.textContent = "Holz: " + holz;
}

/* Diese Zeile erstellt uns eine neue Variable, welche kontrolliert wie viel stein wir mit einem Klick auf das Stein Bild bekommen */
let stein_faktor = 5;

/** Diese Funktion fügt und 5 stein hinzu, aber nur wenn wir eine Holz Spitzhacke haben. Außerdem zeigt die Funktion an wie viel Stein wir haben. */
function steinSammeln() {
  // Diese Zeile code sorgt dafür, dass die Zeile darunter nur dann ausgeführt wird, sobald wir eine holzSpitzhacke im Inventar haben.
  if (inventar.includes("holzSpitzhacke")) {
    // Fügt uns 5 stein hinzu
    stein += stein_faktor;
  }
  // Schreibt in das h2 wie viel wie viel Stein wir haben.
  stein_text.textContent = "Stein: " + stein;
}

/* In dieser Zeile wird eine Variable angelegt mit in der gespeichert wird wie viel gold wir mit einem klick bekommen. */
let gold_faktor = 3;

/** Allgemein macht diese Funktion das wir Gold bekommen, wenn wir eine Stein Spitzhacke haben. */
function goldSammeln() {
  // Die Zeile mit dem if am Anfang sorgt dafür, dass wir die Zeile darunter (gold += 3) nur dann ausführen, wenn wir eine Stein Sptizhacke haben.
  if (inventar.includes("steinSpitzhacke")) {
    // Diese Zeil code fügt uns 3 gold hinzu.
    gold += gold_faktor;
  }
  // Diese Zeile code fügt den Text auf der linken Seite hinzu der uns anzeigt wie viel Gold wir haben.
  gold_text.textContent = "Gold: " + gold;
}

let ausgewählterRohstoff = "";

function holzAuswählen() {
  // Diese Zeile schreibt holz in die Variable ausgewählterRohstoff, damit wir später im crafting table holz reintuen sobald holz ausgewählt ist.
  ausgewählterRohstoff = "holz";

  // Diese Zeile macht den Text (Holz: 0) grün.
  holz_text.style.color = "green";

  // In dieser Zeile wird der Text welcher anzeigt wie viel stein wir haben weiß gemacht. 
  // Das machen wir falls vorher Stein ausgewählt wurde damit nun der Stein text nicht mehr grün sonder weiß wird
  stein_text.style.color = "white";

  // Hier wird der text der anzeigt wie viel Gold wir haben weiß gemacht, falls wir vorher Gold ausgewählt hatten und deshalb der Text grün wahr.
  gold_text.style.color = "white";
}


function steinAuswählen() {
  // Diese Zeile schreibt den Text stein in die Variable ausgewählterRohstoff, damit wir später im crafting table stein reintuen sobald eben auch Stein ausgewählt ist.
  ausgewählterRohstoff = "stein";


  // In dieser Zeile wird der Text welcher anzeigt wie viel holz wir haben weiß gemacht. 
  // Das machen wir falls vorher Holz ausgewählt wurde damit nun der Holz text nicht mehr grün sonder weiß wird
  holz_text.style.color = "white";

  // Diese Zeile macht den Text (Stein: 0) grün.
  stein_text.style.color = "green";

  // Hier wird der text der anzeigt wie viel Gold wir haben weiß gemacht, falls wir vorher Gold ausgewählt hatten und deshalb der Text grün wahr.
  gold_text.style.color = "white";
}

function goldAuswählen() {
  ausgewählterRohstoff = "gold";


  // Hier wird der text der anzeigt wie viel Holz wir haben weiß gemacht, falls wir vorher Holz ausgewählt hatten und deshalb der Text grün wahr.
  holz_text.style.color = "white";

  // In dieser Zeile wird der Text welcher anzeigt wie viel stein wir haben weiß gemacht. 
  // Das machen wir falls vorher Stein ausgewählt wurde damit nun der Stein text nicht mehr grün sonder weiß wird
  stein_text.style.color = "white";

  // Diese Zeile macht den Text (Gold: 0) grün.
  gold_text.style.color = "green";
}

// Diese Zeile sorgt dafür das der code in der Funktion holzAuswählen aufgerufen wird sobald auf den Text, der anzeigt wie viel Holz wir haben (Holz: 0), geklickt wird.
holz_text.onclick = holzAuswählen;

// Hier mit dieser Zeile sorgen wir dafür, dass alle Zeilen in der Funktion steinAuswählen aufgerufen werden, wenn auf den Text "Stein: 0" geklickt wird.
stein_text.onclick = steinAuswählen;

// Hier mit dieser Zeile sorgen wir dafür, dass alle Zeilen in der Funktion goldAuswählen aufgerufen werden, wenn auf den Text "Gold: 0" geklickt wird.
gold_text.onclick = goldAuswählen;

let craftingTable = ["", "", "", "", "", "", "", "", ""];

// Das ist eine Schleife die 9 mal wiederholt wird
for (let i = 0; i < 9; i++) {
  // Das i beginnt bei 0 und mit jedem Schleifendurchlauf wird i um eins erhöht also 0, 1, 2, 3,..., 8 

  // Diese beiden Zeilen werden 9 mal ausgeführt
  slots[i].onclick = () => reintuen(i);     // Sorgt dafür das wenn man auf einen Slot im crafting table klickt, das man dann den Code in der Funktion reintuen aufruft
  slots[i].ondblclick = () => raustuen(i);  // Sorgt dafür das wenn man auf einen Slot im crafting table doppelklickt, das man dann den Code in der Funktion raustuen aufruft
}

function reintuen(i) {
  if (craftingTable[i] == "") {
    holzReintuen(i);
    steinReintuen(i);
    goldReintuen(i);
  }
}

function raustuen(i) {
  holzRaustuen(i);
  steinRaustuen(i);
  goldRaustuen(i);
}


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



function craftingTableLeeren() {
  for (let i = 0; i < 9; i++) {
    slots[i].children[0].src = "";
    slots[i].children[0].style.display = "none";
    craftingTable[i] = "";
  }
}

function testeRezept(name, rezept, bild, erfolgsFunktion) {
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
  for (const [name, item] of Object.entries(rezepte)) {
    testeRezept(name, item[0], item[1], item[2]);
  }
}

bauen_knopf.onclick = bauen;
