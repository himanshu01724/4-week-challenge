import React from 'react'
import Paragraph from './Components/Paragraph'
import Display from './Components/Display'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {DataProvider} from "./Context/DataContext"


function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path = "/" element = {<Paragraph />}></Route>
    <Route exact path = "/display" element = {<Display />}></Route>
    </Routes>
    </BrowserRouter>
    </DataProvider>
  )
}

export default App