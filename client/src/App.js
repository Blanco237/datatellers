import React from 'react';

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
        <>
            <UserProvider >
                <Header />
                <Login />
                {/* <Dashboard /> */}
                {/* <NewRecord /> */}
                {/* <EditRecord /> */}
                <Footer />
            </UserProvider>
        </>
    )
}

export default App;
