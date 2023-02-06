/**
 * Exo 1
 */
function cacherImg(event)
{
    // sur mouse Event :  event.srcElement
    event.srcElement.style.visibility="hidden";
}
/**
 * Exo 2
 * @param {*} event 
 */
function cacherImgDisplayNon(event)
{
 
    event.srcElement.style.display="none";
}

function toutMasquer()
{
    // récupération de la liste de toutes les images
    let images =document.querySelectorAll('img');
    // pour chaque image, on change le style css
    images.forEach(image=>{
        image.style.display="none";
    })
}
function toutAfficher()
{
    // récupération de la liste de toutes les images
    let images =document.querySelectorAll('img');
    // pour chaque image, on change le style css
    images.forEach(image=>{
        image.style.display="block";
    })
}
function activerDoubleClick()
{
     // récupération de la liste de toutes les images
     let images =document.querySelectorAll('img');
     // pour chaque image, on abonne
     images.forEach(image=>{
        image.addEventListener('dblclick',cacherImgDisplayNon);
     })
     let boutonActiver = document.querySelector('#activer');
     let boutonDesactiver = document.querySelector('#desactiver');
     boutonActiver.disabled = true;
     boutonDesactiver.disabled = false;
}
function desactiverDoubleClick()
{
     // récupération de la liste de toutes les images
     let images =document.querySelectorAll('img');
     // pour chaque image, on abonne
     images.forEach(image=>{
        image.removeEventListener('dblclick',cacherImgDisplayNon);
     })
     boutonActiver.disabled = false;
     boutonDesactiver.disabled = true;
}


/*
let image1= document.querySelector('#image1');
image1.addEventListener('dblclick',cacherImg)
*/
// EXO 1
// let images =document.querySelectorAll('img');
// images.forEach(image=>{
//     image.addEventListener('click',cacherImg);
// })
//EXO 2
// let images =document.querySelectorAll('img');
// images.forEach(image=>{
//     image.addEventListener('dblclick',cacherImgDisplayNon);
// })
//EXO 3
// abonner le bouton au click pour tout afficher
let boutonToutAfficher = document.querySelector('#toutAfficher');
boutonToutAfficher.addEventListener('click',toutAfficher);
// abonner le bouton au click pour tout masquer
let boutonToutMasquer = document.querySelector('#toutMasquer');
boutonToutMasquer.addEventListener('click',toutMasquer);

// exo 4
// abonner le bouton au click pour tout afficher
let boutonActiver = document.querySelector('#activer');
boutonActiver.addEventListener('click',activerDoubleClick);
// abonner le bouton au click pour tout masquer
let boutonDesactiver = document.querySelector('#desactiver');
boutonDesactiver.addEventListener('click',desactiverDoubleClick);