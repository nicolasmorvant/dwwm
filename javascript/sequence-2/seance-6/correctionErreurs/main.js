

jQuery().ready(()=>
{
    /* notre code ici*/ 
    console.log('Jquery est bien chargé et la page prête!');
    $('#chargement').hide();
    $('#contenu').show();
});

  $('#customRange').change((e) =>
  { 
    e.preventDefault();
    console.log('change customRange');
    console.log($('#customRange')[0].value);
    pPortFolio.perPicture=$('#customRange')[0].value;
    updatePorFolio(pPortFolio);
  });

  var pPortFolio = new Portfolio();
  chargerImages(pPortFolio);
  afficherPortFolio(pPortFolio);
