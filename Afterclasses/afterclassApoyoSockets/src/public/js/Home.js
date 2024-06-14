const socket = io();

const videogamesForm = document.getElementById('videogamesForm');

videogamesForm.addEventListener('submit',event=>{
    event.preventDefault();
    const data = new FormData(videogamesForm);
    // //Enviar como JSON, ejemplo
    // const obj = {}
    // data.forEach((value,key)=>obj[key]=value);

    fetch('/api/videogames',{
        method:'POST',
        body: data
    })
})



//eventos de socket
socket.on('newVideogame',data=>{
    //MOSTRAR EL VIDEOJUEGO EN LA PÁGINA
    const newGamesContainer = document.getElementById('newGamesContainer');
    const fragment = document.createDocumentFragment();
    const title = document.createElement('p');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const image = document.createElement('img');
    title.innerHTML = data.title;
    description.innerHTML = data.description;
    price.innerHTML = data.price;
    image.src =  data.thumbnails[0].path;

    fragment.appendChild(title);
    fragment.appendChild(description);
    fragment.appendChild(price);
    fragment.appendChild(image);

    newGamesContainer.appendChild(fragment);
})