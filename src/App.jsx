import {BrowserRouter, Routes, Route} from "react-router-dom";
import Poster from './components/Poster/poster';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import "./App.css";
import SigninForm from "./components/signinForm";
import ReduxMapla from "./ReduxMapla";
function App() {
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route path="" element={<ReduxMapla/>}/>
        <Route path="signin" element={<SignIn/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="poster" element={<Poster/>}/>
        <Route path="form" element={<SigninForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
