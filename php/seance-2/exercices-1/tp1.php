<?php

    /*Exercice n°1. Afficher le paramètre 

    Écrivez la page PHP qui affiche le contenu du paramètre nombre. Utilisez echo et var_dump pour comparer leur intérêt respectif.

    Récupération des paramètres
    $_GET est un tableau associatif contenant la liste des paramètres tapés dans la barre d’adresse_. Il s’agit des paires de (clé, valeur) après le «=»
    $_GET[«lacle»] permet d’accéder à la valeur du paramètre lacle.*/
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
    <?php   echo $_GET["nombre"];   ?>

    <br>

    <?php   var_dump($_GET["nombre"]);  ?> <!--     renvoit string(2) "10"      -->
</body>
</html>