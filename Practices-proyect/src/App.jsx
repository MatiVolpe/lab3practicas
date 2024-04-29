import './App.css';
import Login from "./login/Login.jsx";

function App() {

  return (
    <div>
      <Login />
    </div>
  )
}

export default App


// Nuestro cliente, debido a traumas pasados, está en guerra abierta con todos los usuarios que eligen como nombre de usuario una palabra que contenga la letra o (sea mayúscula o minúscula).
// Teniendo esto en cuenta, se nos ha pedido que creemos el componente Login.js que contenga un único input donde el usuario ingresa su username y un botón que diga Registrarse.

// Funcionalidades:
// El usuario ingresa su nombre de usuario y apreta en Registrarse. Si las condiciones se cumplen exitosamente, le saldrá el mensaje con una alerta de JavaScript que diga “¡Usuario registrado correctamente!”
// Además, en un elemento <p> abajo del botón, se debe ir visualizando el valor ingresado a medida que el usuario lo ingresa en el input.

// Condiciones
// Si el usuario en algún momento ingresa en el input una o/O se le debe enviar una alerta de JavaScript que diga “Por favor, ¡Nombres de usuario sin la letra o!”
// Si al hacer click en registrarse, el nombre de usuario está vacío o posee la letra o en su cadena de caracteres, enviar una alerta de JavaScript con el mensaje “Usuario inválido para registrarse”

// Pistas:
// Método para la búsqueda de la letra o acá
// Recordar buscar por mayúscula y por minúscula. 