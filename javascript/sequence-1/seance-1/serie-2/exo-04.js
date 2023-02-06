let temperatureCelsius = prompt("Donnez une température en Celsius : ");
temperatureCelsius=parseInt(temperatureCelsius);

let temperatureKelvin = temperatureCelsius + 273.15;

console.log(`la temperature de ${temperatureCelsius} °Celsius vaut ${temperatureKelvin} en Kelvin`);