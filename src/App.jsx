import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './componets/Layout/Layout'
import Portfolio from './componets/Portfolio/Portfolio'
import About from './componets/About/About'
import Home from './componets/Home/Home'
import Skills from './componets/Skills/Skills'
import Exprience from './componets/Expriencs/Exprience'
import Notfound from './componets/NotFound/Notfound'
let routes=createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
     {path:'portfolio',element:<Portfolio/>},
     {path:'about',element:<About/>},
     {path:'skills',element:<Skills/>},
     {path:'exprience',element:<Exprience/>},
     {path:'*',element:<Notfound/>},
  ]}
])
export default function App() {
  return (
    <>
       <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
