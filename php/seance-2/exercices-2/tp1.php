<?php

    $tableau[0] = 2023;
    $tableau[1] = "DEVWEB-18-S2";
    $tableau[] = 11.12;
    // tableau à 2 dimensions : 
    $tab[0][0] = 12;
    $tab[0][1] = "tv";
    $tab[1][0] = 1245.678;
    $tab[1][1] = "bye";
    // tableau associatif : 
    $toto["Nom"] = "le nom de famille de Toto...";
    $toto["Age"] = 12;
    $toto["Adresse"] = "22 rue des bois fleuri";

    function afficherTableauSimple($x)
    {
        for($i = 0 ; $i < count($x) ; $i++)
        {
            echo 'Champ N°'. $i+1 .' -------- Valeur : '.$x[$i].'<br><br>';
        }        
        echo '<br>';
    }


    function afficherTableauDeuxDimensions($x)
    {
        echo 'Tableau à deux dimensions : <br><br><br>';
        for($i = 0 ; $i < count($x) ; $i++)
        {
            echo '';
            afficherTableauSimple($x[$i]);
        }
        echo '<br><br>';
    }

    function afficherTableauAssociatif($x)
    {
        echo 'Tableau associatif : <br><br>';
        
        foreach($x as $key => $value)
        {
            echo $key."      ".$value."<br><br>";
        }
    }

    afficherTableauSimple($tableau);
    afficherTableauDeuxDimensions($tab);
    afficherTableauAssociatif($toto);

?>