class TicketManager {
    #fee = 0.15;

    constructor(){
        this.events = [];
    }

    getEvents = () => {
        return this.events
    }

    addEvent = ({title,place,price,capacity=50,date=new Date()}) => {
        const newEvent = {
            title,
            place,
            price:price+price*this.#fee,
            capacity,
            participants: [],
            date:date.toLocaleDateString('es')
        }
        if(this.events.length>0){
            newEvent.id = this.events[this.events.length-1].id+1;
        }else{
            newEvent.id = 1;
        }
    }

    addUser = (eventId,userId) => {
        //Lo primero es, tengo que ver si el evento existe.
        const event = this.events.find((event)=>event.id === eventId);
        if(!event){
            //No existe el evento
            console.log("No se puede agregar al usuario a un evento inexistente");
            return;
        }
        
        //¿Y si el usuario ya está registrado?
        if(!event.participants.includes(userId)){
            //Si aún no está el usuario, lo agrego.
            event.participants.push(userId);
        }else{
            //El usuario ya existía
            console.log("El usuario ya está registrado");
            return;
        }
    }
}

addEvent({
    //info del evento
    title:"Evento feliz Pero con quesito",
    place:"HAPPYLAND",
    price:20,
    capacity:20,
    date:new Date('10-30-2024')
})