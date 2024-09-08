import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import {useDepoSelector} from "./store";
import React from "react";
import Marka from "./pages/Marka/Marka";
import Model from "./pages/Model/Model";
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
                <Route path='/marka-tanimlama' element={isLogin || token!== null ? <Marka /> : <Login /> } />
                <Route path='/model-tanimlama' element={isLogin || token!== null ? <Model /> : <Login /> } />

            </Routes>
        </BrowserRouter>
    );
}

export default Routerpages;