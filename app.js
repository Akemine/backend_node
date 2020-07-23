const express = require('express') // Require express serveur

const path = require('path'); // require path pour trouver un directory
const fs = require('fs'); // require filesystem pour lire et écrire

const app = express()
let images = [] // Tableau des images (oeuvres)

// Chemin des images (oeuvres)
const directoryPath = path.join('../public_html/images/oeuvres');

  // On lit le directory des images
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
    return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
              images.push(file) // On push les images dans le tableau
    });
});

          // Middleware qui accepte toutes les connexions.
          app.use((req, res, next) => {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin,  Content-Type, Authorization');
                    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
                    next();
          });


        // On envoie le tableau des images
        // GET
          app.use('/images', (req, res, next) => {
            
                            

                    res.status(200).json(images);
          })


module.exports = app;
