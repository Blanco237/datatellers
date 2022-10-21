import { createContext, useEffect, useState } from 'react';

import { getUser } from '../api/api';

export const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const fetchUser = async () => {
        const userToken = localStorage.getItem('drH-user-token');
        if (!userToken || userToken === "undefined") {
            setUser(null);
            return;
        }
        try {
            const user = await getUser(userToken);
            setUser(user);
        } catch (e) {
            setUser(null);
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);

    const refresh = async () => {
        await fetchUser();
    }

    const handleUser = (user) => {
        setUser(user);
    }

    return (
        <UserContext.Provider value={{ user, handleUser, refresh }} >
            {children}
        </UserContext.Provider>
    )

}

export default UserProvider;
