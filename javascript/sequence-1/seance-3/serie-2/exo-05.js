let blocprincipal = document.querySelector("main");

let moisFr = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
let moisEng = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let moisEsp = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let ligne = "";
for (let i = 0; i < moisFr.length; i++) {
    ligne+=`${i+1}. `,
    ligne+= moisFr[i];
    ligne+=" "
    ligne+=moisEng[i];
    ligne+=" "
    ligne+=moisEsp[i];

    let paragraphe = document.createElement("p");
    paragraphe.textContent = ligne;
    
    blocprincipal.append(paragraphe);

    ligne="";

}