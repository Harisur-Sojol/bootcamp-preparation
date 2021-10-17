import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import authInit from "../components/Shared/Login/Firebase/Firebase.init";

authInit()
const useFirebase = () => {

    const [user, setUser] = useState({})
    const auth = getAuth();
    console.log(user)
    const [isLoading, setIsLoading] = useState(true)

    const googleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
           .finally(() => setIsLoading(false))

    }

    useEffect(() => {
     const unsubscribed  = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
             setUser({})
            }
            setIsLoading(false)
          });
          return unsubscribed;
    },[])


    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false))

    }

    return {user, googleSignIn, isLoading, logOut}
};

export default useFirebase;