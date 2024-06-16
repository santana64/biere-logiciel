# Beer Inventory Management

## Description
Ce projet est une application de gestion d'approvisionnement en bière avec authentification pour les patrons et les salariés. L'application permet aux utilisateurs de gérer les stocks de bière, d'ajouter de nouvelles entrées, de mettre à jour les informations et de supprimer des articles.

## Technologies utilisées
- **Backend** : Node.js avec Express.js
- **Base de données** : MongoDB
- **Frontend** : React.js
- **Authentification** : JSON Web Tokens (JWT)
- **Déploiement** : Heroku pour le backend et Netlify pour le frontend

## Prérequis
- Node.js et npm : [Télécharger Node.js](https://nodejs.org/)
- MongoDB : [Télécharger MongoDB](https://www.mongodb.com/try/download/community)
- Git : [Télécharger Git](https://git-scm.com/)

## Installation

### 1. Cloner le dépôt
Clonez ce dépôt sur votre machine locale :

git clone https://github.com/santana64/biere-logiciel.git
cd biere-logiciel

2. Configurer le backend
Initialiser le projet backend
Naviguez dans le dossier principal du projet et installez les dépendances :

npm install
Configurer les variables d'environnement

Créez un fichier .env à la racine du projet et ajoutez-y la ligne suivante :

env

JWT_SECRET=your_jwt_secret_key
Remplacez your_jwt_secret_key par une clé secrète de votre choix.

Démarrer MongoDB
Assurez-vous que MongoDB est en cours d'exécution. Vous pouvez le démarrer avec la commande suivante si vous avez installé MongoDB en tant que service :

mongod

3. Configurer le frontend
Initialiser le projet frontend
Naviguez dans le dossier client et installez les dépendances :


cd client
npm install


4. Démarrer l'application
Démarrer le serveur backend
Depuis le dossier principal (beer_inventory), démarrez le serveur backend :

npm start

Démarrer le serveur frontend
Naviguez dans le dossier client et démarrez le projet React :

cd client
npm start

5. Utilisation de l'application
Accédez à l'application via votre navigateur à l'adresse suivante :
arduino

http://localhost:3000

Fonctionnalités
Inscription et Connexion : Les utilisateurs peuvent s'inscrire et se connecter en tant que patrons ou salariés.
Gestion des stocks : Les utilisateurs peuvent ajouter, mettre à jour et supprimer des stocks de bière.
Dépannage
Problèmes de dépendances : Si vous rencontrez des erreurs de dépendance, essayez de réinstaller les modules Node.js avec la commande npm install.
Problèmes d'authentification : Assurez-vous que vous utilisez les bonnes informations d'identification GitHub et que vous avez configuré les clés SSH ou les jetons d'accès personnels correctement.
MongoDB ne fonctionne pas : Assurez-vous que le service MongoDB est en cours d'exécution et écoute sur le port 27017.
Contribution
Les contributions sont les bienvenues. Pour proposer des modifications, veuillez cloner le dépôt, créer une branche, effectuer vos modifications et soumettre une pull request.
