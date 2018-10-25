# KebApp - filrouge

**/!\ DOCUMENTER**

## Pitch
Un restaurant qui gère les réservations de ses clients lesquelles influent sur les stocks. Pour chaque réservation on crée un compte client pour l'associer à sa réservation. Les stocks génèrent des factures toutes prêtes lorsqu'il manque certains produits.

Features additionnelles :
- fait des soirées événement (calendrier public ?) 
- vend du merch (tshirts, pins, etc.).

## Fournisseurs
Liste des fournisseurs, rangés par thème (onglet ?) avec possibilité d'un ajouter ou d'en supprimer un.
Clique sur les fournisseurs donne les détails/infos sur le fournisseur et les modifier.

## Stock
(Utilisé lors de l'inventaire en fin de semaine)
Rentrer le stock restant pour tel produit 

Une fois l'inventaire est validé, génère une commande au fournisseur du stock minimum pour la semaine (*ADD : implémenter en fonction du nombre de réservations*)(*ADD : le patron peut gérer les stocks minimum pour lesquels il veut une alerte*)

## Facture / Commande
Facture gérée en fonction du stock (et du fournisseur)
(*ADD : implémenter une facture client, fonction de la commande*)

## Carte
Possibilité de changer la carte et de la sortir en pdf pour un client

## Clients
Créer un compte client à chaque réservation / l'associer à chacune de ses réservations. 

## Gestion des droits
Le patron a accès à toutes les fonctions, les ''employés'' uniquement à la réservation.

## Conventions d'écriture
Tout les noms doivent être en anglais.

- Tous les noms de fichier sont **en minuscule**
- Les variables sont en **camelCase** : `const maVariableDeBeauGosse`
- Les classes en **KebabCase** : `export class AuthenticationService`
- Pas de répétition du type de fichier dans le nom de fichier `ng g module inventaire` (--> inventaire.module.ts) et non pas `ng g module inventaire.module` (--> inventaire.module.module.ts)
