import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListItem from './Components/ListItem'
import Reducer from './Components/Reducer'
import { contextProvider, initialState } from './context/CounterContext'

function App() {

  return (
    <>
      <contextProvider count={initialState.count} text={initialState.text}>
        {/* <ListItem list={['Dates', 'apple', 'Mango']} add={(item: string) => (
        <span>{item}</span>
      )} /> */}

      </contextProvider>
    </>

  )
}

export default App
