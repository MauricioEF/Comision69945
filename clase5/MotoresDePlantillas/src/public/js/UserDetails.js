//Esto ya puede utilizar cosas a nivel cliente

console.log("Hola mamá, vengo de un motor de plantillas")

const paragraph  = document.getElementById('message');

paragraph.innerHTML = "Holiiiiii";

const button = document.getElementById('happyButton');
button.addEventListener('click',()=>{
    console.log("Holooooo")
})