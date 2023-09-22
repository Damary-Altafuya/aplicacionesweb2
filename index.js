// Definir un arreglo de objetos con 5 elementos
const productos = [
  {
    ID_Producto: 1,
    ID_Artesano: 101,
    ID_Categoria: 1,
    Nombre_Prod: "Producto 1",
    Descripcion_Prod: "Descripción del producto 1",
    Precio_Prod: 10.99,
    Categoria: "Categoría 1"
  },
  {
    ID_Producto: 2,
    ID_Artesano: 102,
    ID_Categoria: 2,
    Nombre_Prod: "Producto 2",
    Descripcion_Prod: "Descripción del producto 2",
    Precio_Prod: 15.99,
    Categoria: "Categoría 2"
  },
  {
    ID_Producto: 3,
    ID_Artesano: 103,
    ID_Categoria: 1,
    Nombre_Prod: "Producto 3",
    Descripcion_Prod: "Descripción del producto 3",
    Precio_Prod: 12.99,
    Categoria: "Categoría 1"
  },
  {
    ID_Producto: 4,
    ID_Artesano: 104,
    ID_Categoria: 3,
    Nombre_Prod: "Producto 4",
    Descripcion_Prod: "Descripción del producto 4",
    Precio_Prod: 20.99,
    Categoria: "Categoría 3"
  },
  {
    ID_Producto: 5,
    ID_Artesano: 105,
    ID_Categoria: 2,
    Nombre_Prod: "Producto 5",
    Descripcion_Prod: "Descripción del producto 5",
    Precio_Prod: 18.99,
    Categoria: "Categoría 2"
  }
];

// Acceder a los elementos del arreglo
console.log(productos[0]);  // Imprime el primer producto
console.log(productos[1].Nombre_Prod);  // Imprime el nombre del segundo producto
console.log(productos[2].ID_Categoria); // Imprime la id categoria
console.log(productos[5].Precio_Prod); // Imprime el precio



// Método 1: forEach
console.log("Recorriendo con forEach:");
productos.forEach(function(producto) {
  console.log(producto);
});

// Método 2: for...in
console.log("\nRecorriendo con for...in:");
for (var index in productos) {
  console.log(productos[index]);
}

// Método 3: for...of
console.log("\nRecorriendo con for...of:");
for (var producto of productos) {
  console.log(producto);
}