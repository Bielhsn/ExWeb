import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//IMPORTAÇÕES

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './routes/Home/index.jsx';
import Produtos from './routes/Produtos/index.jsx';
import Error from './routes/Error/index.jsx';
import EditarProduto from './routes/EditarProdutos/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/produtos', element: <Produtos/>},
      {path: '/editar/produtos/ :id', element: <EditarProduto/>}
    ]
  }
]);

//ROTA

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)