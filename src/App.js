
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';
import Spinner from './Pages/Shared/Spinner/Spinner';





function App() {
 
 
  
  return (
    <div className='max-w-[1440px] mx-auto'>
      
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
