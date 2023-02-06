-- CREATE DATABASE 

CREATE DATABASE if not exists myrecipdb DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

use myrecipdb;

-- création de la table recette 

CREATE TABLE IF NOT EXISTS recette
(
    idRecette INT primary key auto_increment,
    titre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    listeIngredients TEXT NOT NULL, 
    listeOperations TEXT NOT NULL
);

-- insertion dans db

insert into recette(titre,description,listeIngredients,listeOperations) values('Paella','une super recette pour la plage','du riz et des trucs','on met dans la poëlle avec de la flotte');