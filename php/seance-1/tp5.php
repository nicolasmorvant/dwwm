<?php


    /*  Afficher les puissance de 2
        Aller de 2^0 à 2^16
        Mettez en forme le texte
        Faites l’exercice avec une boucle for. 
        Aller plus loin: faire le même exercice avec une boucle while   */
        
        echo 'LES PUISSANCES DE 2 : <br>';                                             
        for ($i = 0; $i < 17; $i++)
        { 
            echo '<br>';
            $resultat = 2**$i;
            echo '2 ^ '.$i.' = '.$resultat;  
        };

?>