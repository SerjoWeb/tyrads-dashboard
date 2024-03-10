export interface IForm {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  fullname: string;
  email: string;
  password?: string;
  admin: boolean;
  image: string;
  created: Date | string;
  last_modified: Date | string;
}

export interface IStore {
  user: IUser | undefined | null;
  setUser: (user: IUser | undefined) => void;
}
