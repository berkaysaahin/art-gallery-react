import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import PaintingsList from './features/paintings/PaintingsList'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Public />} />
        <Route path='login' element={<Login />} />

        <Route path='dash' element={<DashLayout />} >
          <Route index element={<Welcome />} />

          <Route path='paintings'>
            <Route index element={<PaintingsList/>} />
          </Route>

          <Route path='users'>
            <Route index element={<UsersList/>} />
          </Route>

        </Route>{/*end dash*/}
      </Route>
    </Routes>
  );
}

export default App;
