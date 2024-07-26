import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListItem from './Components/ListItem'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <ListItem list={['Dates','apple','Mango']} add={(item:string)=>(
    <span>{item}</span>
   )}/>
   
   </>
  )
}

export default App
