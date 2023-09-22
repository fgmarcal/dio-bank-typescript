import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Account from "../pages/account/account";

const routes = [
    {   
        element : <Home />,
        path: '/',
    },
    {   
        element : <Account />,
        path: '/account/:username',
    },
];

const Routing = () =>{

    return(
            <Routes>
                {routes.map((_,index)=> <Route element={routes[index].element} path={routes[index].path} key={index} /> )}
            </Routes>
 
    );
}

export default Routing;