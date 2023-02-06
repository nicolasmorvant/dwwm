function getWeekDay(pDate) {
    let resultat = "";
    let listeJours = ['SU','MO','TU','WE','TH','FR','SA']
    console.log(pDate.getDay());
    // switch (pDate.getDay()) {
    //     case 0:resultat = "SU";
    //         break;
    //     case 1:resultat = "MO";
    //         break;
    //     case 2:resultat = "TU";
    //         break;
    //     case 3:resultat = "WE";
    //         break;
    //     case 4:resultat = "TH";
    //         break;
    //     case 5:resultat = "FR";
    //         break;
    //     case 6:resultat = "SA";
    //         break;
    // }
    // return resultat
    return listeJours[pDate.getDay()];
}

let date = new Date(2012, 0, 3);
console.log(getWeekDay(date));