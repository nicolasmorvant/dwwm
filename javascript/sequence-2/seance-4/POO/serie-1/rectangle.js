class Rectangle
{
    longueur;
    largeur;
    constructor(pLongueur,pLargeur)
    {
        this.longueur=pLongueur;
        this.largeur=pLargeur;
    }
    calculSurface()
    {
        return this.longueur*this.largeur;
    }
    calculPerimetre()
    {
        return (this.longueur+this.largeur)*2;
    }
    afficherRectangle()
    {
        console.log(`Longueur : ${this.longueur} | Largeur : ${this.largeur}`);
    }
}