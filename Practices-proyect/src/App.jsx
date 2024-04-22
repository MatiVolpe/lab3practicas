import { useState } from 'react'
import './App.css'
import TableItem from './assets/tableItem/TableItem'

function App() {
  const netIncomes = [{brand: 'McDonalds', income: 1291283}, {brand: 'Burger King', income: 1927361}, {brand: 'KFC', income: 1098463}];

  return (
    <div>
      <TableItem netIncomes={netIncomes}/>
    </div>
  )
}

export default App


// Resolver el siguiente ejercicio:
// En el componente App.js poseo el siguiente arreglo de ingresos brutos por compañia:
// const netIncomes = [{brand: ´McDonalds´, income: 1291283}, {brand: Burger King, income: 1927361}, {brand: ‘KFC’, income: 1098463}];
// En el componente App:
// Escribir un componente Table.js que arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.
// Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. Utilizar obligatoriamente la función reduce para calcular el promedio.