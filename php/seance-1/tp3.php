<?php


    /*  Déclarer les variables nécessaires pour diviser  50 par 3
        Affichez le résultat de la division entière
        Affichez le reste de la division entière
        Mettez en forme le message d’alerte:
        ‘Le résultat de la division entière de 50 par 3 est de … et le reste est ....’*/

        $nombre = 50;
        $diviseur =  3;
        $resultatEntier = floor($nombre/$diviseur);

        $nombre -= $resultatEntier*$diviseur;
        
        echo 'Le resultat de la division entière de 50 par 3 est de '.$resultatEntier.' et le reste est '.$nombre;        

?>