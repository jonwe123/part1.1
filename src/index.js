import { getNodeText } from '@testing-library/react'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'
import Tail from './components/Tail'


const notes = [ {
  name: 'Half Stack application development',
  id: 1,
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
     name: 'Using props to pass',
     exercises: 7,
     id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    }
    ] 
  },
  {
  name: 'Node.js',
  id: 2,
  parts: [
    {
      name: 'Routing',
      exercises: 3,
      id: 1
    },
    {
      name: 'Middleware',
      exercises: 7,
      id: 2
    }
  ]
  }
]

const App = (props) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('a new note...')
    const rows = () => notes.map(note => 
      <div key={note.id}>
      <Header {...note} />
      <Content {...note} /> 
      <Tail {...note} />
      </div>
    )
    const addNote = (event) => {
      event.preventDefault()
     // console.log('button clicked', event.target)
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: notes.length + 1,
      }
      setNotes(notes.concat(noteObject))
      
      }
    
    
    
    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }
   
return (    
    <div>
      <h1>Notes</h1>
      <ul>
        {rows()}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
        onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>
    </div>
  )
  
}

ReactDOM.render(<App notes={notes} />, document.getElementById('root'))





// const All = (props) => {
//   return (props.good + props.neutral + props.bad) 
// }

// const Ave = (props) => {
//   return ((props.good*1 - props.bad*1) / (props.good + props.neutral + props.bad))
// }

// const Pos = (props) => {
//   let tot = (props.good + props.neutral + props.bad) 
//   if (tot === 0) 
//   {
//     return 0
//   }
//   return (props.good / tot) * 100
// }

// const Innehall = (props) => {
//   if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
//     return (
//       <div> 
//         No feedback given
//       </div>
//     )
//   }
//   return (
//     <div>
//       <table>
//         <tbody>
//             <tr>
//               <td>good </td>
//               <td> {props.good} </td>
//             </tr>
//             <tr>
//               <td>neutral </td>
//               <td> {props.neutral} </td>
//             </tr>
//             <tr>
//               <td>bad </td>
//               <td> {props.bad} </td>
//             </tr>
//             <tr>
//               <td>all </td>
//               <td> <All good={props.good} neutral={props.neutral} bad={props.bad} /> </td>
//             </tr>
//             <tr>
//               <td>average </td>
//               <td> <Ave good={props.good} neutral={props.neutral} bad={props.bad} /> </td>
//             </tr>
//             <tr>
//               <td>positive </td>
//               <td> <Pos good={props.good} neutral={props.neutral} bad={props.bad} /> % </td>
//             </tr>
//         </tbody>
//       </table>
//     {/* <p> good {props.good} </p>
//     <p> neutral {props.neutral} </p>
//     <p> bad {props.bad} </p>
//     <p> all <All good={props.good} neutral={props.neutral} bad={props.bad} /> </p>
//     <p> average <Ave good={props.good} neutral={props.neutral} bad={props.bad} /> </p>
//     <p> positive <Pos good={props.good} neutral={props.neutral} bad={props.bad} /> % </p> */}
//     </div>
//   )
// }

// const App = () => {
//   const [good, inCgood] = useState(0)
//   const [neutral, inCneutral ] = useState(0)
//   const [bad, inCbad] = useState(0)
//   const handleGood = () => {
//     inCgood(good + 1)
//   }  
//   const handleNeutral = () => {
//     inCneutral(neutral + 1)
//   }  
//   const handleBad = () => {
//     inCbad(bad + 1)
//   }
//   const Button = ({onClick, text}) => (
//     <button onClick={onClick}>
//       {text}
//       </button>
//   )
//   return (
//     <div>
//       <div>
//         <h1>
//           give feedback
//         </h1>
//         <Button onClick={handleGood} text='good' />
//         <Button onClick={handleNeutral} text='neutral' />
//         <Button onClick={handleBad} text='bad' />
//         <h1>
//         statistics  
//         </h1> 
//         <Innehall good={good} neutral={neutral} bad={bad} />

//       </div>
//     </div>
//   )
// }



//----------------------------------------------chapter 1
// const History = (props) => {
//   if(props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }

// const Button = ({ onClick, text}) => (
//   <button onClick={onClick}>
//     {text}
//   </button>
// )
// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       <div>
//       {left}
//       <Button onClick={handleLeftClick} text='left' />
//       <Button onClick={handleRightClick} text='right' />
//       {right}
//       <History allClicks={allClicks} />
//       </div>
//     </div>
//   )

// }



