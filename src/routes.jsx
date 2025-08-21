import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

let routes=createBrowserRouter(
    [
        {
            path:"/",
            element:<Main></Main>,
            children:[
                {
                    index:true,
                    element:<Home></Home>
                },{
                    path:"/skills",
                    element:<Skills></Skills>
                },{
                    path:"/projects",
                    element:<Projects></Projects>
                },{
                    path:"/contact",
                    element:<Contact></Contact>
                }
            ]
        }
    ]
)
export default routes;