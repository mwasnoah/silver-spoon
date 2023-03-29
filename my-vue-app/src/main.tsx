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
const router = createBrowserRouter([
  {
    path: "/",
    element: (<App/>
    ),
  },
  {
    path: "admin",
    element: (<Admin/>),
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
  <React.StrictMode>
    <ChakraProvider>
    <RouterProvider router={router} />
 
    </ChakraProvider>
  </React.StrictMode>,
)
