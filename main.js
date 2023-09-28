const continentes = ["America","Europa","Asia."]
const Europa = ["Audi","BMW","Volkswagen","Mercedes","Porsche."]
const America = ["Jeep","Dodge","Ford","Chevrolet."]
const Asia = ["Toyota","Kia","Nissan","Honda."]

function ingresarContinente () {
    let continente = prompt("Ingrese la letra A (para america), la B (para europa) o la C (para asia)")
    while(continente !== "A" && continente !== "B" && continente !== "C" && continente !== "a" && continente !== "b" && continente !== "c"){
        continente = prompt("Respuesta no valida. Elija nuevamente porfavor.")
    }
    if(continente === "A" || continente === "a"){
        let mostrarAmerica = America.join(", ")
        alert('Estas son las marcas de auto Americanas: ' + mostrarAmerica)
    }
    if(continente === "B" || continente === "b"){
        let mostrarEuropa = Europa.join(", ")
        alert('Estas son las marcas de auto Europeas: ' + mostrarEuropa)
    }
    if(continente === "C" || continente === "c"){
        let mostrarAsia = Asia.join(", ")
        alert('Estas son las marcas de auto Asiaticas: ' + mostrarAsia)
    }
}
let seguirPreguntando = true
while(seguirPreguntando){
    ingresarContinente()
    seguirPreguntando = confirm("¿Desea consultar las marcas de auto de otro continente?")
    if(!seguirPreguntando){
        alert("Nos vemos la proxima!")
    }
}
