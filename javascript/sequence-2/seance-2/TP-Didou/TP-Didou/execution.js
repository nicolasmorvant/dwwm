/*var bodyTag = document.body;
var p1Tag   = bodyTag.childNodes[3];
var bTag    = p1Tag.lastChild;
var p2Tag   = bodyTag.childNodes[5];
var imgTag  = p2Tag.firstChild;

console.log("p1Tag  : "+ p1Tag.innerHTML);
console.log("bTag   : "+ bTag.innerHTML);
console.log("imgTag : "+ imgTag.src);*/

let animaux = document.querySelectorAll('input');
let nomAnimal = document.querySelector("#id_quoi");
let imagesAnimaux = document.querySelectorAll("img");
let refImage = document.querySelector("#id_image");

animaux.forEach(animal=>{
    animal.addEventListener('click',afficherImageEtTexte);
});

imagesAnimaux.forEach(animal =>
    {
        if(animal!=id_image)
        {
            animal.addEventListener("mouseover",survolImageEtTexte);
        }
    }
);