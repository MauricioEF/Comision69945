import multer from 'multer';

import __dirname from '../utils.js';

const storage = multer.diskStorage({
    //Carpeta de destino
    destination:function(req,file,cb){
        let dinamicFolder;
        switch(req.baseUrl){
            case "/api/videogames":
                dinamicFolder = "videogames"
        }
        return cb(null,`${__dirname}/public/files/${dinamicFolder}`)
    },
    //El nombre final del archivo a cargar
    filename: function(req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uploader = multer({storage});

export default uploader;