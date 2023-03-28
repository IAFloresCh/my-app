/* const Child = (props) => {
    const validMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleValidation = (event) => {
        event.preventDefault();
        if (!validMail.test(mail)) {
            
            console.error("Email incorrecto");
          } else {
            console.log("Email correcto");
          }
          console.log(mail)
    
    }

    return (
        <div>
                <label htmlFor="mail">Mail: </label>
                <input type="mail" name="mail"  onBlur={handleValidation}></input>
        </div>
    );

}
export default Mail;*/