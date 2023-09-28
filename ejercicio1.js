let unidades = prompt("Introduce el número de unidades");
let baseImponible = prompt("Introduce la base imponible");
const IVA = 0.21;

let subtotal = unidades * baseImponible;
let iva = subtotal * IVA;
let total = subtotal + iva;

console.log("Subtotal: " + subtotal);
console.log("IVA: " + iva);
console.log("Total: " + total);




