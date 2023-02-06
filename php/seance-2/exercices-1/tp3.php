<?php

    /*      Exercice n°3.    Boucle for (bis)

            Écrivez la page PHP avec une fonction afficherLesNombresRebour(nombre) pour
    
            • Afficher tous les nombres de n à 1    */

    function afficherLesNombresRebour($n)
    {
        $compteur = 1;
        for($i =  $n ; $i >= 1 ; $i--)
        {
            echo 'Nombre '. $compteur .' : ' .$i;?>
            
            <br><br>
     <?php
            $compteur++;
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php  afficherLesNombresRebour($_GET["nombre"])   ?>

    

</body>
</html>