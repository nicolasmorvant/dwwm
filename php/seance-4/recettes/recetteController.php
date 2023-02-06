<?php
  function afficherRecettes()
  {
      
      ob_start();

      $json = file_get_contents('recettes.json');
      $recettesJson = json_decode($json);
      
      $i=0;
      
      foreach($recettesJson->recettes as $recetteJson)
        {
        $recette = new Recette($i,$recetteJson->titre,$recetteJson->description,$recetteJson->listeIngredients,$recetteJson->listeOperations);
          include 'views/cardRecette.php';
          $i++;
        } 
      
      $content = ob_get_clean();
      
      include 'views/layout.php';
  }


  function afficherUneRecette($pId)
  {
      ob_start();
      
      $json = file_get_contents('recettes.json');
      $recettesJson = json_decode($json);
      
      $recette = new Recette($pId,$recettesJson->recettes[$pId]->titre,$recettesJson->recettes[$pId]->description,$recettesJson->recettes[$pId]->listeIngredients,$recettesJson->recettes[$pId]->listeOperations);
      include 'views/afficherUneRecette.php';
      
      $content = ob_get_clean();
      include 'views/layout.php';
  }
?>