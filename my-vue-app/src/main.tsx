import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Admin from './admin'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Blog from './Blog'
const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>
    ),
  },
  {
    path: "admin",
    element: (<Admin/>),
  },{
    path:"blog/:id",
    element:(<Blog/>)
  }
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
 
    </ChakraProvider>
  </React.StrictMode>,
)
