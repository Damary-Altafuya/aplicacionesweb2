// Definir arreglo de elementos
var transacciones = [
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
  
  // Definir función con callback
  function buscarTransaccionPorID(transacciones, ID, callback) {
    var transaccionEncontrada = null;
    for (var i = 0; i < transacciones.length; i++) {
      if (transacciones[i].ID_Transaccion === ID) {
        transaccionEncontrada = transacciones[i];
        break;
      }
    }
    callback(transaccionEncontrada);
  }
  
  // Definir función de callback para mostrar el objeto por consola
  function mostrarTransaccion(transaccion) {
    if (transaccion) {
      console.log(transaccion);
    } else {
      console.log("No se encontró ninguna transacción con el ID especificado.");
    }
  }
  
  // Llamar a la función con el callback para buscar y mostrar la transacción por ID
  buscarTransaccionPorID(transacciones, 2, mostrarTransaccion);

  