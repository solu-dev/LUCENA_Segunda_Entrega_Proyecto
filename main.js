// SEGUNDA ENTREGA PROYECTO FINAL 

// Adecuación de proyecto al uso de DOM, STORAGE Y JSON

class posibleAdoptante {
    constructor(nombre, edad, zonaDomicilio, protecciones, empleo){
        this.nombre = nombre;
        this.edad = edad;
        this.zonaDomicilio = zonaDomicilio;
        this.protecciones = protecciones;
        this.empleo = empleo;
        this.aprobado = false;
    }

    aprobar(){
        this.aprobado = true;
    }

    validaAplicante(){

        const Aprobados = [];
        const Rechazados = [];

        if ((this.edad >= 21) && (this.zonaDomicilio == "caba") && (this.protecciones == "si") && (this.empleo == "si")){
            let adoptante = new posibleAdoptante(this.nombre, this.edad, this.zonaDomicilio, this.protecciones, this.empleo);
            adoptante.aprobar();
            Aprobados.push(adoptante);

            let mensaje = document.createElement("h3");
            mensaje.innerHTML = "<h3 class='title-style text-center' >Felicitaciones! Usted reune los requisitos para adoptar. A la brevedad nos estaremos comunicando.</h3>";
            document.body.appendChild(mensaje);

            let aprobadoJSON = JSON.stringify(Aprobados);
            almacenar("adoptanteAprobado", aprobadoJSON);

        }else{
            let desestimado = new posibleAdoptante (this.nombre, this.edad, this.zonaDomicilio, this.protecciones, this.empleo);
            Rechazados.push(desestimado);

            let mensaje = document.createElement("h3");
            mensaje.innerHTML = "<h3 class='title-style text-center' >Usted no reune los requisitos de adopción por lo cual lamentablemente no puede adoptar.</h3>";
            document.body.appendChild(mensaje);

            let rechazadoJSON = JSON.stringify(Rechazados)
            almacenar("adoptanteRechazado", rechazadoJSON);

        }

        console.log("Aprobados");
        console.log(sessionStorage.getItem("adoptanteAprobado"));
        console.log("Rechazados");
        console.log(sessionStorage.getItem("adoptanteRechazado"));

    }
}


function almacenar(clave, valor){

    sessionStorage.setItem(clave, valor);
    
}


function cargaDatos() {
    
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let zonaDomicilio = document.getElementById("zona").value;
    let protecciones = document.getElementById("protecciones").value;
    let empleo = document.getElementById("empleo").value;

    const aplicante = new posibleAdoptante(nombre, edad, zonaDomicilio, protecciones, empleo);
    aplicante.validaAplicante();

}


let button = document.getElementById("sendForm");
button.addEventListener("click", cargaDatos);
