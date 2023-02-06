let boutonsOperateur = document.querySelectorAll('.btn_operateur');
let boutonsChiffre = document.querySelectorAll('.btn_chiffre');
let boutonEgal = document.querySelector('#btn_egal');
let boutonClear = document.querySelector('#btn_effacer');
let boutonClearLast = document.querySelector('#btn_effacer_last');

let ecran = document.querySelector('#ecran');
let tampon = document.querySelector('#tampon');

boutonsOperateur.forEach(boutonOperateur=>{
    boutonOperateur.addEventListener('click',ajouterOperation);
}
);
boutonsChiffre.forEach(boutonChiffre=>{
    boutonChiffre.addEventListener('click',ajouterChiffre);
}
);
boutonEgal.addEventListener('click',evaluerExpression);
boutonClear.addEventListener('click',effacerExpression);
boutonClearLast.addEventListener('click',effacerLastExpression);

let body = document.querySelector('body');
body.addEventListener('keydown',touchePressee);