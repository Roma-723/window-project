// App.jsx
import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/layout"
import Home from "./pages/home/home"
import Login from "./pages/auth/login/login"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Product from "./pages/product/product"
import Registration from "./pages/auth/registration/registration"
import Cart from "./pages/cart/cart"
import Wishlist from "./pages/wishlist/wishlist"
import GetByIdProduct from "./pages/product/getByIdProduct/getByIdProduct"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "registration", element: <Registration /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "product", element: <Product /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "product/:id", element: <GetByIdProduct /> },
      { path: "cart", element: <Cart /> },
    ]
  }
])

const App = () => <RouterProvider router={router} />
export default App
