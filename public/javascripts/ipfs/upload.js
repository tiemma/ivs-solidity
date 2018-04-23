let path = require('path');

let multer  = require('multer')({ dest: 'uploads/' });

let ipfs = require(path.resolve(__dirname));

upload = blob => {
    const files = [
        {
            path: blob.destination+blob.originalname,
            content: blob.data,
        },
    ];

    ipfs.files.add(files, function(err, files) {
        // 'files' will be an array of objects containing paths and the multihashes of the files added
        console.log(files);

        return files;
    });
};


module.exports = {upload, multer};
