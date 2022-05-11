import React from 'react'
import './Style.css'

function ClassComponent() {
    return (
        <div className='container2'>

            <h2>This is created using Class Component</h2>  <br></br>
            <p id='p2'>This is done using External CSS</p>   <br></br>
            <p style={{color:'red', fontWeight:'bold', textDecoration:'underline'}}>This is done using Inline CSS</p>

        </div>
    )
}

export default ClassComponent;