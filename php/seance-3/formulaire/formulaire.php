<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="php.ico" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
    <title>Formulaire</title>
</head>
<body>
    <div class="conteneur">
        <form action="reponse.php" method="post">
            <fieldset>
                <legend>TP formulaire avec du php</legend>
                <div>
                    <select name="abbreviation" id="">
                        <option value="monsieur">M.</option>
                        <option value="madame">Mme</option>
                        <option value="mademoiselle">Mlle</option>
                    </select>
                    <label form="nom">Nom : </label>
                    <input type="text" name="nom" id="">
                </div>
                <div>
                    <label for="prenom">Prénom : </label>
                    <input type="text" name="prenom" id="">
                </div>
                <div>
                    <label for="naissance">Votre année de naissance : </label>
                    <input type="text" name="naissance" id="">
                </div>
                <div>
                    <label for="identifiant">Donnez votre identifiant : </label>
                    <input type="text" name="identifiant" id="">
                </div>
                <div>
                    <label for="motdepasse">Mot de passe : </label>
                    <input type="password" name="motdepasse" id="">
                </div>
                <div>
                    <label for="sexe">Sexe : </label>
                    <input type="radio" name="sexe" id="homme" value="homme" checked>
                    <label for="homme">Homme</label>
                    <input type="radio" name="sexe" id="femme" value="femme">
                    <label for="femme">Femme</label>
                </div>
                <div>
                    <label for="niveau">Je débute en PHP</label>
                    <input type="checkbox" name="niveau" id="">
                </div>
                <input type="submit" value="Envoyer">
            </fieldset>
        </form>
    </div>
</body>
</html>