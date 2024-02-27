import { UseFormReset } from "react-hook-form";

export type setLoadingType = React.Dispatch<React.SetStateAction<boolean>>;

export type ResetFormType = UseFormReset<any>;

export type UserInfo = {
  id: string;
  isOnline: boolean;
  email: string;
  username: string;
  img: string;
  creationTime: string;
  lastSeen: string;
  bio: string;
};
