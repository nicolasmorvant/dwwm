function afficherImageEtTexte(event)
{
    let nom = event.target.id;
    if(nom === "didou")
    {
        nomAnimal.innerHTML="un animal...";
    }
    else if(nom === "chouette")
    {
        nomAnimal.innerHTML=`une ${nom}`;
    }
    else
    {
        nomAnimal.innerHTML=`un ${nom}`;    //#id_quoi
    }
    refImage.src=`images/${nom}.jpg`; //#id_image
}



function survolImageEtTexte(event)
{
    let nom = event.target.id;
    nom=nom.replace('img','');
    if(nom === "didou")
    {
        nomAnimal.innerHTML="un animal...";
    }
    else if(nom === "chouette")
    {
        nomAnimal.innerHTML=`une ${nom}`;
    }
    else
    {
        nomAnimal.innerHTML=`un ${nom}`;    //#id_quoi
    }
    refImage.src=`images/${nom}.jpg`; //#id_image   
}
