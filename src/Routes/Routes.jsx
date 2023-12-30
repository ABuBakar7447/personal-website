import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },

            
        ]
    }
])