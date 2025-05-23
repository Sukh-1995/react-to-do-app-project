import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './auth/AuthContext';
import Login from './auth/Login';
import ProtetecedRoute from './auth/ProtetecedRoute';
import Register from './auth/Register';
import Navbar from './components/Navbar';
import { TaskProvider } from './context/TaskContext';
import About from './pages/About';
import CreateTask from './pages/CreateTask';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import TaskList from './pages/TaskList';

function App() {


  return (
    // Routes setup using react router dom
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Navigate to="/login" />}></Route>
            <Route path='/' element={<Home />}>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
            </Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/task-list' element={<ProtetecedRoute><TaskList /></ProtetecedRoute>}></Route>
            <Route path='/create-task' element={<CreateTask />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;