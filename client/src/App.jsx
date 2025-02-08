
import {Route, Routes } from 'react-router-dom';
import './app.css'
import Login from './pages/Login';
import Register from './pages/Register';
import Loader from './components/Loader';
import {StoreContext} from './context/StoreContext'
import { useContext } from 'react';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';


function App() {
  const {isLoading}=useContext(StoreContext);
  return (
      <div>
        <div className="fixed top-0 right-0 left-0 z-50">
          {
            isLoading && <Loader/>
          }
        </div>
        <Routes>
        <Route path='/login' element={<PublicRoute><Login/></PublicRoute>} />
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>




      </Routes> 
      </div>
  )
}

export default App;
