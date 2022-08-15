import { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from "./screens/Navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setCurrentUser(user);
        } else {
          setCurrentUser(null);
        }
      }),
    []
  );
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
