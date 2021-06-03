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

let discount = 1

let tripChosen = []

 function chooseTrip() {

    let city = document.getElementById("city").value;  

    let cityChosen = city.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

    let passengers = document.getElementById("passengers").value;

    tripChosen.push(new Trip(cityChosen, passengers, discount));


    }
console.log(tripChosen[0])

//NUEVA INSTANCIA DE VIAJE GUARDANDO EN UN ARRAY VACIO

//const tripChosen = [];

//function tripPrice() {

  //  tripChosen.push(new Trip(cityChosen, passengers, discount));

    //console.log(tripChosen);

//}

//tripPrice();
//tripChosen[0].discountRate();

//document.getElementById("title").innerHTML = "Resumen";
//document.getElementById("city").innerHTML = ("La ciudad elegida fue " + tripChosen[0].city);
//document.getElementById("numberPassengers").innerHTML = ("Numero de pasajeros: " + 
//tripChosen[0].numbersPassengers);
//document.getElementById("priceAir").innerHTML = ("El precio total para de el viaje es " + 
//tripChosen[0].priceAir());