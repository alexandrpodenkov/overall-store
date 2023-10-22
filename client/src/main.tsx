import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store, persistor } from "./app/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import "./index.css"
import AdminPage from "./pages/AdminPage"
import ProductPage from "./pages/ProductPage"
import { PersistGate } from "redux-persist/integration/react"
import AboutUs from "./pages/AboutUs"
import Layout from "./components/Layout/Layout"
import Preloader from "./components/Preloader/Preloader"

  const router = createBrowserRouter([
    {
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/product/:id',
          element: <ProductPage/>
        },
        {
          path: '/aboutUs',
          element: <AboutUs/>
        },
        {
          path: '/adminPage',
          element: <AdminPage/>
        },
      ],
      
    }
    
  ])
  
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<Preloader/>} persistor={persistor}>
          <RouterProvider router={router}/>
        </PersistGate>
      </Provider>
    </React.StrictMode>,
  )




