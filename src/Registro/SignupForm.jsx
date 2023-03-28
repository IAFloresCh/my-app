import { React, useState } from "react";
import Mail from "./Mail";

const SignupForm = () => {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validTelf = /^93\d{7}$/;
    const validPassw = /^(?=.*\d).{8,}$/;

    if (!validMail.test(inputs.mail)) {
      console.error("Email incorrecto");
    } else {
      console.log("Email correcto");
    }

    if (!validTelf.test(inputs.telf)) {
      console.error("Telefono incorrecto, debe contener 9 digitos y empezar por 93");
    } else {
      console.log("Telefono correcto");
    }

    if (!validPassw.test(inputs.passw)) {
      console.error("Contraseña incorrecta, debe contener 8 digitos y al menos un numero");
    } else {
      console.log("Contraseña correcta");
    }

    if (inputs.confirmPassw !== inputs.passw) {
      console.error("Confirmacion de contraseña incorrecta, las contraseñas no son iguales");
    } else {
      console.log("Confirmacion de contraseña correcta");
    }
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom: </label>
        <input type="text" name="nom" value={inputs.nom} onBlur={handleChange}></input>
        <label htmlFor="mail">Mail: </label>
        <input type="mail" name="mail" value={inputs.mail} onBlur={handleChange}></input>
        <label htmlFor="telf">Telf: </label>
        <input type="number" name="telf" value={inputs.telf} onBlur={handleChange}></input>
        <label htmlFor="passw">Passw: </label>
        <input type="password" name="passw" value={inputs.passw} onBlur={handleChange}></input>
        <label htmlFor="confirmPassw">Passw: </label>
        <input type="password" name="confirmPassw" value={inputs.confimPassw} onBlur={handleChange}></input>
        <Mail />
        <input type="submit" />
      </form>
    </div>
  )






}
export default SignupForm;