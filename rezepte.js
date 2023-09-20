let rezepte_element = document.getElementById("rezepte");
let buch_element = document.getElementById("buch");
let close_rezepte_element = document.getElementById("closeRezepte");
let rezeptebereich_element = document.getElementById("rezepteBereich")

function zeigeRezepte() {
    rezepte_element.style.display = "block";
    for (const [name, item] of Object.entries(items)) {

        let div1 = document.createElement("div");
        div1.classList.add("rezept");
        div1.style.marginBottom = "4rem";

        let div2 = document.createElement("div");
        div2.classList.add("craftingTable");
        div2.classList.add("rezeptTable");

        div1.appendChild(div2);

        for (const ressource of item[0]) {
            let img = document.createElement("img");
            if (ressource != "") {
                img.src = ressource + ".png";
            }
            img.style.width = "100px";
            div2.appendChild(img);
        }

        let img = document.createElement("img");
        img.src = item[1];
        img.style.width = "100px";
        img.style.marginLeft = "10rem";
        div1.appendChild(img);

        rezeptebereich_element.appendChild(div1);
    }
}

function schliesseRezepte() {
    rezepte_element.style.display = "none";
}

buch_element.onclick = zeigeRezepte;
close_rezepte_element.onclick = schliesseRezepte;

let items = {};
let inventar = [];

let rezept_holz_spitzhacke = ["holz", "holz", "holz", "", "holz", "", "", "holz", ""];
function ereignis_holz_spitzhacke() {
    stein_bild.style.opacity = "";
}

let rezept_stein_spitzhacke = ["stein", "stein", "stein", "", "holz", "", "", "holz", ""];
function ereignis_stein_spitzhacke() {
    gold_bild.style.opacity = "";
}

let rezept_gold_axt = ["gold", "holz", "gold", "gold", "holz", "", "", "holz", ""];
function ereignis_gold_axt() {
    holz_faktor = 20;
}

let rezept_einfaches_schwert = ["", "stein", "", "", "gold", "", "", "holz", ""]
function ereignis_einfaches_schwert() {
    tor_element.style.opacity = "";
}

items["holzSpitzhacke"] = [rezept_holz_spitzhacke, "holzspitzhacke.png", ereignis_holz_spitzhacke];
items["steinSpitzhacke"] = [rezept_stein_spitzhacke, "steinspitzhacke.png", ereignis_stein_spitzhacke];
items["goldAxt"] = [rezept_gold_axt, "goldAxt.png", ereignis_gold_axt];
items["einfachesSchwert"] = [rezept_einfaches_schwert, "einfachesSchwert.png", ereignis_einfaches_schwert];
