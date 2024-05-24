import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/site/Add/Add";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import Basket from "../pages/site/Cart/Basket";

const ROUTES = createBrowserRouter([{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },{
        path:"add",
        element:<Add/>
    },{
        path:"basket",
        element:<Basket/>
    }]
}])

export default ROUTES