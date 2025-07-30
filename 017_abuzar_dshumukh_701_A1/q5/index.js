const fs = require('fs');
const unzipper = require('unzipper');

function extractZip(zip, folder) {
  fs.createReadStream(zip)
    .pipe(unzipper.Extract({ path: folder }))
    .on('close', () => {
      console.log(`Extraction complete!`);
    })
    .on('error', (err) => {
      console.error('Error during extraction:', err);
    });
}


extractZip('zipped.zip', 'folder');