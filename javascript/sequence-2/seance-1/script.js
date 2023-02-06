let random = document.querySelector("#random");
let couleur = document.querySelector("#couleur");
let ajouterP = document.querySelector("#ajouterP");
let ajouterH1 = document.querySelector("#ajouterH1");
let masquer = document.querySelector("#masquer");


function couleurRandom()
{
    let c = "#";
    let couleur="";
    for (let i = 0; i < 6; i++) {
        couleur=Math.round(Math.random()*15);
        if(couleur === 10)
        {
            couleur = "a";
        }
        else if(couleur === 11)
        {
            couleur = "b";
        }
        else if(couleur === 12)
        {
            couleur = "c";
        }
        else if(couleur === 13)
        {
            couleur = "d";
        }
        else if(couleur === 14)
        {
            couleur = "e";
        }
        else if(couleur === 15)
        {
            couleur = "f";
        }
        c+=couleur;
    }
    console.log(c);
    return c;
}

random.addEventListener("click",(/*e*/)=>
{
    //e.preventDefault();
    document.body.style.backgroundColor=couleurRandom();
});

couleur.addEventListener("click",()=>{
    /*
        document.body.style.backgroundColor=="white"?document.body.style.backgroundColor = "black":document.body.style.backgroundColor = "white";
    document.body.style.backgroundColor=="white"?document.body.style.color = "black":document.body.style.color = "white";
    */
    if(document.body.style.backgroundColor==="black")
    {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
    else
    {
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
});

ajouterP.addEventListener("click",()=>{
    let p = document.createElement("p");
    p.textContent=prompt("Ajoutez du texte : ");
    document.body.appendChild(p);
    
    let reveler = document.createElement("button");
    reveler.textContent="masquer/révéler paragraphe";
    document.body.appendChild(reveler);
    
    let supprimer = document.createElement("button");
    supprimer.textContent="X";
    document.body.appendChild(supprimer);
    
    reveler.addEventListener("click",()=>{
        if(p.style.display==="none")
        {
            p.style.display="block";
        }
        else
        {
            p.style.display="none";
        }
    });
    
    supprimer.addEventListener("click",()=>{
        document.body.removeChild(p);
        document.body.removeChild(reveler);
        document.body.removeChild(supprimer);
    });
});

ajouterH1.addEventListener("click",()=>{
    let titre = document.createElement("h1");
    titre.textContent=prompt("Ajoutez un titre : ");
    document.body.appendChild(titre);
});

masquer.addEventListener("click",()=>{
    let tousParagraphes = document.querySelectorAll("p");
    tousParagraphes.forEach(paragraphe =>{
        if(paragraphe.style.display==="none")
        {
            paragraphe.style.display="block";
        }
        else
        {
            paragraphe.style.display="none";
        }
    });
});