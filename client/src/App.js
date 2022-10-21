import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import 'antd/dist/antd.css';

import Footer from './components/shared/footer/Footer';
import Header from './components/shared/header/Header';
import Dashboard from './pages/dashboard/Dashboard';
import NewRecord from './pages/record/NewRecord';
import EditRecord from './pages/record/EditRecord';
import Login from './pages/login/Login';
import UserProvider from './context/UserContext';

const App = () => {

    const client = new QueryClient();

    return (
        <UserProvider >
            <QueryClientProvider client={client}>
                <Router>
                    <Header />
                    <Routes>
                        <Route path={'/'} element={<Navigate to='/dash' />} />
                        <Route path={'/login'} element={<Login />} />
                        <Route path={'/dash'} element={<Dashboard />} />
                        <Route path={'/new'} element={<NewRecord />} />
                        <Route path={'/edit/:code'} element={<EditRecord />} />
                    </Routes>
                </Router>
                <Footer />
            </QueryClientProvider>
        </UserProvider>
    )
}

export default App;
