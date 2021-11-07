import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.init";
import axios from 'axios';

// Firebase Initialization
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [token, setToken] = useState('');
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // Handle Registration
    const registerNewUser = (userName, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                // Set User to User state
                setUser({
                    email: email,
                    displayName: userName,
                });

                // Save user to Database
                saveUserToDB(userName, email);

                // Update user profile to Firebase
                updateProfile(auth.currentUser, {
                    email: email,
                    displayName: userName,
                }).then(() => {

                }).catch((error) => {

                });
                setAuthError('');
                history.push('/login');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Handle Login User
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                const path = location?.state?.from || '/'
                history.push(path);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Handle Google Sign In
    const signinWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                // Save user to Database
                saveUserToDB(result.user.displayName, result.user.email);

                setAuthError('');
                const path = location?.state?.from || '/'
                history.push(path);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Save User to Database
    const saveUserToDB = async (name, email) => {
        try {
            const { data } = await axios.post('http://localhost:8000/users/create', { name, email });

        } catch (error) {
            console.log(error);
        }
    }


    // Handle Log Out
    const logOutUser = () => {
        signOut(auth).then(() => {
            setAuthError('');
            setIsAdmin(false);
        }).catch((error) => {
            setAuthError(error.message);
        });
    }




    // Change User State automatically
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);

                // Set Admin
                const { data } = await axios.get(`http://localhost:8000/users/${user.email}`);
                if (data?.role === 'admin') {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }

                // Get Token
                getIdToken(user)
                    .then((idToken) => {
                        setToken(idToken)
                    });
            } else {
                setUser({})
            }
            setIsLoading(false);
        });

        return () => unsubscribe;
    }, []);


    return {
        user,
        isAdmin,
        token,
        setUser,
        isLoading,
        authError,
        registerNewUser,
        loginUser,
        signinWithGoogle,
        logOutUser
    }

}

export default useFirebase;