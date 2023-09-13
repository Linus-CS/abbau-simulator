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

let rezept_gold_axt = ["gold", "holz", "", "gold", "holz", "", "", "holz", ""];
function ereignis_gold_axt() {
    holz_faktor = 20;
}

let rezept_einfaches_schwert = ["", "stein", "", "", "gold", "", "", "holz", ""]
function ereignis_einfaches_schwert() { }

items["holzSpitzhacke"] = [rezept_holz_spitzhacke, "holzspitzhacke.png", ereignis_holz_spitzhacke];
items["steinSpitzhacke"] = [rezept_stein_spitzhacke, "steinspitzhacke.png", ereignis_stein_spitzhacke];
items["goldAxt"] = [rezept_gold_axt, "goldAxt.png", ereignis_gold_axt];
items["einfachesSchwert"] = [rezept_einfaches_schwert, "einfachesSchwert.png", ereignis_einfaches_schwert];
