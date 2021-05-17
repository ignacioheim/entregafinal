// CLASE ELECCIÓN DE VIAJE

class Trip {
    constructor (city, numbersPassengers, discount) {
        this.city = city;
        this.numbersPassengers = numbersPassengers;
        this.discount = discount;
    }
    discountRate() {
        if (passengers == 1) {
            this.discount = 1;
        }
        else if (passengers == 2) {
            this.discount = 0.95;
        }
        else if (passengers == 3) {
            this.discount = 0.90;
        } 
        else if (passengers == 4) {
            this.discount = 0.85
        }
    }
    priceAir() {
        switch (this.city) {
            case "Tokio":
              return Intl.NumberFormat().format((this.numbersPassengers * 32000) * this.discount);
              break; // APLICO Intl.NumberFormat().format() para mostrar decimales
            case "Shangai":
               return Intl.NumberFormat().format((this.numbersPassengers * 40000) * this.discount);
               break; // APLICO Intl.NumberFormat().format() para mostrar decimales
            case "Hong Kong":
               return Intl.NumberFormat().format((this.numbersPassengers * 45000) * this.discount);
               break; // APLICO Intl.NumberFormat().format() para mostrar decimales
            case "Singapur":
               return Intl.NumberFormat().format((this.numbersPassengers * 50000) * this.discount);
               break; // APLICO Intl.NumberFormat().format() para mostrar decimales
          }
    }
}


// ELECCIÓN DE CIUDAD

let city = () => prompt("Elige entre Tokio, Shangai, Hong Kong y Singapur.");

let cityChosen = city().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

// NUMERO DE PASAJEROS

let passengers = 1;

function numbersPassengers () {
  passengers = parseInt(prompt("Ingrese el numero de pasajeros, recordá que se agrega un 5% \
  de descuento por cada persona que se suma (max. 4 pasajeros)"))
}
numbersPassengers();

// DESCUENTO APLICADO

let discount = 1

// NUEVA INSTANCIA DE VIAJE GUARDANDO EN UN ARRAY VACIO

const tripChosen = [];

tripChosen.push(new Trip(cityChosen, passengers, discount));

tripChosen[0].discountRate();

/*
alert("La ciudad elegida fue " + tripChosen[0].city);
alert("Numero de pasajeros: " + tripChosen[0].numbersPassengers);
alert("El precio total para de el viaje es " + tripChosen[0].priceAir());
*/

document.getElementById("title").innerHTML = "Resumen";
document.getElementById("city").innerHTML = ("La ciudad elegida fue " + tripChosen[0].city);
document.getElementById("numberPassengers").innerHTML = ("Numero de pasajeros: " + 
tripChosen[0].numbersPassengers);
document.getElementById("priceAir").innerHTML = ("El precio total para de el viaje es " + 
tripChosen[0].priceAir());