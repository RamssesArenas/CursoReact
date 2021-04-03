import React,{useState} from 'react';
import Header from './commponents/Header'
import Footer from './commponents/Footer'
import Producto from './commponents/Producto'
import Carrito from './commponents/Carrito'

function App() {

  //Crear listado de productos
  const[productos,guardarProductos] = useState([
    {id: 1,nombre: 'camisa 1', precio: 50},
    {id: 2,nombre: 'camisa 2', precio: 60},
    {id: 3,nombre: 'camisa 3', precio: 70},
    {id: 5,nombre: 'camisa 4', precio: 30},
  ]);
  //State para carrito de compras
  const [carrito, agregarProducto] = useState([]);
  //Obtener la fecha
  const fecha = new Date().getFullYear();
  return (
    <div className="App">
      <Header
        titulo='Tienda Virtual'
      />
      <h1>Lista de productos</h1>
      {productos.map(producto =>(
        <Producto
          key = {producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        /> 
      ))}
      <Carrito
        carrito={carrito}
      />
      <Footer
        fecha={fecha}
      />
   </div>
  );
}

export default App;
