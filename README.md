# Votre Objectif

 

## Checkpoint : Hosting a MERN App on Microsoft Azure

 

### Objectif:Déployer une application de la pile MERN sur la plateforme cloud Microsoft Azure.


### Instructions

 


## Préparez votre application MERN:

 

Assurez-vous que votre application MERN est entièrement développée et testée localement.
Assurez-vous que le backend de votre application (Node.js/Express) est connecté à MongoDB pour le stockage des données.
Créer un compte Microsoft Azure:

Si vous ne l'avez pas encore fait, ouvrez un compte Microsoft Azure.
Accédez au portail Azure et naviguez jusqu'au tableau de bord.
Configurer MongoDB Atlas:

Comme Azure ne propose pas directement MongoDB en tant que service, utilisez MongoDB Atlas (le service en nuage de MongoDB) pour votre base de données.
Préparez votre application MERN pour le déploiement:

Mettez à jour la configuration de votre application MERN afin d'utiliser des variables d'environnement pour les données sensibles telles que les informations d'identification de la base de données.
Construisez votre frontend React pour la production à l'aide de npm run build.
Créer un service Azure Web App:

Dans le portail Azure, naviguez vers "Créer une ressource" > ; "Web" > ; "Web App".
Remplir les détails requis comme le nom de l'application, le groupe de ressources et la région.
Choisir le niveau de prix approprié en fonction de vos besoins.
Configurer la source de déploiement:

Dans les paramètres de votre Azure Web App, naviguer vers "Deployment Center".
Choisir la source de déploiement comme "Local Git" ou se connecter à votre système de contrôle de version préféré (par exemple..., GitHub).
Déployez votre application MERN:

Si vous utilisez Git local, clonez le dépôt Git de votre Azure Web App sur votre machine locale.
Copiez vos fichiers frontaux React construits dans un dossier de votre projet backend (par ex, server/public).
Commiter et pousser vos changements vers le dépôt Git d'Azure.
Azure détectera automatiquement les changements et déploiera votre application.
Configurer les variables d'environnement:

Dans les paramètres de votre Azure Web App, naviguez jusqu'à "Configuration".
Configurez les variables d'environnement pour votre application MERN, y compris la chaîne de connexion MongoDB et les autres configurations requises.
Tester votre application MERN déployée:

Accédez à votre application MERN déployée via l'URL fournie par Azure.
Testez toutes les fonctionnalités pour vous assurer que le déploiement et la connectivité de la base de données sont corrects.