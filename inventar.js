let rucksack_element = document.getElementById("rucksack");
let inventar_element = document.getElementById("inventar");
let gegenstaende_element = document.getElementById("gegenstandBereich");
let close_element = document.getElementById("close");

function zeigeInventar() {
    inventar_element.style.display = "block";
    gegenstaende_element.innerHTML = "";
    for (const name of inventar) {
        let img = document.createElement("img");
        img.src = items[name][1];
        img.style.width = "100px";
        img.style.height = "100px";
        gegenstaende_element.appendChild(img);
    }
}

function schliesseInventar() {
    inventar_element.style.display = "none";
}

rucksack_element.onclick = zeigeInventar;
close_element.onclick = schliesseInventar;