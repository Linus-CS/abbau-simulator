let kampfarena = document.getElementById("kampfarena")
let tor_element = document.getElementById("tor");
let pfeil_element = document.getElementById("pfeilArena");
let zombie_container = document.getElementById("container-zombie");

function geheZuKampfarena() {
    if (inventar.includes("einfachesSchwert")) {
        hauptanzeige.style.display = "none";
        kampfarena.style.display = "flex";
    }
}

function geheZuHauptanzeige() {
    hauptanzeige.style.display = "flex";
    kampfarena.style.display = "none";
}

function zombieHinzufügen() {
    let img = document.createElement("img");
    img.style.width = "100px";
    img.src = "zombie1.png";
    img.classList.add("monster");
    zombie_container.appendChild(img);

    let zombie = {
        leben: 5,
        fortschritt: 0,
        staerke: 0,
        geschwindigkeit: 1,
        bild: img,
    };


    function lebenAbziehen() {
        zombie.leben -= 1;
        if (zombie.leben == 0) {
            zombie_container.removeChild(img);
            monster_liste.splice(monster_liste.indexOf(zombie), 1);
        }
    }

    img.onclick = lebenAbziehen;

    monster_liste.push(zombie);
}

let monster_liste = [];

function laufen() {
    for (let i = 0; i < monster_liste.length; i++) {
        monster_liste[i].fortschritt += monster_liste[i].geschwindigkeit;
        monster_liste[i].bild.style.left = monster_liste[i].fortschritt + "px";
    }
}

setInterval(laufen, 40);
setInterval(zombieHinzufügen, 4000);

tor_element.onclick = geheZuKampfarena;
pfeil_element.onclick = geheZuHauptanzeige;