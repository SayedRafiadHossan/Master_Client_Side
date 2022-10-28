import { useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/FirebaseInit";

firebaseAuthentication();

const useFirebase = () => {
  // declare user state
  const [user, setUser] = useState({});
  // user state change state
  const [isLoading, setIsLoading] = useState(true);
  // error state
  const [authError, setAuthError] = useState("");

  // declare auth
  const auth = getAuth();

  // google auth
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  // register new user
  const registerUser = (email, password, name, navigate, photo) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name, photoURL: photo };
        setUser(newUser);

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {});

        navigate("/courses");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // google sign in
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setAuthError("");
        const destination = location?.state?.from || "/courses";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //github sign in

  const githubSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setAuthError("");
        const destination = location?.state?.from || "/courses";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login user
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/courses";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // logout user
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    registerUser,
    loginUser,
    logout,
    user,
    isLoading,
    authError,
    signInWithGoogle,
    githubSignIn,
  };
};

export default useFirebase;
