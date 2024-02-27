import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "./firebase";
import { toastError } from "../utils/toast";
import { ResetFormType, UserInfo, setLoadingType } from "../utils/type";
import { NavigateFunction } from "react-router-dom";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { USERCOLLECTION } from "../utils/constant";
import { faker } from "@faker-js/faker";
import { defaulUser } from "../redux/store";

const addUserToCollection = async (
  id: string,
  email: string,
  username: string,
  img: string
) => {
  await setDoc(doc(db, USERCOLLECTION, id), {
    isOnline: true,
    email: email,
    username: username,
    img: img,
    creationTime: serverTimestamp(),
    lastSeen: serverTimestamp(),
    bio: `Hi my name ${username}`,
  });

  return getUserInfo(id);
};

const getUserInfo = async (id: string): Promise<UserInfo> => {
  const userRef = doc(db, USERCOLLECTION, id);
  const user = await getDoc(userRef);
  if (user.exists()) {
    const { isOnline, email, username, img, creationTime, lastSeen, bio } =
      user.data();
    return {
      id: user.id,
      isOnline,
      email,
      username,
      img,
      creationTime,
      lastSeen,
      bio,
    };
  } else {
    toastError("getUserInfo: user not found!");
    return defaulUser;
  }
};

export const useSignUpQuery = async (
  data: {
    email: string;
    password: string;
    confirmPassword: string;
  },
  setLoading: setLoadingType,
  reset: ResetFormType,
  goTo: NavigateFunction
) => {
  const { email, password, confirmPassword } = data;
  setLoading(true);
  if (email && password) {
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          const userInfo = addUserToCollection(
            user?.uid,
            user?.email! || faker.internet.email(),
            faker.internet.userName(),
            "imgLink"
          );
          reset();
          goTo("/dashboard");
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
  reset: ResetFormType,
  goTo: NavigateFunction
) => {
  const { email, password } = data;
  setLoading(true);
  await signInWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      const userInfo = getUserInfo(user.uid);
      reset();
      goTo("/dashboard");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toastError(`Error ${errorCode}: ${errorMessage}`);
    });
  setLoading(false);
};
