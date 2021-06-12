import React from 'react'

const btnStyles ={

    fontSize: 18,
    backgroundColor: 'red',
    color: 'black',
    margin: 10,    

}

function Button() {
    return (
        <div className="text-center">
           
           <button style={btnStyles}>Enviar Datos</button>
        </div>
    )
}

export default Button
