<?php
    
    /*
    * EXERCICE 6 = exercice 5 avec une boucle while
    */

    function afficherPuissanceDeDeux($nombre)
    {
        $resultat = 0;
        $i=0;
        while($i <= $nombre)
        {
            $resultat = $i ** 2; 
            echo  $i.' ** 2  = '.$resultat;
            
            ?><br><br><?php
            $i++;
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