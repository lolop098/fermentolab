//la idea es ir completando la tabla con la info que se brinda cuando la gente aprete el "Agregar producto"

class product {
  constructor(numero, nombre, categoria, precio, costo) {
    this.numero = numero;
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

let numero = 0;

const aumentarId = () => {
  items.forEach(i => {
    if (numero > i.numero){
      numero = i.numero
    }   
  })
  return ++numero
}

let items = [];
/*
if(localStorage.getItem('items')){
  items = JSON.parse(localStorage.getItem('items')) //JSON.parse() pasa de JSON a objeto
}else {
  localStorage.setItem('items', JSON.stringify(items)) //JSON.stringify pasa de objeto a JSON
}*/ //OPTIMIZADO

localStorage.getItem("items") ? items = JSON.parse(localStorage.getItem('items')) : localStorage.setItem('items', JSON.stringify(items))

let modal = document.getElementById("modal");
let btn = document.getElementById("agregarProduct");
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

const cargarTabla = () => {
  const listaProductos = document.getElementById("listaProductos");
  listaProductos.innerHTML = `<tr>
    <th>ID</th>
    <th>Articulo</th>
    <th>Categoria</th>
    <th>Precio</th>
    <th>Costo</th>
    <th> <th>
    </tr>`
  localStorage.getItem("items", JSON.stringify(items))
  items.forEach((producto) => {
    listaProductos.innerHTML += `
    <tr id= "lineaNueva">
      <th>${producto.numero}</th>
      <th>${producto.nombre}</th>
      <th>${producto.categoria}</th>
      <th>${producto.precio}</th>
      <th>${producto.costo}</th>
      <th><button class="eliminar" value="${producto.numero}" onclick="eliminarMetodo(${producto.numero})">X</button><th>
      <tr>`
    });
}

cargar.onclick = function () {
  const nombre = document.getElementById("nombre").value
  const categoria = document.getElementById("categoria").value
  const precio = document.getElementById("precio").value
  const costo = document.getElementById("costo").value
  const newProduct = new product(aumentarId(), nombre, categoria, precio, costo)
  items.push(newProduct)

  Toastify ({
    text: "Producto agregado con exito",
    duration: 3000,
    backgroundColor: "green"
  }) .showToast();

  cargarTabla()
  localStorage.setItem("items", JSON.stringify(items))
}

cargarTabla()

function eliminarMetodo (numero){
 items.forEach(element => {
  if (element.numero == numero){
    console.log(element)
    let index = items.indexOf(element);
    items.splice(index, 1);
    console.log(index)
    localStorage.setItem('items', JSON.stringify(items));
  } 
 });
 cargarTabla()
 Toastify ({
  text: "Producto eliminado",
  duration: 3000,
  gravity: "bottom",
  backgroundColor: "red"
 }). showToast();
}




