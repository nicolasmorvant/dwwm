let images =document.querySelectorAll('img');
let bouton = document.querySelector("button");
bouton.addEventListener("click",cacherImg);

let afficher = true;

function cacherImg()
{
    if(!afficher)
    {
        images.forEach(image=>{
            image.style.visibility="visible";
            });
        bouton.textContent="cacher les éléments";
        afficher = true;
    }
    else
    {
        images.forEach(image=>{
            image.style.visibility="hidden";
            });
        bouton.textContent="afficher les éléments";
        afficher = false;
    }
}


