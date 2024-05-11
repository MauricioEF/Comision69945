
export const validatePosition = (array,pos) =>{ //true si es válido, false si es inválido
    if(isNaN(pos)){ //NaN === Not a Number
        return {
            valid:false,
            reason:"Not a number",
            parsedPosition:null
        }
    }
    //La posición me llegó como string, necesito convertirla a número
    const parsedPosition = parseInt(pos);

    if(parsedPosition<=0||parsedPosition>array.length){
        //No puedo acceder al arreglo
        return {
            valid:false,
            reason: "Out of bound",
            parsedPosition:null
        }
    }

    return {
        valid:true,
        reason:null,
        parsedPosition
    }
}