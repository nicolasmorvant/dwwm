<?php

    /*
    *   Exercice n°3. Tableau de films
    *   Créez le tableau suivant :
    *       - The Shawshank Redemption	
    *       - The Godfather
    *       - The Dark Knight
    *       - The Lord of the Rings: The Return of the King
    *       - Pulp Fiction
    *
    */

    $tableauFilms = ["The Shawshank Redemption","The Godfather","The Dark Knight","The Lord of the Rings : The Return of the King","Pulp Fiction"];
    
    echo "<h3>Voici la liste des films :</h3>";
    
    foreach($tableauFilms as $film)
    {
        echo "<li>".$film."</ul>";
    }

?>
