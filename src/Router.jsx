import React from "react";
import { Routes, Route } from "react-router-dom";

import Registr from "./components/Reg/Reg";
import SingIn from "./components/SingIn/SingIn";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SingIn/>} />
            <Route path='/reg' element={<Registr/>} />
        </Routes>
    )
}
export default Router;