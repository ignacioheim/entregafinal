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

let discount = 1;

let tripChosen = []

function chooseTrip() {
    // Se capturan los valores
    let city = document.getElementById("city").value;  
    let cityChosen = city.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    let passengers = document.getElementById("passengers").value;
    // Se inserta dentro del array
    tripChosen.push(new Trip(cityChosen, passengers, discount));
    // Se llama a la función
    renderResult();
    }
    function renderResult() {
    const lastTrip = tripChosen.slice(-1);
    lastTrip[0].discountRate();
    localStorage.setItem("Trip", JSON.stringify(lastTrip));
    document.getElementById("title").innerHTML = "Resumen";
    document.getElementById("city").innerHTML = ("La ciudad elegida fue " + lastTrip[0].city);
    document.getElementById("numberPassengers").innerHTML = ("Numero de pasajeros: " + 
    lastTrip[0].numbersPassengers);
    document.getElementById("priceAir").innerHTML = ("El precio total para de el viaje es " + 
    lastTrip[0].priceAir());
    }