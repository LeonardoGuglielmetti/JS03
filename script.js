class Producto {

    servcio (nombre, precio, detalle, periodicidad) {

        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.periodicidad = periodicidad;
        this.disponible = true;

    }

    sumarIVA() {
        RETURN this.precio * 1.21;
    }

    vender () {

        this.disponible = false;
    }
    precioSugerido () {

        return this.precio * 1.21 * 1.25;

    }

}

 

var arrayServicios = [] ;

do {

    var comprobacion = prompt('Ingrese un nombre del servicio que va a requerir');

    if (comprobacion === "fin" || comprobacion === "FIN" || comprobacion === "Fin") {

        break;

    } else {

        nombreP = comprobacion;

        var precioS = prompt('Ingrese el precio del servicio');

        var detalleS = prompt ('Ingrese el detalle del servicio');

        var cantidadS =  prompt ('Ingrese la cantidad de horas que requerira el servicio');

        arrayServicios.push(new servcio(nombreP, precioP, detalleP, cantidadP));

    }

}

 

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")

 

console.log(arrayServicios)

 

document.write("<h3> El precio de costo del servicio a calcular es; "+precioCostoM+" </h3>");

 

for (var servcio of arrayServicios) {

    document.write("<h3> El servicio ingresado es: " + servcio.nombre + " </h3>");

    document.write("<h3> El detalle del servicio ingresado es: " + servcio.detalle + " </h3>");

    document.write("<h3> La cantidad en stock del servicio ingresado es: " + servcio.cantidad + " </h3>");

    document.write("<h3> El precio del servicio con IVA: " + servcio.sumarIVA() + " </h3>");

 

    console.log(servicio.nombre);

    console.log(servicio.detalle);

    console.log(servicio.cantidad);

    console.log(servicio.sumarIva());

}