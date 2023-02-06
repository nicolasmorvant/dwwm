let images =document.querySelectorAll('img');
let bouton2 = document.querySelector("#bouton2");

let afficher = true;

function cacherImg()
{
    if(!afficher)
    {
        images.forEach(image=>{
            image.style.visibility="visible";
            });
        afficher = true;
    }
    else
    {
        images.forEach(image=>{
            image.style.visibility="hidden";
            });
        afficher = false;
    }
}

let affichage = false;

function desactiverImg()
{
    if(!affichage)
    {
    affichage = true;
    images.forEach(image=>
        {
            image.addEventListener('click',cacherImg);
        });
        bouton2.textContent="afficher les éléments";
        
    }
    else
    {
        affichage=false;
        images.forEach(image=>
            {
                image.removeEventListener('click',cacherImg);
            });
        bouton2.textContent="afficher les éléments";
        
    }
}

bouton2.addEventListener("click",desactiverImg);


