console.log(euroVersDollar(1))
console.log(euroVersCouronne(1))
console.log(dollarVersEuro(1))
console.log(couronneVersEuro(1))

let btnConvertir = document.querySelector('#btn_convertir');
btnConvertir.addEventListener('click',convertir)