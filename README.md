# KebApp - filrouge

**/!\ DOCUMENTER**                                                      

## Pitch
Application pour un restaurant qui gère les réservations de ses clients et gère ses stocks ou ses factures. Pour chaque réservation, on crée un compte client pour l'associer à sa réservation et compter le nombre de fois qu'il est venu. Les stocks génèrent des factures toutes prêtes lorsqu'il manque certains produits.

Features additionnelles :
- fait des soirées événement (calendrier public ?) 
- vend du merch (tshirts, pins, etc.)

## Fournisseurs
Liste des fournisseurs avec la possibilité d'ajouter (`POST`), de supprimer (`DELETE`) ou de modifier un fournisseur (`UPDATE`).

Cliquer sur un fournisseur donne les détails du fournisseur (attention au routing et `/:id`). On y retrouve également la possibilité de supprimer et de modifier ce fournisseur en particulier.

## Stock (et facture)

L'inventaire actuel est affiché sur la page principal de ce composant. Lorsque l'admin décide de faire son inventaire, il peut modifier les valeurs de ses produits (la quantité, `UPDATE`), en supprimant complètement certains produits (`DELETE`) ou en ajoutant certains (`POST`).

Feature à implémenter : une fois l'inventaire validé, on génère une commande au fournisseur du stock minimum pour la semaine (*ADD : implémenter en fonction du nombre de réservations*)(*ADD : le patron peut gérer les stocks minimum pour lesquels il veut une alerte*).

## Carte

Affiche le prix que coûte un menu au restaurant (somme des prix de chacun des ingrédients/produits). Chaque menu a un prix de vente et un prix de base (somme des prix des ingrédients). Une alerte indique lorsque le prix de vente est inférieur à la somme du prix des ingrédients et de la marge (`prix de vente < (prix somme produits + marge) --> alert`). 

*ADD : possibilité de créer des menus en fonction des produits/ingrédients et de gérer manuellement la marge par menu*.

## Clients
Créer un compte client à chaque réservation / l'associer à chacune de ses réservations. 

## Gestion des droits (feature à implémenter)
Le patron a accès à toutes les fonctions, les ''employés'' uniquement à la réservation.

## Conventions d'écriture
Tout les noms doivent être en anglais.

- Tous les noms de fichier sont **en minuscule**
- Les variables sont en **camelCase** : `const maVariableDeBeauGosse`
- Les classes en **KebabCase** : `export class AuthenticationService`
- Pas de répétition du type de fichier dans le nom de fichier `ng g module inventaire` (--> inventaire.module.ts) et non pas `ng g module inventaire.module` (--> inventaire.module.module.ts)

## Architecture
Dans core/users/, on a choisi de créer un fichier de service pour chaque sous-composants de ./users
Pour users, on spécifie un fichier de service pour chaque component. Cela évite aussi d'avoir tous les services mélangés dans un même fichier (en l'occurrence users.service.ts). C'est peut-être aussi plus pratique pour les tests (?). 