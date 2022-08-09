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
};

const Items = [
  new product(101, "Medialuna", "Pasteleria", 200, 45),
  new product(102, "Pan de campo", "Panaderia", 500, 47),
];

aumentarId();
const chipa = new product(
  id,
  prompt("ingrese nombre del producto"),
  prompt("Ingrese categoria"),
  (precio = parseFloat(prompt("Ingrese precio"))),
  (costo = parseFloat(prompt("Ingrese costo")))
);
Items.push(chipa);
chipa.validarRentabilidad();

aumentarId();
const budin = new product(
  id,
  prompt("ingrese nombre del producto"),
  prompt("Ingrese categoria"),
  (precio = parseFloat(prompt("Ingrese precio"))),
  (costo = parseFloat(prompt("Ingrese costo")))
);
Items.push(budin);
budin.validarRentabilidad();

console.table(Items);

const listaProductos = document.getElementById("listaProductos");
Items.forEach((producto) => {
  listaProductos.innerHTML += `<tr>
      <th>${producto.id}</th>
      <th>${producto.nombre}</th>
      <th>${producto.categoria}</th>
      <th>${producto.precio}</th>
      <th>${producto.costo}</th>
  </tr>`;
});
