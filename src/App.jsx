import Pagehome from './page/pagehom/page-home'
import { Route, Routes } from "react-router-dom";
import Hom from "./page/hom_access";


function App() {
  return ( <>
  
          <Routes>

              <Route path="/" element={<Hom/>  }/>
              <Route path="/Pagehome" element={<><Pagehome/></>}/>

          </Routes>
  </> );
}

export default App;