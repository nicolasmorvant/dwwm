class Classe
{
    intitule;
    listeStagiaire;
    dateDebut;
    dateFin;
    constructor(pIntitule="",pDateDebut,pDateFin)
    {
        this.intitule = pIntitule;
        this.listeStagiaire = [];
        this.dateDebut = pDateDebut;
        this.dateFin = pDateFin;
    }
    ajouterStagiaire(p,n)
    {
        //let nouveauStagiaire = new Stagiaire(p,n);
        this.listeStagiaire.push(p,n);
    }
    afficherClasse()
    {
        let liste=[];
        let v = "";
        let nomComplet= "";
        let num=0;
        for (let i = 0; i < this.listeStagiaire.length; i++)
        {
            v += this.listeStagiaire[i];
            if(num==0)
            {
                v+=" ";
                num++;
            }
            else
            {
                nomComplet+=v;
                liste.push(nomComplet);
                v="";
                num=0;
                nomComplet="";
            }
        }
        let phrase = `Classe de ${this.intitule} | Dates : ${this.dateDebut} - ${this.dateFin} | Liste des élèves : ${liste}`;
        return phrase;
    }
}