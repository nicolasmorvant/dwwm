function mettreCalculAJour(event)
{
    let dateNaissance = document.querySelector('#dateNaissance');
    let txtAgeAn = document.querySelector('#txtAgeAn');
    let txtAgeAnMois = document.querySelector('#txtAgeAnMois');
    console.log(dateNaissance.valueAsNumber);
    // valueAsNumber permet de récupérer la date dans l'input de type date en milli seconde comme en javascript (1970)
    let date = new Date(dateNaissance.valueAsNumber);
    console.log(date);
    txtAgeAn.value =convertirMilliSecEnAnnee(Date.now()-date.getTime())+" années";
    txtAgeAnMois.value =convertirMilliSecEnAnneeMois(Date.now()-date.getTime());
    document.title = convertirMilliSecEnAnneeMois(Date.now()-date.getTime());
}

let boutonCalculer = document.querySelector('#btnCalculer');
boutonCalculer.addEventListener('click',mettreCalculAJour)