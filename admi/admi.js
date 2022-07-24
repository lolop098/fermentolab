class producto {
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

if (precio > costo) {
  const chipa = new producto(id, nombre, categoria, precio, costo);
  console.log(chipa)
} else {
  console.log("No hay rentabilidad");
}


const alfa = new producto (1004, "alfajor de maicena", "pasteleria", 320, 67)
console.log(alfa)
//la idea es ir completando la tabla con la info que se brinda cuando la gente aprete el "Agregar producto"
