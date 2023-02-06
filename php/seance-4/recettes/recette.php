<?php
class Recette
{
    public int $id;
    public String $titre;
    public String $description;
    public String $listeIngredients;
    public String $listeOperations;
    
    public function __construct(int $pId,String $pTitre,String $pDescription,String $pListeIngredients,String $pListeOperations)
    {
        $this->id=$pId;
        $this->titre = htmlentities($pTitre);
        $this->description = $pDescription;
        $this->listeIngredients = $pListeIngredients;
        $this->listeOperations = $pListeOperations;
    }
    
    public function __toString()
    {
        return json_encode($this);
    }
}
?>