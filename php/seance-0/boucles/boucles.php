<?php

    $array = new ArrayObject();
    $array->append('Remi');
    $array->append('Ilan');
    $array->append('Brendon');
    $array->append('Laurent');
    var_dump($array);

    echo "<UL>";                                             //BOUCLE CLASSIQUE
    for ($i=0; $i < $array->count(); $i++)
    { 
        echo "<LI>".$array[$i].'</LI>';
    }
    echo "</UL>";
    
    
    echo "<UL>";                                            //BOUCLE FOREACH
    foreach ($array as $key => $value)
    {
        echo "<LI>n°".$key."-".$value.'</LI>';
    }
    echo "</UL>";

    $x=0;                                                   //BOUCLE WHILE
    while ($x <= 10)
    {
        echo $x;
        $x++;
    }

?>