import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'
import '../all.min.css'

import Root from './Root.jsx'
import Index from './pages/index.jsx'
import Type from "./pages/Type.jsx"
import Cart from './pages/Cart.jsx'
import Error from './pages/Error.jsx'
import Product from './pages/Product.jsx'
const router = createBrowserRouter(
  [
    {
  path:'/',
  element:<Root/>,
  errorElement:<Error/>,
  children:[
    {
      path:'/',
      element:<Index/>
    },
    {
      path:'/Men',
      element:<Type type="men"/>
    },
    {
      path:'/Kids',
      element:<Type type="kids"/>
    },
    {
      path:':productId',
      element:<Type/>
    },{
      path:'/cart',
      element:<Cart/>
    },{
      path:'product',
      element:<Product/>
    },{
      path:'product/:productId',
      element:<Product/>
    }
]
    },
  ]
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
  
)
