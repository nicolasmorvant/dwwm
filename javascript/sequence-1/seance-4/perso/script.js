
let sapin = document.querySelector('ul');
sapin.style.listStyleType="none";

let nbEtoiles = 1;
let nbLignes = 10;
let nbColonnes = nbLignes - 1;
let compteur = 2;

for(let i=0;i<nbLignes-1;i++)
{
  let chaine = "";
  for(let j =0;j<nbColonnes;j++)
  {
    chaine+=" ";
  }
  for(let k=0;k<nbEtoiles;k++)
  {
    chaine+="*";
  }
  nbEtoiles += 2;
  nbColonnes -= 1;
  console.log(chaine);

  
  let li = document.createElement("li");
  li.textContent = chaine;
  sapin.appendChild(li);
}