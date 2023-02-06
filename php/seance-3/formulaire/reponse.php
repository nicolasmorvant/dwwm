<?php

    $abbreviation = $_POST['abbreviation'];
    $nom = strip_tags($_POST['nom']);
    $prenom = strip_tags($_POST['prenom']);
    $naissance = strip_tags($_POST['naissance']);
    $identifiant = strip_tags($_POST['identifiant']);
    $motdepasse = strip_tags($_POST['motdepasse']);
    $sexe = strip_tags($_POST['sexe']);
    $niveau = $_POST['niveau'];

    /*if($_POST)
    {
        echo "contenu de post";
        print_r($_POST);
    }*/

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Résultats</title>
</head>
<body>
    <h4>Résultats du formulaire</h4>
    <p>
        Bonjour <?php echo $abbreviation.' '.$prenom.' '.$nom ?>
    </p>
    <p>
        Vous êtes né(e) en : <?php echo $naissance; ?>
        <br><br>
        Votre identifiant est  :  <?php echo $identifiant; ?>
        <br><br>
        Votre mot de passe est  : <?php echo $motdepasse; ?>
        <br><br>
        <p>
            <?php 
                if(isset($niveau) == null)
                {
                    echo 'Vous êtes un maître en php';
                }
                else
                {
                    echo "Vous êtes débutant en php";
                }
            ?>
        </p>    
    </p>
</body>
</html>