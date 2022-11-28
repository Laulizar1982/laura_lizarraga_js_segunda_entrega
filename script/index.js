
//VARIABLES 
const contenedorProductos = document.getElementById('contenedor-productos');
const botonesCategorias = document.querySelectorAll (".boton-categoria");

contenedorProductos.innerHTML= "";

showProducts(StockProductos);

function showProducts(products) {
    contenedorProductos.innerHTML= "";
    products.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src=${producto.img} alt= "">
        <h4>${producto.nombre}</h4>
        <p>${producto.descripcion}</p>
        <p>${producto.categoria}</p>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="comprar${producto.id}" class="boton-comprar">Comprar <i class="fas fa-shopping-cart"></i></button>   
        `
        contenedorProductos.appendChild(div);
    
        const boton = document.getElementById(`comprar${producto.id}`)
        //Por cada elemento de mi array, se crea un div, cada uno tiene un id particular, para poder hacer
        // get element by id (el de comprar) Obtengo el elemento y a dicho elemento le agregamos
        //el evento add event listener para que pueda llamarlo.
    
        boton.addEventListener('click', () => {
            agregarAlCarrito(producto.id)
        })
    })
} 

const btnTodos = document.getElementById('todos');
const btnMesas = document.getElementById('mesa');
const btnSillas = document.getElementById('silla');
const btnSillones = document.getElementById('sillon');

btnTodos.addEventListener('click', () => {
    showProducts(StockProductos);
});

btnMesas.addEventListener('click', () => {
    showProducts( StockProductos.filter(producto => producto.categoria == "mesa"))
});

btnSillas.addEventListener('click', () => {
    showProducts( StockProductos.filter(producto => producto.categoria == "silla"))
});

btnSillones.addEventListener('click', () => {
    showProducts( StockProductos.filter(producto => producto.categoria == "sillon"))
});


const contenedorCarrito = document.getElementById('carrito-contenedor')

let carrito = [];

const botonVaciar = document.getElementById('vaciar-carrito')

const botonCarrito = document.getElementById('numerito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito()
    }
})


////COMIENZA EL SIMULADOR////
// PRIMER PASO 

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //Para que se pueda aumentar la cantidad y que no se repita
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //Si existe se actualiza la cantidad.
        const prod = carrito.map (prod => { //creamos un mapa para que encuentre cual es que es igual al agregado 
            // asi le suma la cantidad.
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //En caso que no este, lo agregamos al carrito.
        const item = StockProductos.find((prod) => prod.id === prodId)//Busca las ID
        //Una vez que las obtiene, se hace push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y muestra los productos.
    actualizarCarrito() //Se llama a la función cada vez que se modifica el carrito.
}


// CUARTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento  y nos devuelve su indice.

    carrito.splice(indice, 1) //Le indicamos el indice del elemento ITEM para borrar un elemento.

    actualizarCarrito() //Se llama a la función cada vez que se modifique el carrito.
    
    //Eliminar del local storage
    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
}

const actualizarCarrito = () => {
    //TERCER PASO
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizada.
    //SEGUNDO PASO. Agregar al Modal. Recorremos el array de carrito.
    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal).
        carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    // //QUINTO PASO
    botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))

    actualizarCarrito()
   })
    //SEXTO PASO
    numerito.innerText = carrito.length // se actualiza con la longitud que tenga el carrito.
    //SEPTIMO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro de mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.   
}
