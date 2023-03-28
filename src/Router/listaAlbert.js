import React, {useState} from "react";

function LlistaAlbert() {
    const [elementSelected, setElement] = useState(null);
    const elements=['Element 1', 'Element 2', 'Element 3'];
    const handleClick = (element)=>{
        setElement(element);
    }
    return (
        <ul>
            {elements.map((element)=>(
                <li onClick={()=>handleClick(element)}>{element}</li>
            ))};
            {elementSelected && <p> Has seleccionado: {elementSelected}</p>}
        </ul>);
    
}
export default LlistaAlbert;