function afficherPortFolio(pPortFolio)
{
    //console.log($('#listeImages'))
    

    pPortFolio.listePicture.forEach((picture,i) => {
        let image = document.createElement('img');
        console.log(picture.nomFichier);
        image.src = picture.nomFichier;
        image.style.height='auto'
        image.style.width="100%"
        image.id='image_'+i;
        let texte = document.createElement('p');
        texte.innerText = picture.description;
        let boiteImage = document.createElement('div');
        boiteImage.classList.add('boiteImage')
        boiteImage.appendChild(image);
        boiteImage.appendChild(texte);
        boiteImage.style.display = "flex";
        boiteImage.style.flexDirection = "column";
        boiteImage.style.flexWrap = "wrap";
        boiteImage.style.width = `${(100-pPortFolio.perPicture*2) / pPortFolio.perPicture}%`;
       
        boiteImage.style.maxHeight = `${window.innerHeight/(pPortFolio.perPicture)}px`;
        boiteImage.id='image_'+i;
        console.log(boiteImage);
        $('#listeImages').append(boiteImage);
        i++;
    });
}

function updatePorFolio(pPortFolio)
{
console.log(pPortFolio.perPicture);
    $('.boiteImage').css('width',`${(100- pPortFolio.perPicture*2) / pPortFolio.perPicture}%`);
    $('.boiteImage').css('maxHeight',`${window.innerHeight/(pPortFolio.perPicture)}px`)
}

function chargerImages(pPortFolio) {
    $.getJSON("photos.json",(data)=>
    {
        console.log(data);
        data.listePicture.forEach(element =>
            {
                pPortFolio.addPicture(new Picture(element.nomFichier, element.description));
            });
        console.log(pPortFolio);
        afficherPortFolio(pPortFolio);
        abonnerBoutonsZoomDezoom(); //abonnerBoutonsZoomDezoome
        console.log(JSON.stringify(pPortFolio));
    });
}
function abonnerBoutonsZoomDezoom() {
    $('.boiteImage').click(function (e) {
        e.preventDefault();
        console.log('change zoomDezoom');
        console.log($('#' + e.target.id).css('width').replace('px', ''));
        if (parseFloat($('#' + e.target.id).css('width').replace('px', '')) < window.innerWidth / 2)
        {
            console.log('zooom');
            $('#' + e.target.id).css('width', window.innerWidth + 'px');
            $('#' + e.target.id).css('height', window.innerHeight + 'px');
            $('#' + e.target.id).css('max-height', window.innerHeight + 'px');
        }

        else {
            console.log('dzoom');
            $('#' + e.target.id).css('width', `${(100 - portFolio.perPicture * 2) / portFolio.perPicture}%`);
            boiteImage.style.maxHeight = `${100 / portFolio.perPicture*2}%`;
            $('#' + e.target.id).css('max-height', `${window.innerHeight / (portFolio.perPicture)}px`);
        }

    });
}