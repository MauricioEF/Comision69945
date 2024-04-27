const chatBox = "         a ";

if(chatBox.trim().length==0){
    //El muy gracioso no envió nada
    console.log("No puedo enviar tu mensaje");
}
else{
    console.log(chatBox);
}

const coordinates = [1,2,3,[0.5,0.4], [2,3,4],[1],10,2020]

console.log(coordinates.flat());