<?php

    /*
        *Exercice n°2. Boucle et calculs
    
        *    Écrire un script php qui permet de créer ce tableau 
        *   $tableauNombre = [ 0, 1, 2, 3, 4, 5, 6 ];
        *   et  Calculez : 
        *      • La somme des valeurs du tableau,
        *      • La moyenne des valeurs du tableau
        *      • L’écart-type des valeurs du tableau*/

    //COMMENT DECLARER UN TABLEAU VIDE


    
    function creerTableau($n)
    {
        $tableauNombre = [];
        for($i = 0; $i < $n ; $i++)
        {
            array_push($tableauNombre,$i);
        }
        var_dump($tableauNombre);
        return $tableauNombre;
    }

    //creerTableau(6);

    $tableauNombre = [ 0, 1, 2, 3, 4, 5, 6 ];

    function calculerSomme($tab)
    {
        $resultat = 0;
        for($i = 0 ; $i<count($tab) ; $i++)
        {
            $resultat+=$tab[$i];
        }
        echo "La somme des éléments du tableau vaut : ".$resultat."<br><br>";
        return $resultat;
    }

    function calculerMoyenne($tab)
    {
        $resultat = 0;
        for($i = 0 ; $i<count($tab) ; $i++)
        {
            $resultat+=$tab[$i];
        }
        $resultat /= count($tab);
        return $resultat;
    }

    function calculerEcartType($tab)
    {
        $racine = 0;

        //MOYENNE
        $moyenne = calculerMoyenne($tab);

        //VARIANCE
        $variance = 0;
        $sommeVariance = 0;

        foreach ($tab as $value)
        {
            $sommeVariance += ($value - $moyenne)**2 ;
            $variance = $sommeVariance / count($tab);
        } 

        //RACINE CARREE
        $racine = sqrt($variance);
        
        //RETOURNE LE RESULTAT
        echo "L'écart-type du tableau vaut : ".$racine."<br><br>";
        return $racine;
    }

    calculerSomme($tableauNombre);
    $m = calculerMoyenne($tableauNombre);
    echo "La moyenne des éléments du tableau vaut : ".$m."<br><br>";
    calculerEcartType($tableauNombre)
?>