let nombreCliente = prompt ("Bienvenido a Aria Sports, ingrese su nombre");
if (nombreCliente !== "") {
    alert ("¡Hola, " + nombreCliente + "!");
} else {alert(prompt("Debe ingresar su nombre"));
    }

    class Producto {
        constructor(entrada){
            this.precio= parseFloat(entrada.precio);
            this.cantidad = parseInt(entrada.cantidad);
        }
    }
    let precio;
    let cantidad;
    let total = 0

    const numeroDeProductos = parseInt(prompt("Ingrese la cantidad de artículos de su compra"));
    const listaDeProductos = [];
    for (let i=1; i<= numeroDeProductos; i++) {
        const articulo = prompt ("Ingrese el nombre del producto ");
        const precio = (prompt ("Ingrese el costo del producto para añadir al carrito"));
        const cantidad = (prompt ("Ingrese la cantidad"));
        const producto = new Producto ({precio: precio, cantidad: cantidad});
        const numero = parseInt(precio);
        if (numero) {
        total = total + (numero * cantidad) ;
    }
        if(articulo) {
            listaDeProductos.push(articulo);
        }
    }

    alert("La lista de productos es:\n" + listaDeProductos.map(item => item.toUpperCase()).join("\n") + "\nEl costo total del carrito de compras es: $"+ total);
    
    console.log(listaDeProductos);
    const filtro = listaDeProductos.filter((producto) => {
        return producto.cantidad == 2
    })
    console.log(filtro);
    

let costoCompra 
const descuento = 10

function descuentoCompra (costoTotal) {
   return costoTotal - (costoTotal * (descuento/100)) 
}

let costoProductos = total
    if ((costoProductos>= 500) && (costoProductos > 0)) {
        alert(nombreCliente + ", tu compra recibira un descuento del 10% por haber superado los $500, por lo tanto el costo total de su compra es: " + descuentoCompra (costoProductos));
    } else { alert ( nombreCliente + ", tu compra no recibirá descuento por no haber superado los $500");
}



let metodoPago = parseInt(prompt ("Elija su metodo de pago: \n 1. Efectivo\n 2. Tarjeta\n 3. Mercado pago"))
switch (metodoPago) {
    case 1 : alert("La compra será abonada en efectivo");
    break;
    case 2: alert("La compra será abonada con tarjeta");
    break;
    case 3: alert("La compra será abonada con mercado pago");
    break;
    default: alert("Debe registrar un metodo de pago, intentelo nuevamente")
    break;
}

const saludo = (palabraUno, palabraDos)  => palabraUno + palabraDos;

alert(saludo("¡Muchas gracias ", "por tu compra!" ))




