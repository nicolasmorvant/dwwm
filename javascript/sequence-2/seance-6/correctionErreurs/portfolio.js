class Portfolio
{
    listePicture;
    perPicture;
    constructor(pListePicture=[],pPerPicture=1)
    {
        this.listePicture=pListePicture;
        this.perPicture=pPerPicture;
    }
    addPicture(perPicture)
    {
        this.listePicture.push(perPicture);
    }
 
}