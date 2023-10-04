// Definir un arreglo de objetos con los datos del proyecto autónomo
const transacciones = [
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
  
  // Acceder a los elementos del arreglo
 console.log(transacciones[0].ID_Transaccion); // Imprime: 1
  console.log(transacciones[2].ID_Comprador); // Imprime: 1003
  console.log(transacciones[4].Fecha_Transaccion); // Imprime: 2023-09-17

  transacciones.forEach(function(transaccion) {
    for (var i = 0; i < 3; i++) {
      console.log(transaccion);
    }
  });

  for (var index in transacciones) {
    var transaccion = transacciones[index];
    for (var i = 0; i < 3; i++) {
      console.log(transaccion);
    }
  }

  for (var transaccion of transacciones) {
    for (var i = 0; i < 3; i++) {
      console.log(transaccion);
    }
  }