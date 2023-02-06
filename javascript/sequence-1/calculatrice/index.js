let calculatrice = document.querySelector("#calculatrice");
let tampon = document.querySelector("#tampon");
let affichageResultat = document.querySelector("#resultat");
let saisi = "";

document.addEventListener('keypress',(event) => {
    let nomTouche = event.key;
    if(nomTouche =="0")
    {
        saisi+='0';
        tampon.textContent=saisi;
    }
    if(nomTouche == "1")
    {
        saisi+='1';
        tampon.textContent=saisi;
    }
    if(nomTouche == "2")
    {
        saisi+='2';
        tampon.textContent=saisi;
    }
    if(nomTouche == "3")
    {
        saisi+='3';
        tampon.textContent=saisi;
    }
    if(nomTouche == "4")
    {
        saisi+='4';
        tampon.textContent=saisi;
    }
    if(nomTouche == "5")
    {
        saisi+='5';
        tampon.textContent=saisi;
    }
    if(nomTouche == "6")
    {
        saisi+='6';
        tampon.textContent=saisi;
    }
    if(nomTouche == "7")
    {
        saisi+='7';
        tampon.textContent=saisi;
    }
    if(nomTouche == "8")
    {
        saisi+='8';
        tampon.textContent=saisi;
    }
    if(nomTouche == "9")
    {
        saisi+='9';
        tampon.textContent=saisi;
    }
    if(nomTouche == ".")
    {
        saisi+='.';
        tampon.textContent=saisi;
    } 
    if(nomTouche == "+")
    {
        saisi+='+';
        tampon.textContent=saisi;
    }
    if(nomTouche == "-")
    {
        saisi+='-';
        tampon.textContent=saisi;
    } 
    if(nomTouche == "*")
    {
        saisi+='*';
        tampon.textContent=saisi;
    } 
    if(nomTouche == "/")
    {
        saisi+='/';
        tampon.textContent=saisi;
    } 
    if(nomTouche == "Enter")
    {
        try {
            let resultat = eval(saisi);
            //saisi+="=";
            tampon.textContent=saisi;
            affichageResultat.textContent=resultat;
        } catch (erreur) {
            affichageResultat.textContent="Expression incorrecte";
        }      
    } 
    if(nomTouche == "Backspace")
    {
        saisi="";
        tampon.textContent=saisi;
        affichageResultat.textContent="";
    }
});


let zero = document.querySelector("#zero");
zero.addEventListener("click",()=>{
    saisi+='0';
    tampon.textContent=saisi;
});

let reset = document.querySelector("button[type=reset]");
reset.addEventListener("click",()=>{
    saisi="";
    tampon.textContent=saisi;
    affichageResultat.textContent="";
});


let point = document.querySelector("#point");
point.addEventListener("click",()=>{
    saisi+=".";
    tampon.textContent=saisi;
});

let un = document.querySelector("#un");
un.addEventListener("click",()=>{
    saisi+="1";
    tampon.textContent=saisi;
});

let deux = document.querySelector("#deux");
deux.addEventListener("click",()=>{
    saisi+="2";
    tampon.textContent=saisi;
});

let trois = document.querySelector("#trois");
trois.addEventListener("click",()=>{
    saisi+="3";
    tampon.textContent=saisi;
});

let quatre = document.querySelector("#quatre");
quatre.addEventListener("click",()=>{
    saisi+="4";
    tampon.textContent=saisi;
});

let cinq = document.querySelector("#cinq");
cinq.addEventListener("click",()=>{
    saisi+="5";
    tampon.textContent=saisi;
});

let six = document.querySelector("#six");
six.addEventListener("click",()=>{
    saisi+="6";
    tampon.textContent=saisi;
});

let sept = document.querySelector("#sept");
sept.addEventListener("click",()=>{
    saisi+="7";
    tampon.textContent=saisi;
});

let huit = document.querySelector("#huit");
huit.addEventListener("click",()=>{
    saisi+="8";
    tampon.textContent=saisi;
});

let neuf = document.querySelector("#neuf");
neuf.addEventListener("click",()=>{
    saisi+="9";
    tampon.textContent=saisi;
});

let addition = document.querySelector("#addition");
addition.addEventListener("click",()=>{
    saisi+="+";
    tampon.textContent=saisi;
});

let soustraction = document.querySelector("#soustraction");
soustraction.addEventListener("click",()=>{
    saisi+="-";
    tampon.textContent=saisi;
});

let multiplication = document.querySelector("#multiplication");
multiplication.addEventListener("click",()=>{
    saisi+="*";
    tampon.textContent=saisi;
});

let division = document.querySelector("#division");
division.addEventListener("click",()=>{
    saisi+="/";
    tampon.textContent=saisi;
});

let egal = document.querySelector("button[type=submit]");
egal.addEventListener("click",()=>{
    try {
        let resultat = eval(saisi);
        //saisi+="=";
        tampon.textContent=saisi;
        affichageResultat.textContent=resultat;
    } catch (erreur) {
        affichageResultat.textContent="Expression incorrecte";
    }

    /*let ecran = document.querySelector("#ecran");
    let affichageResultat = document.createElement("p");
    ecran.appendChild(affichageResultat);*/
});     

