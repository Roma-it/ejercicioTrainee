class Vehiculos {
    constructor (marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    }
};
class Moto extends Vehiculos {
    constructor (marca, modelo, cilindrada, precio){
    super (marca, modelo, precio)
    this.cilindrada = cilindrada;
    }
    mostrarVehiculo (){
        console.log(`Marca: ${this.marca} // Modelo: 
        ${this.modelo} // 
        Cilindrada: ${this.cilindrada} // 
        Precio: 
        $ ${Number.parseFloat(this.precio).toFixed(2)}`)
    };   
};
class Auto extends Vehiculos {
    constructor (marca, modelo, puertas, precio){
    super (marca, modelo, precio)
    this.puertas = puertas;
    }
    mostrarVehiculo (){
        console.log(`Marca: ${this.marca} // Modelo: 
        ${this.modelo} // 
        Puertas: ${this.puertas} // 
        Precio: 
        $ ${Number.parseFloat(this.precio).toFixed(2)}`)
    };
};

const concesionaria = {
    vehiculos: [],
    agregarVehiculo (vehiculo){
        this.vehiculos.push(vehiculo);
    },
    mostrarVehiculos (){
        this.vehiculos.forEach(function(vehiculo){
            vehiculo.mostrarVehiculo();
        })
    },
    masCaro () {
        let vehiculoMasCaro = "";
        let precioMasCaro = 0;
        this.vehiculos.forEach(element => {
            if (element.precio > precioMasCaro){
                vehiculoMasCaro = element.marca + " "  + element.modelo;
                precioMasCaro = element.precio;
            }
        });  
        console.log(`Vehiculo más caro:
        ${vehiculoMasCaro}`) 
    },
    masBarato () {
        let vehiculoMasBarato = this.vehiculos[0].marca + " " + this.vehiculos[0].modelo;
        let precioMasBarato = this.vehiculos[0].precio;
        this.vehiculos.forEach(element => {
            if (element.precio < precioMasBarato){
                vehiculoMasBarato = element.marca + " "  + element.modelo;
                precioMasBarato = element.precio;
            }
        });  
        console.log(`Vehiculo más barato:
        ${vehiculoMasBarato}`) 
    },
    contieneY(){
        let vehiculoConY = this.vehiculos.filter(vehiculo => vehiculo.modelo.toLowerCase().indexOf("y") >= 0);
        console.log(`Vehiculo que contiene en
        el modelo la
        letra "Y":
        ${vehiculoConY[0].marca} ${vehiculoConY[0].modelo}
        ${vehiculoConY[0].precio}`)
    },
    ordenados (){
        let vehiculosOrdenados = this.vehiculos.sort((a , b) => a -b);
        console.log(`Vehículos ordenados por
        precio de 
        mayor a menor:`)
        for (i = 0; i < this.vehiculos.length; i++){
        console.log(`${vehiculosOrdenados[i].marca} ${vehiculosOrdenados[i].modelo}`)
        }
    },
    separador (){
        let separador = "";
        for (i = 0; i < 30; i++){
            separador = separador + "=";
        }
        console.log(separador)
    }
}

let moto1 = new Moto('Honda', 'Titan', "125cc", 60000.00);
let moto2 = new Moto('Yamaha', 'YBR', "160cc", 80500.50);
let auto1 = new Auto('Peugeot', '206', 4, 200000.00);
let auto2 = new Auto('Peugeot', '208', 5, 250000.00);
concesionaria.agregarVehiculo(auto1);
concesionaria.agregarVehiculo(moto1);
concesionaria.agregarVehiculo(auto2);
concesionaria.agregarVehiculo(moto2);

concesionaria.mostrarVehiculos();
concesionaria.separador();
concesionaria.masCaro();
concesionaria.masBarato();
concesionaria.contieneY();
concesionaria.separador();
concesionaria.ordenados();