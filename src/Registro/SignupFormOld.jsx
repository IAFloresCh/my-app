import { React, useState } from "react";
const SignupForm = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs.nom === ""){
            console.log("Introduce un nombre");
        }else{
            console.log("Nombre correcto");
        }
        if (inputs.mail.includes("@") && inputs.mail.includes(".")){
            console.log("Email correcto");
        }
        else {
            console.log("Email incorrecto");
        }
        if(inputs.telf < 939999999 && inputs.telf > 930000000){
            console.log("Telefono correcto");
        }else{
            console.log("Telefono incorrecto, debe contener 9 digitos y empezar por 93");
        }
        if(inputs.passw.length >= 8 && inputs.passw.includes(1,2,3,4,5,6,7,8,9,0)){
            console.log("Contraseña correcta");
        }
        else{
            console.log("Contraseña incorrecta, debe conetener 8 digitos y al menos un numero");
        }
        if (inputs.confimPassw === inputs.passw){
            console.log("Confirmacion de contraseña correcta");
        }
        else{
            console.log("Confirmacion de contraseña incorrecta, las contraseñas no son iguales");
        }
        console.log(inputs.telf);
    }
 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nom">Nom: </label>
                <input type="text" name="nom" value={inputs.nom} onChange={handleChange}></input>
                <label htmlFor="mail">Mail: </label>
                <input type="mail" name="mail" value={inputs.mail} onChange={handleChange}></input>
                <label htmlFor="telf">Telf: </label>
                <input type="number" name="telf" value={inputs.telf} onChange={handleChange}></input>
                <label htmlFor="passw">Passw: </label>
                <input type="password" name="passw" value={inputs.passw} onChange={handleChange}></input>
                <label htmlFor="confirmPassw">Passw: </label>
                <input type="password" name="confirmPassw" value={inputs.confimPassw} onChange={handleChange}></input>
                <input type="submit" />
            </form>
        </div>
    )






}
export default SignupForm;