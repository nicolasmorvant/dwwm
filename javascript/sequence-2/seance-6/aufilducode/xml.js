let xhr = new XMLHttpRequest()
xhr.open('GET','https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
xhr.send()
xhr.onload = onLoad
xhr.onerror = onError
xhr.onprogress = onProgress;


function onProgress(pEvent){
    console.log(`chargement: ${((pEvent.loaded/pEvent.total)*100).toFixed(0)}%`);
}
function onError(){
    console.log('ERREUR REZOOOO');
}
function onLoad (){
    console.log(xhr.status);
    let superTeam = JSON.parse(xhr.response)
    console.log(superTeam);
    console.log(superTeam.homeTown);
    superTeam.members.forEach(element => {
        console.log(element.name)
        
    });
}
