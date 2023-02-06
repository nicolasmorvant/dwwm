<?php

    /*      Exercice n°2. Boucle for
            
            Écrivez la page PHP avec une fonction afficherLesNombres(nombre) pour
    
            • Afficher tous les nombres de 1 à n    */

    function afficherNombres($n)
    {
        for($i =  0 ; $i < $n ; $i++)
        {
            echo 'Nombre '. $i+1 .' : ' .$i;?><br><br>
     <?php   }
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

    <?php  afficherNombres($_GET["nombre"])    ?>

    

</body>
</html>