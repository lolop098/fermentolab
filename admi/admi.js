/*class producto {
  constructor(id, nombre, categoria, precio, costo) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.costo = costo;
  }
}

id = prompt("Ingrese ID");
nombre = prompt("Ingrese nombre");
categoria = prompt("Ingrese categoria");
precio = parseFloat(prompt("Ingrese precio"));
costo = parseFloat(prompt("Ingrese costo"));

if(id == ''){
    id = id + 1
}

validarRentabilidad = (precio, costo) => {
  if (precio > costo) {
    const chipa = new producto(id, nombre, categoria, precio, costo);
    console.log(chipa)
  } else {
    console.log("No hay rentabilidad");
  }
}
validarRentabilidad(precio, costo)

const Productos = ["medialuna", "Pan de campo"]
const Precio = [120, 20, 54]


Productos.push(chipa)
console.log(Productos)

const numero = document.getElementById("ID") 
ID.innerText = id
*/



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
      let rentabilidad = 100*((1-(costo/precio)))
      console.log(`La rentabilidad es de ${rentabilidad.toFixed(2)}%`)
    } else {
      alert("No hay rentabilidad");
    }
  }
}

let id = 102  

const aumentarId = () => {
  id = id + 1
}

const Items = [
  new product (101, "Medialuna", "Pasteleria", 200, 45),
  new product (102, "Pan de campo", "Panaderia", 500, 47)
]

aumentarId()
const chipa = new product (id, prompt("ingrese nombre del producto"),prompt("Ingrese categoria"), precio = parseFloat(prompt("Ingrese precio")), costo = parseFloat(prompt("Ingrese costo")))
Items.push(chipa)
chipa.validarRentabilidad()

aumentarId()
const budin = new product (id, prompt("ingrese nombre del producto"),prompt("Ingrese categoria"), precio = parseFloat(prompt("Ingrese precio")), costo = parseFloat(prompt("Ingrese costo")))
Items.push(budin)
budin.validarRentabilidad()

console.table(Items)
