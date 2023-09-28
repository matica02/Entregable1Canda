// *** MICRODESAFIO *** //

// CREO MI ARRAY VACIO
// const productos = []

// //CREO MI FUNCION PARA CARGAR PRODUCTOS
// function cargarProductos () {
//     // PREGUNTO QUE PRODUCTO QUIERE AGREGAR
//     let nombreProducto = prompt("¿Qué producto desea agregar?").toLowerCase()


//     //REVISO QUE NO INGRESE ESPACIOS VACIOS
//     while(nombreProducto.trim() === ""){
//         nombreProducto = prompt("No ingreses espacios vacíos! Ingresa un nombre")
//     }

//     //REVISO SI EL PRODUCTO EXISTE DENTRO DE MI ARRAY
//     if(productos.includes(nombreProducto)){
//         alert("El producto ya se encuentra, ingresa otro")
//     }
//     //SI NO EXISTE, LO AGREGO
//     else{
//         productos.push(nombreProducto)
//         alert("El producto se ingresó correctamente")
//     }
// }

// let seguirComprando = true;

// while(seguirComprando){
//     cargarProductos()
//     seguirComprando = confirm("¿Desea agregar otro producto?")

//     if(!seguirComprando){
//         let productosAMostrar = productos.join(" / ")
//         alert(`Los productos agregados son ${productosAMostrar}`)
//     }
// }

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
