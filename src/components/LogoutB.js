import React from 'react'
import styled from 'styled-components'



const Button = styled.button`

        position: absolute;
        background-color: transparent;
        width: 100px;
        height: 50px;
        top: 25px;
        right: 30px;
        border-color: white;
        color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;

        &:hover{
            background-color: lightgray;
        
        }

//note to self error - i didnt include the props at first and
//when i placed this component in another component
//the onClick property was not working 
`
const LogoutB = ({onClick, style}) => {
  return (
    <Button onClick={onClick} style={style}>Logout</Button>

  )
}

export default LogoutB