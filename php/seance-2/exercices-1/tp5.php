<?php
    
    /* 
    *    Exercice n°5. Faire des boucles, encore
        
        *Écrivez la page PHP avec une fonction afficherPuissancesDeDeux(nombre) qui :

        *   • Afficher les puissances de 2
        *   • Aller de 2^0 à 2^nombre
        *   • Mettez en forme le texte
    */

    function afficherPuissanceDeDeux($nombre)
    {
        $resultat = 0;
        for($i = 0 ; $i <= $nombre ; $i++)
        {
            $resultat = $i ** 2; 
            echo  $i.' ** 2  = '.$resultat;
            
            ?><br><br><?php
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
    
    <?php   afficherPuissanceDeDeux($_GET["nombre"]);    ?>

</body>
</html>