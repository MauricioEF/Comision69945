
const customMiddleware = (req,res,next) => {
    req.papa = "Este papa no existía, lo creé hasta el middleware";
    console.log(`Me llegó una petición a ${req.url}`);
    if(req.query.role==="admin"){
        return next();
    }else{
        res.status(403).send("Debes ser admin para este servidor");
    }
    
}

export default customMiddleware;