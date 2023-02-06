class Cercle
{
    /*console.log(Math.PI);// affiche la valeur de PI
    let deuxPi = 2*Math.PI; // affecte 2PI à la variable deuxPi 
    let carre = Math.pow(12,2)// affecter le carré de 12 à la variable carre */
    rayon;
    constructor(pRayon)
    {
        this.rayon=pRayon;
    }
    calculSurface()
    {
        //piR²
        //let pi = Math.PI;
        return (this.rayon*(Math.pow(Math.PI,2))).toFixed(2);
    }
    calculPerimetre()
    {
        //2pirayon
        return (2*Math.PI*this.rayon).toFixed(2);
    }
    afficherCercle()
    {
        alert(`Le cercle de rayon ${this.rayon}cm a pour surface ${this.calculPerimetre()} cm². Son périmètre est de ${this.calculSurface()}cm`);
    }
}