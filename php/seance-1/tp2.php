<?php


    /*  déclarer une variable appelée durée et contenant  6700
        considérer que cette durée est en seconde et…
        ouvrir une boîte de dialogue affichant sa valeur convertie en heure, minute et secondes
        reste entier: %
        → resultat attendu: 1h51m40s*/

        
    $duree = 6700;

    $heure = floor($duree/3600);
    $duree -= $heure*3600;

    $minutes = floor($duree/60);
    $duree -= $minutes * 60;

    echo 'RESULTAT : ' .$heure.' heure '.$minutes.' minutes '.$duree.' secondes';

?>