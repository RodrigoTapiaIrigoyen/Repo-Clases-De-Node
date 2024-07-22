const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let nombres = [];

function obtenerNombre() {
  rl.question('Ingresa un nombre (o presiona Enter para terminar): ', (nombre) => {
    if (nombre === '') {
      procesarNombres();
    } else {
      nombres.push(nombre);
      obtenerNombre();
    }
  });
}

function procesarNombres() {
  console.log(`Cantidad de nombres ingresados: ${nombres.length}`);

  const hayRepetidos = nombres.length !== new Set(nombres).size;
  console.log(`¿Existen nombres repetidos?: ${hayRepetidos ? 'Sí' : 'No'}`);

  const nombreMasLargo = nombresuce.red((a, b) => a.length > b.length ? a : b);
  console.log(`El nombre más largo es: ${nombreMasLargo}`);

  const nombreMasCorto = nombres.reduce((a, b) => a.length < b.length ? a : b);
  console.log(`El nombre más corto es: ${nombreMasCorto}`);

  rl.close();
}

obtenerNombre();













































