let kampfarena = document.getElementById("kampfarena")
let tor_element = document.getElementById("tor");

function geheZuKampfarena() {
    if (inventar.includes("einfachesSchwert")) {
        hauptanzeige.style.display = "none";
        kampfarena.style.display = "flex";
    }
}


tor_element.onclick = geheZuKampfarena;