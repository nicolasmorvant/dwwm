function onProgress(pEvent)
{
    console.log(`chargement: ${((pEvent.loaded/pEvent.total)*100).toFixed(0)}%`);
}

function onError()
{
    console.log('ERREUR RESEAU');
}

function onLoad ()
{
    console.log(xhr.status);
    console.log(xhr.response);
    let meteo = JSON.parse(xhr.response);
    let paragrapheInfo = document.querySelector('#info');
    let imageMeteo = document.createElement("img");
    console.log(meteo.weather.icon);
    imageMeteo.setAttribute("src",`http://openweathermap.org/img/wn/${meteo.weather[0].icon}@2x.png`);
    //let celsius = (meteo.main.temp - 273.15).toFixed(1); Sans &units=metric
    paragrapheInfo.innerHTML=`il fait ${(meteo.main.temp).toFixed(1)}°C`;
    imageMeteo = paragrapheInfo.insertBefore(imageMeteo, null);

}

function demanderMeteo(pPosition)
{
    const apiKey = "fa36db5e87babab2d66fd8c6fd057c0e";
    xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${pPosition.coords.latitude}&lon=${pPosition.coords.longitude}&appid=${apiKey}&units=metric&lang=fr`);
    xhr.send();
    xhr.onload = onLoad;
    xhr.onerror = onError;
    xhr.onprogress = onProgress;
}