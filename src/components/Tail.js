import React from 'react'

const Tail = (props) => {
    console.log('inne i Tail', props)
    const temp = props.parts.map(part => {return part.exercises})
    console.log(temp)
    return (
      <>
      <h3> total of exercises {temp.reduce((accumulator, currentvalue) => accumulator + currentvalue)}</h3>
      </>
    )
  }

export default Tail
