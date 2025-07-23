
const usuario = [
  { nombre: "Jorge", contraseña: "1111" },


]

  let contraseñaIngresada= prompt ("Ingrese su contraseña")
  
  




console.log("Control de stock" )

let arroz = 21;
let fideos = 50
let gaseosas = 75

if (arroz < 25) {
    console.log("tenes menos de 25 paquetes de arroz")
} 
else {
    console.log ("No es necesario abastecer")
}

if (fideos < 50) {
    console.log("tenes menos de 50 paquetes de fideos")
} 
else {
    console.log ("No es necesario abastecer")
}

if (gaseosas < 75) {
    console.log("tenes menos de 75 botellas de gaseosas")
} 
else {
    console.log ("No es necesario abastecer")
}

console.log ("Facturacion semanal")

function totalSemanal (){
    let lunes = 200000
    let martes = 230000
    let miercoles = 500000
    let jueves =700000
    let viernes = 100002
    let semanadeFacturacion = lunes + martes + miercoles + jueves + viernes
    return semanadeFacturacion
    
}
console.log("Recaudacion =  " +  totalSemanal())






