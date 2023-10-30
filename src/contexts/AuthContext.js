import { createContext, useContext, useState } from "react";
import app from "../firebase";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    //singup function
    async function singup(email, password, username) {
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
            displayName: username
        })
        const user = auth.currentUser;
        setCurrentUser(user)
    }

    //login funciton
    async function login(email, password) {
        const auth = getAuth(app);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        singup,
        login,
        logout
    }

    return (
        <AuthContext.Provider user={value}>
            {children}
        </AuthContext.Provider>

    )
}