<?php

    /*  Les tableaux de personnes 
    *
    *    Écrire un script php qui permet de visualiser le contenu du tableau $individu à l’aide d’une boucle foreach(). On affichera les clés et les valeurs associées.
    *
    *       Voici le tableau individu :
    *
    *       $individu = array('Nom'=>'Dupond','Prenom'=>'Martin','Age'=>18,'Nationalité'=>'Francaise',); 
    *
    *   Déclarerez un tableau $individus qui contiendra d’autres tableaux $individu. 
    *
    *   Créez donc plusieurs individus bien entendu ! Vous réaliserez un affichage ce tableau $individus
    */

    $individu1 = array('Nom'=>'Dupond','Prenom'=>'Martin','Age'=>18,'Nationalité'=>'Française');
    $individu2 = array('Nom'=>'Morvant','Prenom'=>'Aragorn','Age'=>18,'Nationalité'=>'Française');
    $individu3 = array('Nom'=>'Morvant','Prenom'=>'Anastasia','Age'=>18,'Nationalité'=>'Française');
    $individus = array($individu1,$individu2,$individu3);

    function afficherInfos($v)
    {
        foreach($v as $key => $value)
        {
            echo $key." : ".$value."<br>";
        }
    }

    foreach($individus as $personne)
    {
        echo "Informations de ".$personne["Prenom"]." ".$personne["Nom"]." :<br>
        --------------------------------------------------------<br>";
        afficherInfos($personne);
        echo "<br><br>";
    }

?>