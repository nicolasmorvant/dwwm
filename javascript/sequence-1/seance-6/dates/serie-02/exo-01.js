/**
 * La fonction détermine le nom du mois révolutionnaire qui correspond a la date passée en parametre
 * @param {*} pDateDuJour 
 * @returns le nom du mois révolutionnaire qui correspond
 */
function retournerMoisRevolutionnaire(pDateDuJour) {
    let nomMois = "";
    let jourDate = pDateDuJour.getDate();
    let moisDate = pDateDuJour.getMonth()
    if ((moisDate == 8) && (jourDate >= 22) || (moisDate == 9) && (jourDate <= 21)) {
        nomMois = "Vendémiaire";
    }

    else if ((moisDate == 9) && (jourDate >= 22) || (moisDate == 10) && (jourDate <= 21)) {
        nomMois = "Brumaire";
    }

    else if ((moisDate == 10) && (jourDate >= 22) || (moisDate == 11) && (jourDate <= 21)) {
        nomMois = "Frimaire";
    }

    else if ((moisDate == 11) && (jourDate >= 22) || (moisDate == 0) && (jourDate <= 20)) {
        nomMois = "Nivôse";
    }

    else if ((moisDate == 0) && (jourDate >= 21) || (moisDate == 1) && (jourDate <= 19)) {
        nomMois = "Pluviôse";
    }

    else if ((moisDate == 1) && (jourDate >= 20) || (moisDate == 2) && (jourDate <= 21)) {
        nomMois = "Ventôse";
    }

    else if ((moisDate == 2) && (jourDate >= 22) || (moisDate == 3) && (jourDate <= 19)) {
        nomMois = "Germinal";
    }

    else if ((moisDate == 3) && (jourDate >= 20) || (moisDate == 4) && (jourDate <= 19)) {
        nomMois = "Floréal";
    }

    else if ((moisDate == 4) && (jourDate >= 20) || (moisDate == 5) && (jourDate <= 18)) {
        nomMois = "Prairial";
    }

    else if ((moisDate == 5) && (jourDate >= 19) || (moisDate == 6) && (jourDate <= 18)) {
        nomMois = "Messidor";
    }

    else if ((moisDate == 6) && (jourDate >= 19) || (moisDate == 7) && (jourDate <= 18)) {
        nomMois = "Thermindor";
    }

    else if ((moisDate == 7) && (jourDate >= 18) || (moisDate == 8) && (jourDate <= 17)) {
        nomMois = "Fructidor";
    }

    else {
        nomMois = "Jour Supplémentaire";
    }
    return nomMois;
}

let dateDuJour = new Date();
// dateDuJour = Date.now();
console.log(retournerMoisRevolutionnaire(dateDuJour));
console.log(document.body);
console.log(document.head);
console.log(document.links);
console.log(document.scripts);
console.log(document.url);

