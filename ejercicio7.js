let comensales = prompt("Introduce el número de comensales");
let patatas = comensales * 200;
let huevos = (patatas / 1000) * 5;
let cebolla = (patatas / 1000) * 300;

console.log(`Para ${comensales} comensales necesitas ${patatas} gramos de patatas, ${huevos} huevos y ${cebolla} gramos de cebolla`);
