const fs = require('fs');

const data = 'painttestzone/public/images/oeuvres/oeuvre_1.png'

console.log(data)

fs.readFile(data, function (err, data){
          if(err) throw err;

          const images = JSON.parse(data);
          console.log(images)
})