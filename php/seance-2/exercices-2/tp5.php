<?php

    $listeFilms =   [
                        ["nom"=>"The Shawshank Redemption","realisateur"=>"Frank Darabont","annee"=>1994,"note"=>9.2],
                        ["nom"=>"The Godfather","realisateur"=>"Francis Ford Coppola","annee"=>1972,"note"=>9.1],
                        ["nom"=>"The Dark Knight","realisateur"=>"Christopher Nolan","annee"=>2008,"note"=>9.0],
                        ["nom"=>"The Lord of the Rings: The Return of the King","realisateur"=>"Peter Jackson","annee"=>2003,"note"=>8.9],
                        ["nom"=>"Pulp Fiction","realisateur"=>"Quentin Tarantino","annee"=>1994,"note"=>8.9]
                    ];

    
    echo "<h3>Liste de films</h3>";
    //echo "<ul>";
    foreach($listeFilms as $film)
    {
        echo "<li>".$film["nom"]." : ".$film["realisateur"]."</li>";
    }
    //echo "</ul>";

    echo "<br><br><h3>Liste de films complète</h3>";
    echo "<ul>";

    foreach($listeFilms as $film)
    {
        echo "<li>".$film["nom"]."</li>";
        echo "<p>";
            echo $film["realisateur"]."<br>";
            echo $film["annee"]."<br>";
            echo $film["note"]."<br>";
        echo "</p>";
    }

    echo "</ul>";
?>