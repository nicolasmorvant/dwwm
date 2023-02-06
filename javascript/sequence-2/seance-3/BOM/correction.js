console.log("Demarré");
var fenetreCourante;
/**
 * Les fonctions
 */
function openWindow(pEvent)
{
    console.log('open');
    fenetreCourante= window.open('https://www.google.com','_blank')
}
function closeWindow(pEvent)
{
    console.log('close');
    fenetreCourante.close();
}
function resizeByWindow(pEvent)
{
    console.log('resizeBy');
    fenetreCourante.resizeBy(500,500);

}
function resizeToWindow(pEvent)
{
    console.log('resizeTo');
    fenetreCourante.resizeTo(250,250);
}
/** Gestion des boutons et abonnement */
let btnOpen = document.querySelector('#open');
btnOpen.addEventListener('click',openWindow);
let btnClose = document.querySelector('#close');
btnClose.addEventListener('click',closeWindow);
let btnResizeBy = document.querySelector('#resizeBy');
btnResizeBy.addEventListener('click',resizeByWindow);
let btnResizeTo = document.querySelector('#resizeTo');
btnResizeTo.addEventListener('click',resizeToWindow);


let pInfo = document.querySelector('#p1');
pInfo.innerText=`hauteur:${window.innerHeight} largeur:${window.innerWidth} couleurs:${screen.colorDepth}`
/**
 * Détection du changement de taille de la fenetre grace à l'objet window créé automatiquement (instance de la classe Window)
 */
window.addEventListener('resize',()=>{
    // ceci est une fonction anonyme
    console.log('resize');
    pInfo.innerText=`hauteur:${window.innerHeight} largeur:${window.innerWidth} couleurs:${screen.colorDepth}`
})