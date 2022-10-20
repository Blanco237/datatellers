import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import 'antd/dist/antd.css';

import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import NewRecord from './pages/record/NewRecord';
import EditRecord from './pages/record/EditRecord';
import Login from './pages/login/Login';
import UserProvider from './context/UserContext';

const App = () => {

    return (
        <UserProvider >
            <Router>
                <Header />
                <Routes>
                    <Route path={'/'} element={<Navigate to='/dash' />} />
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/dash'} element={<Dashboard />} />
                    <Route path={'/new'} element={<NewRecord />} />
                    <Route path={'/edit'} element={<EditRecord />} />
                </Routes>
            </Router>
            <Footer />
        </UserProvider>
    )
}

export default App;
