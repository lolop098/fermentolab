//la idea es ir completando la tabla con la info que se brinda cuando la gente aprete el "Agregar producto"

class product {
  constructor(id, nombre, categoria, precio, costo) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.costo = costo;
  }
  validarRentabilidad = () => {
    if (precio > costo) {
      let rentabilidad = 100 * (1 - costo / precio);
      console.log(`La rentabilidad es de ${rentabilidad.toFixed(2)}%`);
    } else {
      alert("No hay rentabilidad");
    }
  };
}

let id = 102;

const aumentarId = () => {
  id = id + 1;
  return id
};

const items = [
  new product(101, "Medialuna", "Pasteleria", 200, 45),
  new product(102, "Pan de campo", "Panaderia", 500, 47),
];

let modal = document.getElementById("modal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let cargar = document.getElementById("cargar")

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/*aumentarId();
const chipa = new product(
  id,
  prompt("ingrese nombre del producto"),
  prompt("Ingrese categoria"),
  (precio = parseFloat(prompt("Ingrese precio"))),
  (costo = parseFloat(prompt("Ingrese costo")))
);
items.push(chipa);
chipa.validarRentabilidad();

aumentarId();
const budin = new product(
  id,
  prompt("ingrese nombre del producto"),
  prompt("Ingrese categoria"),
  (precio = parseFloat(prompt("Ingrese precio"))),
  (costo = parseFloat(prompt("Ingrese costo")))
);
items.push(budin);
budin.validarRentabilidad();*/

console.table(items);

const cargarTabla = () => {
  const listaProductos = document.getElementById("listaProductos");
  listaProductos.innerHTML = `<tr>
<th>ID</th>
<th>Articulo</th>
<th>Categoria</th>
<th>Precio</th>
<th>Costo</th>
</tr>`
  items.forEach((producto) => {
    listaProductos.innerHTML += `
      <th>${producto.id}</th>
      <th>${producto.nombre}</th>
      <th>${producto.categoria}</th>
      <th>${producto.precio}</th>
      <th>${producto.costo}</th>
  `;
  });
}

/*const cargarProducto = (newProducto) => {
  const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML += `
    
        <th>${newProducto.id}</th>
        <th>${newProducto.nombre}</th>
        <th>${newProducto.categoria}</th>
        <th>${newProducto.precio}</th>
        <th>${newProducto.costo}</th>
    `;
  };*/


cargar.onclick = function () {
  const nombre = document.getElementById("nombre").value
  const categoria = document.getElementById("categoria").value
  const precio = document.getElementById("precio").value
  const costo = document.getElementById("costo").value
  const newProduct = new product(aumentarId(), nombre, categoria, precio, costo)
  items.push(newProduct)
  console.log(items)
  cargarTabla()
  /*cargarProducto(newProduct)*/
}

cargarTabla()