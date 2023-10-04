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
    let fortschritt = 0;

    function laufen() {
        fortschritt += 1;
        img.style.left = fortschritt + "px";
    }

    // setInterval(laufen, 40);

    zombie_container.appendChild(img);
}

zombieHinzufügen();

tor_element.onclick = geheZuKampfarena;
pfeil_element.onclick = geheZuHauptanzeige;