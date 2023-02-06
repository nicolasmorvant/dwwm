<?php


    /*  définir deux variables x et y contenant respectivement 5 et 10
        afficher dans un paragraphe le message suivant:
        si x > y alors afficher “x est plus grand que y”
        si x <= y alors afficher “x est plus petit que y”
        Tester le rendu quand x = 10 et y = 5      */
        
        $x = 5;
        $y = 10;

        echo'
            <p>
                si x > y alors afficher “x est plus grand que y<br>
                si x <= y alors afficher “x est plus petit que y 
            </p>';

        if($x>$y)
        {
            echo "x est plus grand que y";
        }
        else
        {
            echo "x est plus petit que y";
        }

?>