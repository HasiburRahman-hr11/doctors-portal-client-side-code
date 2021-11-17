import React, { useEffect, useState } from 'react';
import axios from 'axios';


const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const { data } = await axios.get('https://doctors-portal-api.herokuapp.com/users');
                const sortedUsers = data.sort((a,b) =>  new Date(a.createdAt) - new Date(b.createdAt));
                setUsers(sortedUsers);
                setLoading(false);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getAllUsers();



    }, []);


    return {
        users,
        setUsers,
        loading
    }
}

export default useUsers;