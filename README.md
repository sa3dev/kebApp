# KebApp                                                  

![Will-sensei](https://course.oc-static.com/courses/4668271/4668271_teaser_picture_1532326491.jpg)

## Pitch
Application pour un restaurant qui gère les réservations de ses clients et gère ses stocks ou ses factures. Pour chaque réservation, on crée un compte client pour l'associer à sa réservation et compter le nombre de fois qu'il est venu. Une réservation contient le nombre de personnes et les menus qu'ils prenennt. Ces derniers influent sur l'état du stock, lequel permet, en lien avec la liste des fournisseurs, de générer des commandes en-deça d'un certain seuil.

Lorsque l'utilisateur ouvre l'app et se connecte, il a immédiatement accès au calendrier de ses réservations qui lui permet :
- de voir les réservations du jour (code couleur sur le jour) ;
- d'ajouter une réservation rapidement ;
- d'accéder à n'importe quel vue détaillée d'un jour pour y modifier les réservations (nombre de personnes, date de la réservation, etc.).

Les autres fonctionnalités de l'application sont accessibles via le menu en header.

## Fournisseurs
Liste des fournisseurs avec la possibilité d'ajouter, de supprimer ou de modifier un fournisseur (son adresse, son numéro de téléphone, les produits que l'utilisateur lui achète).

Cliquer sur un fournisseur donne les détails du fournisseur. On y retrouve également la possibilité de supprimer et de modifier ce fournisseur en particulier.

## Stock ou inventaire

L'inventaire actuel est affiché sur la page principale de ce composant. Lorsque l'utilisateur  décide de faire son inventaire, il peut modifier les valeurs de ses produits (la quantité, le prix de vente, le prix d'achat), supprimer complètement certains produits ou en ajouter de nouveaux.

## Carte

Affiche le prix que coûte un menu au restaurant (somme des prix de chacun des ingrédients/produits). Chaque menu a un prix de vente et un prix de base (somme des prix des ingrédients). Une alerte indique lorsque le prix de vente est inférieur à la somme du prix des ingrédients et de la marge (`prix de vente < (prix somme produits + marge) --> alert`). 

L'utilisateur peut également créer des menus en fonction des produits/ingrédients disponibles dans sa base et gérer manuellement le prix de vente et de revient en fonction de ses récents achats.

## Clients
Créer un compte client à chaque réservation / l'associer à chacune de ses réservations. 

## Gestion des droits (feature à implémenter)
Le patron a accès à toutes les fonctions (admin), les ''employés'' uniquement à la réservation.

## Conventions d'écriture
Tout les noms doivent être en anglais.

- Tous les noms de fichier sont **en minuscule**
- Les variables sont en **camelCase** : `const maVariableAuNomOriginalMaisComprehensible`
- Les classes en **KebabCase** : `export class AuthenticationService`
- Pas de répétition du type de fichier dans le nom de fichier `ng g module inventaire` (--> *inventaire.module.ts*) et non pas `ng g module inventaire.module` (--> --*inventaire.module.module.ts*--)

## Architecture
Dans `core/users/`, on a choisi de créer un fichier de service pour chaque sous-composant de `./users` (login, register, etc.) afin que chacun puisse travailler indépemment. 
La gestion des produits, étant transversale à toute l'application, est stockée dans le `./core`.

Pour l'instant, les appels API se font dans chacun des services de chaque feature module, ce qui n'est pas idéal puisque la clean architecture impose de passer par le core pour faire dialoguer des feature modules entre eux. Nos deux options sont : 

1. écrire un service API dans le core et réimplémenter tous nos appels dans chacun de nos services de feature modules en fonction de ce service API du core. 
2. continuer à faire les appels API dans les services des feature modules, quitte à répéter du code et à briser le principe de non-communication directe entre les features modules. Exemple : pour afficher la liste des fournisseurs au sein du feature module de l'inventaire, il faut nécessairement importer soit le service des fournisseurs, soit le *model* de fournisseur.
