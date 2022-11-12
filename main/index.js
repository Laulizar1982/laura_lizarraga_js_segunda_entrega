const imperial = {
    name: 'Honey-Ipa-Red Imperial',
    amount: 5500,
    discount: 20,
    threadhold: 3
};
const andes = {
    name: 'Honey-Ipa-Red Andes',
    amount: 6500,
    discount: 15,
    threadhold: 5
};
const antares = {
    name: 'Antares Premium',
    amount: 4200,
    discount: 5,
    threadhold: 2
};

const customerName = completeName();

 function completeName() {
  let customerName = prompt("Bienvenido a Tuscervezas.com! Cual es su nombre?")
    console.log(`validacion > ${customerName.trim().length == 0}`)
   while(customerName.trim() == "") {
       customerName = prompt ('Debe ingresar su nombre para poder avanzar')
   } 
  return customerName
 }



let selectedOption = parseInt(
    prompt(
        `Que desea adquirir? ${customerName}
            1. Realizar una compra
            2. Registrarse para recibir descuentos y ofertas exclusivas
            3. Salir`
        )
);

let beerOfertSelected;
let quantity;
let amount;

switch (parseInt(selectedOption)){ 
    case 1 : 
        beerOfertSelected = selectBeerOfferts();
        quantity = parseInt(prompt(`Por favor indicar la cantidad de packs que desea adquirir:`));
        amount = calculateAmount(beerOfertSelected, quantity)
        alert(`El valor de tu compra es de $${amount}`)
        showExitMessage()
        break;  

    case 2 : 
        subscribeFlow();
        break; 

    case 3 : 
        showExitMessage();
        break; 

    default: 
        showError()
        break;       
} 

function selectBeerOfferts() {
    selection = prompt(`Disponemos de packs en oferta. Cual desea elegir en el día de hoy?:
        1. Pack 24 u Cerveza ${imperial.name}
        2. Pack 24 u Cerveza ${andes.name} 
        3. Pack 24 u Cerveza ${antares.name}`)

        switch(parseInt(selection)) {
            case 1 : 
                alert(`Usted seleccionó la opción Pack 24 u ${imperial.name}, el valor por pack es de $${imperial.amount}.`);
                return imperial;
            
            case 2 :
                alert(`Usted seleccionó la opción Pack 24 u ${andes.name}, el valor por pack es de $${andes.amount}`);
                return andes;
            case 3 :
                alert(`Usted seleccionó la opción Pack 24 u ${antares.name}, el valor por pack es de $${antares.amount}`);
                return antares;
            
            default:
                alert("La opcion seleccionada es incorrecta. Elija 1, 2 o 3.");
                selectBeerOfferts();
                break;
        }
};

function calculateAmount(beerOfertSelected, quantity) {
    let amount = beerOfertSelected.amount * parseInt(quantity)

    if(quantity >= beerOfertSelected.threadhold) {
        alert(`Como compraste mas de ${beerOfertSelected.threadhold} tendras un descuento del %${beerOfertSelected.discount}`)
        let discount = (amount * beerOfertSelected.discount) / 100
        return amount - discount
    } else {
        return amount
    }
}

function subscribeFlow() {

    alert("Por favor registrate para acceder a nuestras ofertas y descuentos. A continuación, ingrese los siguientes datos:");

    let registro = {
        nombre: prompt("Ingrese su nombre"),
        apellido: prompt("Ingrese su apellido"),
        edad: prompt("ingrese su edad"),
        email: prompt("Ingrese su email"),
    };

    let nombre = registro["nombre"];
    let apellido = registro["apellido"];
    let edad = registro["edad"];
    let email = registro["email"];

    alert(`Gracias por registrarse, ${nombre} ${apellido}. Le estaremos enviando nuestras promociones y descuentos a ${email}.`);
}

function showError() {
    alert("lo siento, la opción ingresada no se encuentra disponible") ;
    showExitMessage();
}

function showExitMessage() { 
    alert(" Gracias por visitar Tuscervezas.com");
} 
