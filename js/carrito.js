const reconstruirCarrito = () => {
    micarritoContenedor.innerHTML = "";
    micarritoContenedor.style.display ="flex"
    const miCarritoHeader = document.createElement("div");
    miCarritoHeader.className = "micarrito-header"
    miCarritoHeader.innerHTML =`
        <h1 class="micarrito-header-title"> Carrito </h1>
    `;
    micarritoContenedor.append(miCarritoHeader);

    const micarritoButton = document.createElement("h2");
    micarritoButton.innerText = "x";
    micarritoButton.className ="micarrito-header-button";

    micarritoButton.addEventListener("click", () => {
        micarritoContenedor.style.display = "none";
    });

    miCarritoHeader.append(micarritoButton);

    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "micarrito-content"
        carritoContent.innerHTML = `
            <img src= "${producto.img}">
            <h3> ${producto.nombre}</h3>
            <p> $${producto.precio}</p>
            <span class="sumar"> + </span>
            <p> Cantidad: ${producto.cantidad}</p>
            <span class="restar"> - </span>
            <p> Total Producto: $${producto.cantidad * producto.precio}</p>
            <span class="eliminar-producto"> ❌ </span>
        `;
        micarritoContenedor.append(carritoContent);

        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if (producto.cantidad !==1) {
                producto.cantidad--;
            }
            saveLocal();
            reconstruirCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            producto.cantidad++;
            saveLocal();
            reconstruirCarrito();
        });
        
        let eliminar = carritoContent.querySelector(".eliminar-producto");
        eliminar.addEventListener ("click", () => {
            Swal.fire({
                text: "¿Esta seguro de que quiere eliminar el producto?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: 'No'
            }).then((respuesta) => {
                if(respuesta.isConfirmed) {
                    eliminarProducto(producto.id);
                    }
                });
        });
    

        carritoContent.append(eliminar);
    });
    
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const totalComprado = document.createElement("div");
    totalComprado.className = "total-content";
    totalComprado.innerHTML = `<button class="botonPagar"> Total a pagar: $${total} </button`;
    micarritoContenedor.append(totalComprado);
    
    totalComprado.addEventListener("click", () => {
        if (carrito.length !== 0){
            Swal.fire({
                text: "¿Deseas finalizar tu compra?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: 'Quiero seguir comprando'
            }).then((respuesta) => {
                if(respuesta.isConfirmed) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    })
                    Toast.fire({
                        icon: 'success',
                        title: 'Procesando tu compra'
                    })
                setTimeout(() => {
                    Swal.fire({
                        title: '¡Muchas gracias por tu compra!',
                        icon: "success",
                        input: 'email',
                        inputLabel: 'Para continuar ingrese su email',
                        inputPlaceholder: 'Tu dirección de correo electronico'
                    })
                    .then(() => {
                        eliminarCarrito();
                    })
                },3200);
            }
        })
    }
});

    const vaciarCarrito = document.createElement("h4");
    vaciarCarrito.innerText = "🗑️";
    vaciarCarrito.className = "vaciar-carrito";

    micarritoContenedor.append(vaciarCarrito);

    vaciarCarrito.addEventListener("click", () => {
        if(carrito.length !== 0){
        Swal.fire({
            text: "¿Esta seguro de que quiere eliminar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'No'
        }).then((respuesta) => {
            if(respuesta.isConfirmed) {
                eliminarCarrito();
                }
            });
        }
    });
}

abrirCarrito.addEventListener("click", reconstruirCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoNumero();
    saveLocal();
    reconstruirCarrito();
    
};

eliminarCarrito = () => {
    carrito.splice(0, carrito.length)
    reconstruirCarrito();
    saveLocal();
    carritoNumero();
}

const carritoNumero = () => {
    cantidadCarrito.style.display ="block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoNumero();
saveLocal();
