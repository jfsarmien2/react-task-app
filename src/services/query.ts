import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { toastError } from "../utils/toast";
import { setLoadingType } from "../utils/type";

export const useSignUpQuery = (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const { email, password, confirmPassword } = data;
  if (email && password) {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toastError(`Error ${errorCode}: ${errorMessage}`);
        });
    } else {
      toastError("Password do not match.");
    }
  } else {
    toastError("Fields should not be left empty.");
  }
};
