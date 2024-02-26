import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { redirect } from "react-router-dom";
import { toastError } from "../utils/toast";
import { ResetFormType, setLoadingType } from "../utils/type";

export const useSignUpQuery = async (
  data: {
    email: string;
    password: string;
    confirmPassword: string;
  },
  setLoading: setLoadingType,
  reset: ResetFormType
) => {
  const { email, password, confirmPassword } = data;
  setLoading(true);
  if (email && password) {
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          reset();
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
  setLoading(false);
};

export const useSignInQuery = async (
  data: {
    email: string;
    password: string;
  },
  setLoading: setLoadingType,
  reset: ResetFormType
) => {
  const { email, password } = data;
  setLoading(true);
  await signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      console.log(user);
      reset();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toastError(`Error ${errorCode}: ${errorMessage}`);
    });
  setLoading(false);
};
