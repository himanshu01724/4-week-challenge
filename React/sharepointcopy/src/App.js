import Main from "./Components/Main"
import Strip from "./Components/Strip"
import {Route,Routes,BrowserRouter} from "react-router-dom"

function App(){


  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element = {
          <Main/>
            }>      
      </Route>
      <Route exact path = "/strip" element = {
          <Strip/>
          }>
      </Route>
    </Routes>
    </BrowserRouter>

    </> 
  )
}
export default App