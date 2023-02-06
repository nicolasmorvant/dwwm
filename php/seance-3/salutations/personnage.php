<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="php.ico" type="image/x-icon">
    <title>Mes Sincères Salutations</title>
</head>
<body>
    <form action="reponse.php" method="post" >
        <fieldset>
            <legend>Identité</legend>
            <input type="text" name="prenom" id="prenom" placeholder="saisissez votre prénom" required>
            <input type="text" name="nom" id="nom" placeholder="saisissez votre nom" required>
            <input type="text" name="titre" id="titre" placeholder="saisissez votre surnom" required>
            <label for="race">Race : </label>
            <select name="race" required>
                <option value="humain" selected>Humain(e)</option>
                <option value="elfe">Elfe</option>
                <option value="orc">Orque</option>
            </select>
            <br><br>
            <label for="rang">Rang : </label>
            <input type="radio" name="rang" value="roturier" checked>
            <label for="roturier">Roturier</label>
            <input type="radio" name="rang" value="noble">
            <label for="noble">Noblesse</label>
            <input type="radio" name="rang" value="royal">
            <label for="royal">Royauté</label>
            <br><br>
        </fieldset>
        <fieldset>
            <legend>Classe(s) du personnage</legend>
            <select name="classe">
                <option value="priest" selected>Prêtre</option>
                <option value="warrior">Guerrier</option> 
                <option value="rogue">Voleur</option>
                <option value="mage">Mage</option> 
            </select>
        </fieldset>
        <input type="submit" value="Dit bonjour">
    </form>
</body>
</html>

