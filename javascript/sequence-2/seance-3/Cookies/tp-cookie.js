
function ajouterCookie()
    {
        if(document.body.style.backgroundColor==="black")
        {
            document.cookie = "mode=darkmode ; SameSite = Strict ; max-age = 30*24*60*60";
            dark.innerHTML = "lightmode";
        }
        else
        {
            document.cookie = "mode=lightmode ; SameSite = Strict ; max-age = 30*24*60*60";
            dark.innerHTML = "darkmode";
        }
    }



let dark = document.querySelector("#darkmode");

dark.addEventListener("click",()=>{
    if(document.body.style.backgroundColor==="black")
    {
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
    else
    {
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
    ajouterCookie();
    
    let cookiesetinfos = document.cookie.split(';');
    let cookies = cookiesetinfos[0].split('=');
    console.log(cookies);
    console.log(cookies[1]);
});



