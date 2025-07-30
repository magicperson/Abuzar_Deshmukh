const fs = require('fs');
const archiver = require('archiver');
function zip(sourcefolder,outpath)
{
    const output = fs.createWriteStream(outpath);
    const achive = archiver('zip', { zlib: { level: 9 } });
    output.on('close',()=>{
    console.log(` Folder zip successfully`);
    });
    achive.on('error', err => { throw err; });
    achive.pipe(output);
    achive.directory(sourcefolder,false);
    achive.finalize();


}

zip('folder','zipped.zip' );