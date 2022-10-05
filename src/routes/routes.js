import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Restaurant from "../components/Restaurant/Restaurant";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            { path: '/home', element: <Home></Home> },
            { path: '/about', element: <About></About> },
            { path: '/restaurant', element: <Restaurant></Restaurant> },
            { path: '*', element: <Error></Error> },
        ]
    },
]);

export default router;