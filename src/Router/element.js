import React from 'react';


function Element(props){
    this.props.element

    const mostrarAlerta =() => {
        alert('Dwec!!');
    };
    return(
        <button onClick={mostrarAlerta}>Haz click aqui</button>
    );
}

export default Element;