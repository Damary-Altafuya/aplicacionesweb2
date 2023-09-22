// Definir interfaz para el objeto de transacción
interface Transaccion {
    ID_Transaccion: number;
    ID_Producto: number;
    ID_Comprador: number;
    Cantidad_Producto: number;
    Fecha_Transaccion: string;
  }
  
  // Definir arreglo de objetos de transacción
  const transacciones: Transaccion[] = [
    {
      ID_Transaccion: 1,
      ID_Producto: 101,
      ID_Comprador: 1001,
      Cantidad_Producto: 3,
      Fecha_Transaccion: "2023-09-21"
    },
    {
      ID_Transaccion: 2,
      ID_Producto: 102,
      ID_Comprador: 1002,
      Cantidad_Producto: 2,
      Fecha_Transaccion: "2023-09-20"
    },
    {
      ID_Transaccion: 3,
      ID_Producto: 103,
      ID_Comprador: 1003,
      Cantidad_Producto: 1,
      Fecha_Transaccion: "2023-09-19"
    },
    {
      ID_Transaccion: 4,
      ID_Producto: 104,
      ID_Comprador: 1001,
      Cantidad_Producto: 5,
      Fecha_Transaccion: "2023-09-18"
    },
    {
      ID_Transaccion: 5,
      ID_Producto: 105,
      ID_Comprador: 1004,
      Cantidad_Producto: 2,
      Fecha_Transaccion: "2023-09-17"
    }
  ];
  
  // Imprimir el arreglo de transacciones
  console.log(transacciones);

  // Recorrer y mostrar 3 veces los elementos del arreglo usando forEach
console.log("Usando forEach:");
transacciones.forEach((transaccion: Transaccion) => {
  for (let i = 0; i < 3; i++) {
    console.log(transaccion);
  }
});

console.log("----------------");

// Recorrer y mostrar 3 veces los elementos del arreglo usando for...in
console.log("Usando for...in:");
for (let index in transacciones) {
  const transaccion: Transaccion = transacciones[index];
  for (let i = 0; i < 3; i++) {
    console.log(transaccion);
  }
}

console.log("----------------");

// Recorrer y mostrar 3 veces los elementos del arreglo usando for...of
console.log("Usando for...of:");
for (let transaccion of transacciones) {
  for (let i = 0; i < 3; i++) {
    console.log(transaccion);
  }
}