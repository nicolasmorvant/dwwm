let listeNombres = [1,7,3,12,7,5];

function tri(listeNombres)
{
    
    if(listeNombres.length < 1)
    {
        console.log("erreur");
    }
    else
    {
        for(let i=listeNombres.length-1;i>0;i--)
        {
            for (let j=0;j<i;j++)
            {
                if (listeNombres[j+1] < listeNombres[j])
                {
                    let temp = listeNombres[j+1]
                    listeNombres[j+1] = listeNombres[j]
                    listeNombres[j] = temp;
                }
            }
        }
        console.log(listeNombres);
    }
}

tri(listeNombres);
