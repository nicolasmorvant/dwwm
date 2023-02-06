let nom = document.querySelector("#nom").value;
//let rna = document.querySelector("#rna");
//let siret = document.querySelector("#siret");
let submit = document.querySelector("input[type='submit']");

let url = "https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/";

submit.addEventListener("click",(event)=>{

    event.preventDefault();

    let xhr = new XMLHttpRequest();
    xhr.open("get","https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/" + nom);
    xhr.withCredentials=true;
    let reponse = xhr.response;
    xhr.responseType="text";
    xhr.send();
    xhr.onload= ()=>
    {
        let paragrapheResultat = document.createElement("p");
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            paragrapheResultat.textContent = JSON.parse(response);
            document.body.append(paragrapheResultat);
        }
        else
        {
            alert(reponse);
        }
    };
});