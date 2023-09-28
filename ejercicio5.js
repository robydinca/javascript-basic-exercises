let litros = prompt("Introduce el número de litros gastados por tu coche");
let kilometros = prompt("Introduce el número de kilómetros recorridos");
let precio = prompt("Introduce el precio del litro de gasolina");

let consumoLitros = litros / kilometros;
let consumoDinero = consumoLitros * precio;

console.log("El consumo de combustible por kilómetro en litros es: " + consumoLitros + " litros");
console.log("El consumo de combustible por kilómetro en dinero es: " + consumoDinero + " euros");
