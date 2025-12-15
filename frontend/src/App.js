import { BroadcastOperator,Routes,Route, BrowserRouter } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";

function App(){
  return (
  <BrowserRouter>
  <Routes>
    <Route path= "/" element ={<Login />}/>
    <Route path = "/register" element={<Register/>}/>
    <Route path = "/Chat" element={<Chat/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App;