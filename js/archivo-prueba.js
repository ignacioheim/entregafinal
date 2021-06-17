// CLASE ELECCIÓN DE VIAJE

class Trip {
    constructor (city, numbersPassengers, discount) {
        this.city = city;
        this.numbersPassengers = numbersPassengers;
        this.discount = discount;
    }
    discountRate() {
        if (this.numbersPassengers == 1) {
            this.discount = 1;
        }
        else if (this.numbersPassengers == 2) {
            this.discount = 0.95;
        }
        else if (this.numbersPassengers == 3) {
            this.discount = 0.90;
        } 
        else if (this.numbersPassengers == 4) {
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

const URLJSON = "db/imagenes.json"

// ELECCIÓN DE CIUDAD

let passengers = 1;

let discount = 1;

let tripChosen = [];

const guardarViaje = (clave, valor) => { localStorage.setItem(clave, valor) };

let formulario = document.getElementById("form")
formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {
    e.preventDefault();
    let city = document.getElementById("city").value; 
    let cityChosen = city.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    let passengers = document.getElementById("passengers").value;
    tripChosen.push(new Trip(cityChosen, passengers, discount));
    for(let item of tripChosen){
        guardarViaje(item.city, JSON.stringify(item.numbersPassengers));
    }
    renderResult();
    }
    function renderResult() {
    const lastTrip = tripChosen.slice(-1);
    lastTrip[0].discountRate();    
    lastTrip[0].priceAir();
    
    for(let item of lastTrip){
    $("main").append(`<div id="color">
        <h4> Ciudad: ${item.city}</h4>
        <p> Número de pasajeros: ${item.numbersPassengers}</p>
        <p> Precio del vuelo: ${item.priceAir()}</p></br>
        </div>`);
        
        $("#color").css("color", "blue")

        $("#color").append("<button id='btn'>Ver imagen</button>");
    }
        $("#btn").click( () => {
        $.getJSON(URLJSON, function (respuesta, estado) {
            if(estado === "success") {
                let misdatos = respuesta;
                for (const dato of misdatos) {
                    if (lastTrip[0].city == dato.id) {
                    $("#color").append(`<div>
                                        <img src="${dato.image}" width="700" height="400">
                                        </div>`)    }
                                            }
                                    }
                                                        }
                )    
            }
    )
    $('#color').append('<button id="btnjQuery">Nuevo viaje</button>');
    $('#btnjQuery').on('click', function () {
        location.reload();
    });
    }   
