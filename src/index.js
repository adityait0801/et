import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
      path : '/', 
      element : <AppLayout/>,
      children : [
        {
        path : '/',
        element : <Body/>
        }
      ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)
