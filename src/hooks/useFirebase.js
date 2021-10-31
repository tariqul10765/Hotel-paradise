import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../firebase/firebase.init";

initializeFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoadding, setIsLoadding] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const emailPassSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            console.log('Profile updated!');
        }).catch((error) => {
            console.log(error);
        });
    }

    const userSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
            console.log('Sign-out successful.');
        }).catch((error) => {
            setError(error);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                setUser(user);
            } else {
                console.log('User is signed out');
            }
            setIsLoadding(false);
        });
    }, [auth]);

    return {
        isLoadding,
        user,
        error,
        googleSignIn,
        emailPassSignIn,
        updateUserProfile,
        userSignOut
    }
}

export default useFirebase;