import React, {useState} from 'react'

import propTypes from 'prop-types';
export const AgrCategoria = ({setcategorias}) => {

const [inputValue, setinputValue] = useState('');


const cambioinput = (e) =>{
    setinputValue(e.target.value);
}


    const conSubmit = (e) =>{
    e.preventDefault();
        if(inputValue.trim().length>2){
       
        setcategorias( categoria => [ inputValue, ...categoria] );
            setinputValue('');
    }
    }
    return (
        <form onSubmit={conSubmit} >
            
            <input type='text' value={ inputValue }
            onChange={ cambioinput }
            />

        </form>
    )
}
AgrCategoria.propTypes = {
    setcategorias: propTypes.func.isRequired
    }