let nombreCliente = prompt ("Bienvenido a Aria Sports, ingrese su nombre")
if (nombreCliente !== "") {
    alert ("¡Hola, " + nombreCliente + "!");
} else {alert(prompt("Debe ingresar su nombre"));
    }

const numeroDeProductos = parseInt(prompt("Ingrese la cantidad de productos de su compra"));
let total = 0
for (let i=1; i<= numeroDeProductos; i++) {
    const numeroIngresado = prompt ("Ingrese el costo de su producto para añadir al carrito");
    const numero = parseInt(numeroIngresado);
    if (numero) {
        total = total + numero;
    }
}
alert("El costo total del carrito de compras es: $"+ total);

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

let metodoPago = prompt ('Si desea pagar con efectivo ingrese "efectivo", si desea pagar con tarjeta de debito/credito ingrese "tarjeta" o si desea pagar con mercado pago ingrese "mercadopago"')
switch (metodoPago) {
    case "efectivo" : alert("La compra será abonada en efectivo");
    break;
    case "tarjeta": alert("La compra será abonada con tarjeta");
    break;
    case "mercadopago": alert("La compra será abonada con mercado pago");
    break;
    default: alert("Debe registrar un metodo de pago, intentelo nuevamente")
    break;
}

const saludo = (palabraUno, palabraDos)  => palabraUno + palabraDos;

alert(saludo("¡Muchas gracias ", "por tu compra!" ))




