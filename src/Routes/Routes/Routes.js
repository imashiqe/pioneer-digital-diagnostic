import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import HealthCard from "../../Pages/HealthCard/HealthCard";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
         {
          path:'/',
          element: <Home></Home>
         },
         {
          path:'HealthCard',
          element: <HealthCard></HealthCard>
         }
      ]
    },


]);