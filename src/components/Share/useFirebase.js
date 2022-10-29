import { useEffect, useState } from "react";
import { toast } from "react-toastify";
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
  const [user, setUser] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [authError, setAuthError] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const registerUser = (email, password, name, navigate, photo) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name, photoURL: photo };
        setUser(newUser);

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

  const signInWithGoogle = (location, navigate) => {
    toast.info("Signing In", {
      theme: "colored",
    });
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
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

  const githubSignIn = (location, navigate) => {
    toast.info("Signing In", {
      theme: "colored",
    });
    setIsLoading(true);
    signInWithPopup(auth, gitProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;

        setAuthError("");
        const destination = location?.state?.from || "/courses";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const loginUser = (email, password, location, navigate) => {
    toast.info("Signing In", {
      theme: "colored",
    });
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

  const logout = () => {
    toast.info("Logged Out", {
      theme: "colored",
      autoClose: 2000,
    });
    setIsLoading(true);
    localStorage.removeItem("toast-fix");
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
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
