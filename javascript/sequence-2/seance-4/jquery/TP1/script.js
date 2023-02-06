jQuery(document).ready(function(){
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();

    function zoomer()
    {
        $('img').each(function()
        {
            console.log('une image trouvee! a zoommer');
            $(this).css('height','100vh');
        })
        $('#zoom').prop('disabled', true);
        $('#dezoom').prop('disabled', false);
    }

    function dezoomer()
    {
        $('img').each(function()
        {
            console.log('une image trouvee!a dezoommer');
            $(this).css('height','25vh');
        });
        $('#zoom').prop('disabled', false);
        $('#dezoom').prop('disabled', true);
    }
    
    $('#zoom').click(zoomer);
    $('#dezoom').click(dezoomer);

    $(document).keyup(function(touche)
    {
        let appui = touche.which || touche.keyCode; 
        // + =  107
        if(appui=="107")
        {
            zoomer();
        }
        // - = 109
        else if(appui=="109")
        {
            dezoomer();
        }

        /* OU
        switch (appui)
        {
            case 107:
                zoomer();
                break;
            case 109:
                deZoomer();
                default:
            console.log(appui);
            break;
       }
        */
    });     
});
