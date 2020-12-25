import React from 'react'

const Header = (props) => {
    return (
      <>
      <h1 key={props.id}> {props.name} {props.id} </h1>
      </>
    )
  }

  export default Header