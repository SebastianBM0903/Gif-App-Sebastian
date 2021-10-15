
import React, {useState} from 'react'
import { AgrCategoria } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['Itachi', 'Kakashi', 'Naruto']

const [categorias, setcategorias] = useState(['Itachi']);

    //const agregar =() =>{

       // setcategorias(categorias.concat('Manzana'))
       // setcategorias( categoria => [ ...categoria, 'Sai'] );
    //}

    return (
        <>
            
        <h2>Gif Expert App</h2>
        <AgrCategoria setcategorias={setcategorias}/>
        <hr />

        
        <ol>
            {
                categorias.map( category =>(
                    
                    <GifGrid
                    key = {category}
                    category= {category} 
                    />


                )
                //<li key={category}>{category}</li>
                )
            }

        </ol>

        </>
    )
}
