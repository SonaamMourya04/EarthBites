import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import RestaurantCard from "./component/RestaurantCard";
import Body from "./component/Body";
import Contact from "./component/Contact";
import About from "./component/About";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";

const AppLayout =()=>{
    return(
        <div className="app">
            <Header/>
            <Outlet/>

        </div>
    )
};
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
            path:"/about",
            element:<About/>
    
        },
        
       {
        path:"/contact",
        element:<Contact/>
       },
    {
        path:"restaurants/:resId",
        element:<RestaurantMenu/>
    }],
        errorElement:<Error/>

    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter}/>);
