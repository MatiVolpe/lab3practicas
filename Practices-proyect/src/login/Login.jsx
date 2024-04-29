import { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

const Login = ({ }) => {

    const [textInput, setTextInput] = useState("");
    const [containsLetter, setContainsLetter] = useState(false);


    const ifContainsLetter = (text) => {
        if(typeof text !== 'string')
        {
            return false;
        }
        return text.toLowerCase().includes("o");
    }

    const ifIsEmpty = (text) => {
        if(text)
        {
            return false;
        }
        return true;
    }

    const changeTextHandler = (e) => {
        setTextInput(e.target.value);
        setContainsLetter(ifContainsLetter(e.target.value.charAt(e.target.value.length - 1)));
        if(ifContainsLetter(e.target.value.charAt(e.target.value.length - 1)))
        {
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
        }
    };

    const submitUser = (e) => {
        e.preventDefault();
        if(ifContainsLetter(textInput))
        {
            alert("Usuario inválido para registrarse, contiene la letra prohibida");
        }
        else if(ifIsEmpty(textInput))
        {
            alert("Usuario inválido para registrarse, no puede quedar vacío")
        }
        else
        {
            alert("¡Usuario registrado correctamente!")
        }
        setTextInput("");
        setContainsLetter(false);
    }

    return (
        <div>
            <Form onSubmit={submitUser}>
                <Form.Label>Introduzca nombre de usuario</Form.Label>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={textInput} onChange={changeTextHandler} placeholder="User" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
            {containsLetter ? (<p>NO PUEDE ESTAR LA LETRA O</p>) : (<p>Username elegido: {textInput} </p>) }
        </div>
    )
}

export default Login;