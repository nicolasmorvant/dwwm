function ajouterOperation(event) {
    ajouterUneOperationAuTampon(event.srcElement.value);
}
function ajouterUnChiffreAuTampon(nombre) {
    let tampon = document.querySelector('#tampon');
    tampon.value += nombre;
    console.log(tampon);
}
function ajouterUneOperationAuTampon(operateur) {
    let tampon = document.querySelector('#tampon');
    tampon.value += operateur;
}
function ajouterChiffre(event) {
    console.log('ajouterChiffre:'+event.srcElement.value);
    ajouterUnChiffreAuTampon(event.srcElement.value);
}   
function evaluerExpression(event) {
    let tampon = document.querySelector('#tampon');
    let ecran = document.querySelector('#ecran');
    let resultat = eval(tampon.value);
    ecran.innerHTML = resultat;
    tampon.value = resultat;
    console.log(ecran);
}
function effacerExpression(event) {
    let tampon = document.querySelector('#tampon');
    tampon.value = "";
}
function effacerLastExpression(event) {
    let tampon = document.querySelector('#tampon');
    tampon.value = tampon.value.substring(0, tampon.value.length - 1);
}
function touchePressee(event) {
    console.log(event);
    if ((event.key >= 0) && (event.key <= 9))
        ajouterUnChiffreAuTampon(event.key)
    else
    switch (event.key) {
        case '+': ajouterUneOperationAuTampon('+')
            break;
        case '-': ajouterUneOperationAuTampon('-')
            break;
        case '/': ajouterUneOperationAuTampon('/')
            break;
        case '*': ajouterUneOperationAuTampon('*')
            break;
        case '=':evaluerExpression();
        default:
            console.log(event.key);
            break;
    }
}