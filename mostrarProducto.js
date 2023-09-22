interface Producto {
  ID_Producto: number;
  ID_Artesano: number;
  ID_Categoria: number;
  Nombre_Prod: string;
  Descripcion_Prod: string;
  Precio_Prod: number;
  Categoria: string;
}

const productos: Producto[] = [
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

function buscarProductoPorID(productos: Producto[], ID: number, callback: (producto: Producto | null) => void) {
  let productoEncontrado: Producto | null = null;
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].ID_Producto === ID) {
      productoEncontrado = productos[i];
      break;
    }
  }
  callback(productoEncontrado);
}

function mostrarProducto(producto: Producto | null) {
  if (producto) {
    console.log(producto);
  } else {
    console.log("No se encontró ningún producto con el ID especificado.");
  }
}

buscarProductoPorID(productos, 1, mostrarProducto);

  