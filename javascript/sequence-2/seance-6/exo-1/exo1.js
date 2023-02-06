var header = document.querySelector('header');
var section = document.querySelector('section');

let xml = new XMLHttpRequest();
xml.open("GET","https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
xml.responseType="json"; 
xml.send();

/*
    Même méthode avec xml.responseType="text"; :

    request.open('GET', requestURL);
    request.responseType = 'text'; // on veut une réponse sous forme de string
    request.send();

    request.onload = () => {
    var superHeroesText = request.response; // on récupère un string
    var superHeroes = JSON.parse(superHeroesText); // JSON.parse(stringAConvertir) // la méthode JSON.parse() convertit en format json
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}

JSON.parse(myString); convertit un string en objet JSON
JSON.stringify(myJSON); convertit un objet JSON et string

*/

xml.onload = ()=>{
    var superHeroes = xml.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
  }

function populateHeader(jsonObj)
{
    var myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    var myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + jsonObj['formed'];
    header.appendChild(myPara);
}


function showHeroes(jsonObj)
{
    var heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++)
    {
      var myArticle = document.createElement('article');
      var myH2 = document.createElement('h2');
      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      var myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      var superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++)
      {
        var listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
}
  


//xml.close();