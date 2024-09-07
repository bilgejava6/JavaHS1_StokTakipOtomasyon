import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {useDepoSelector} from "./store";
function Routerpages(){
    //const token = localStorage.getItem('token');
    const token = sessionStorage.getItem("token");
    const isLogin = useDepoSelector(state=> state.auth.isLogin);
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={isLogin || token!== null ? <Home /> : <Login />}/>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routerpages;