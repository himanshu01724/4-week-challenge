import GridLayout from "./Components/GridLayout";
import DestructuringObj from "./Components/DestructuringObj";
import Testing from "./Components/Testing"
import ExcelFeature from "./Components/ExcelFeature";
import TableFetchButton from "./Components/TableFetchButton"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {DataContext,DataProvider} from "./Context/DataContext"
import { useState } from "react";

function App(){

   return(
        <>

         {/* <Testing/> */}
        <DataProvider>
         <BrowserRouter>
         <Routes>
            <Route exact path = "/" element = {<TableFetchButton/>}/>
            <Route exact path = "/gidlayout" element = {<GridLayout/>}/>
            <Route exact path = "/testing" element = {<Testing/>}/>
        </Routes>
        </BrowserRouter>
        </DataProvider>
        </>
    )
}
export default App;