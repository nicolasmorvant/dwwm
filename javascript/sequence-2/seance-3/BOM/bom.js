/*
 DOCUMENT

// affichage des propriétés du document HTML présent
console.log(document.body);
console.log(document.links);
console.log(document.head);

 WINDOW

// récupération d'informations 
//propriétés
console.log(window.location);
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);
//console.log(window.prompt("test"));
//https://developer.mozilla.org/en-US/docs/We0nb/API/Window
// événements
window.addEventListener('resize',()=>{console.log('on change la taille!');})
window.addEventListener('copy',()=>{console.log('Sale piwate! t a copié vilain!');})
window.addEventListener('copy',()=>{console.log('Sale piwate! t a copié vilain!');})
// méthodes
//window.addEventListener('copy',()=>{window.close();})
window.addEventListener('paste',()=>{window.open('https://www.google.com','width=500, height=500');})
let openLycos = document.querySelector('#openLycos')
openLycos.addEventListener('click',()=>{window.open('https://www.lycos.fr/','width=500, height=500');})

 NAVIGATOR
// propriétés: pour récoup des infos
console.log(navigator.language);
console.log(navigator.platform);
console.log(navigator.mediaDevices);
// des actions: methodes
// sos en morse
//navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100])
function coordonnees(pos) {
    let crd = pos.coords;
  console.log(pos);
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    document.getElementById('p1').innerHTML= 'Latitude : ' + latitude.toFixed(2);
    document.getElementById('p2').innerHTML= 'Longitude : ' + longitude.toFixed(2);
}
navigator.geolocation.getCurrentPosition(coordonnees);
//document.querySelector('#back').addEventListener('click',()=>{console.log('bac');history.back()})
document.querySelector('#back').addEventListener('click',()=>{console.log('bac');history.go(-3)})
document.querySelector('#forward').addEventListener('click',()=>{console.log('forward');history.forward()})

LOCATION
console.log(location.pathname);
console.log(location.port);
console.log(location.host);
console.log(location.hostname);
document.querySelector('#reload').addEventListener('click',()=>{console.log('reload');location.reload()})
console.log(location.protocol);

SCREEEN
document.getElementById('p').innerHTML =
    'Dimensions totales de l\'écran : ' + screen.width + ' x ' + screen.height +
    '<br>Surface disponible : ' + screen.availWidth + ' x ' + screen.availHeight +
    '<br>Palette de couleur : ' + screen.colorDepth +
    '<br>Résolution : ' + screen.pixelDepth;
*/


//PARTIE EXERCICES

//EXERCICE 1

let b1 = document.querySelector("#open");
let b2 = document.querySelector("#resizeBy");
let b3 = document.querySelector("#resizeTo");
let b4 = document.querySelector("#close");

function openWin()
{
    fenetre = window.open("", "", "width=100, height=100");
}
    
function resizeWinBy()
{
    fenetre.resizeBy(250, 250);
}

function resizeWinTo()
{
    fenetre.resizeTo(1366, 768);
}

function closeWin()
{
    fenetre = window.close();
}

b1.addEventListener("click",openWin);

b2.addEventListener("click",resizeWinBy);

b3.addEventListener("click",resizeWinTo);

b4.addEventListener("click",closeWin);



//EXERCICE 2 - INFORMATION SUR LA FENETRE EN COURS

/*Affichez dans un paragraphe p :
    • Hauteur ;
    • Largeur ;
    • Couleurs.

Informations sur la fenêtre
Vous pouvez utiliser l’objet screen pour récupérer les informations sur la fenêtre.*/

let paragraphe = document.querySelector("#para");
let hauteur = screen.height;
//console.log(hauteur);
let largeur = screen.width;
//console.log(largeur);
let couleurs = screen.colorDepth;
//console.log(couleurs);

paragraphe.innerHTML=`Hauteur : ${hauteur} <br> Largeur : ${largeur} <br> Couleurs : ${couleurs}`;

//EXERCICE 3 - JOUER AVEC LA GEOLOCALISATION

/*Nous allons tester les méthodes de l’objet Geolocation :
    • Ajoutez un bouton qui ouvre une pop-up
    • Demandez s’il est d’accord pour être localisé
    • Afficher dans un paragraphe une réponse différente suivant le cas : annuler ou ok
Si “ok” : affichez les informations sur ses coordonnées GPS
Récupérer la position via le navigateur
navigator.geolocation.getCurrentPosition(appelerFonction);*/

let boutonPopUp = document.querySelector("#popup");

function coordonnees(pos)
{
    let crd = pos.coords;
    let lat=crd.latitude;
    let long=crd.longitude;
    let emplacement = `Votre latitude : ${lat} / Votre longitude : ${long}`;
    let paragrapheCoords = document.createElement("p");
    paragrapheCoords.textContent=emplacement;   
    document.body.appendChild(paragrapheCoords);
}

boutonPopUp.addEventListener("click",()=>{

    let reponse = prompt("Etes-vous d'accord pour être géolocalisé ? (Réponses possibles : yes / no");
    if(reponse === "yes")
    {
        if ('geolocation' in navigator)
        {
            console.log("geolocation is available");
            let geo = navigator.geolocation.getCurrentPosition(coordonnees);
        }
        else
        {
            console.log("geolocation IS NOT available");
        }
    }
    else if(reponse === "no")
    {
        alert("dommage");
    }
    else
    {
        alert("reponse incorrecte");
    }

});







