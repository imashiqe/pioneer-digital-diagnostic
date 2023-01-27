import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CompanyProfile from "../../Pages/CompanyProfile/CompanyProfile";
import Contactus from "../../Pages/Contactus/Contactus";
import HealthCard from "../../Pages/HealthCard/HealthCard";
import Home from "../../Pages/Home/Home";
import Legalpaper from "../../Pages/Legalpaper/Legalpaper";
import Ourspeech from "../../Pages/Ourspeech/Ourspeech";
import Training from "../../Pages/Training/Training";

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
         },
         {
          path:'training',
          element: <Training></Training>
         },
         {
          path:'contact',
          element: <Contactus></Contactus>
         },
         {
          path:'ourspeech',
          element: <Ourspeech></Ourspeech>
         },
         {
          path: 'company',
          element: <CompanyProfile></CompanyProfile>
         },
         {
          path: 'legal',
          element: <Legalpaper></Legalpaper>
         }
      ]
    },


]);