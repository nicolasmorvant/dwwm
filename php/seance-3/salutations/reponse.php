<?php

    $prenom = strip_tags($_POST['prenom']);
    $nom = strip_tags($_POST['nom']);
    $titre = strip_tags($_POST['titre']);
    $race = $_POST['race'];
    $rang = $_POST['rang'];
    $classe = $_POST['classe'];

    function saluerRace($r)
    {
        $phrase="";
        if($r == 'humain')
        {
            $phrase = 'Le garde observe la personne qui approche';
        }
        elseif($r == 'elfe')
        {
            $phrase = 'Le garde observe la personne, totalement subjugé par la grâce elfique';
        }
        else
        {
            $phrase = 'Le garde observe la personne difforme et repoussante, plissant le nez';
        }
        return $phrase;
    }


    function saluerRang($ra)
    {
        $phrase = "";
        if($ra == 'roturier')
        {
            $phrase = "et fait un signe de tête.";
        }
        elseif($ra == 'noble')
        {
            $phrase = "et s’incline respectueusement.";
        }
        else
        {
            $phrase = "et s'incline profondément.";
        }
        return $phrase;
    }


?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="php.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <title>Résultat</title>
</head>
<body>
    <div class="fiche">
        <h4>Fiche du personnage</h4>
        <p class="un">
            Bonjour <?php echo $prenom.' '."\"".$titre."\"".' '.$nom ?>
        </p>
        <p class="deux">
            <?php echo saluerRace($race).' '.saluerRang($rang); ?>
        </p>
    </div>
</body>
</html>