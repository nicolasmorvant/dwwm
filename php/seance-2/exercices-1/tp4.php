<?php

    /*  Exercice n°4. Boucle for (bis)
    
        Écrivez la page PHP pour afficher dans la console le nombre, de 2 à n en utilisant la boucle FOR. N’affichez que les valeurs paires. 
        
        Ajoutez le caractère – pour servir de séparateur. Créez sous forme d’une fonction afficherNombresPairs(nombre)

        Le résultat attendu est 2-4-6-8-10-12-14-16-18-20   */

        function afficherNombresPairs($nombre)
        {
            $resultat="";
            for($i = 0 ; $i <= $nombre ; $i++)
            {
                if($i % 2 == 0)
                {
                    if($i==$nombre)
                    {
                        $resultat = $i;
                    }
                    else
                    {
                        $resultat = $i.'-';
                    }
                    echo $resultat;
                }  
                echo "<script>console.log(".$resultat.")</script>";
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

    <?php   afficherNombresPairs($_GET["nombre"]);  ?>
    

</body>
</html>