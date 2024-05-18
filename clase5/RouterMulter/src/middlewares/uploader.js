import multer from 'multer';

//La variable storage la puedes entender como "¿Dónde se van a guardar los archivos que se suban?"

const storage = multer.diskStorage({
    //La carpeta destino
    destination:function(req,file,cb){
        cb(null,`./src/public/images`);
    },
    //¿Con qué nombre lo guardo?
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    },
})

const uploader = multer({storage})

export default uploader;