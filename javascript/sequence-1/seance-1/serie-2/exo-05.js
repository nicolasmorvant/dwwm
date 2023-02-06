let x = prompt("Saisissez un nombre : ");
x=parseInt(x);
let y = prompt("Saisissez un nombre : ");
y=parseInt(y);
let message = "";

if(x > y)
{
    message = "x est plus grand que y";
}
else
{
    message = "x est plus petit ou égal à y";
}

let paragraphe = document.getElementById("p1");
paragraphe.innerHTML=message;