import { create } from 'zustand'
import {User, UserChat} from "../types";

export const useUserStore = create<User>((set) => ({
  id: 0,
  name: "",
  phone: "",
  password: "",
  setUser: ({ id, email, name, phone,  password }:{id:number, email:string, name:string, phone:string, password:string}) => {
    set(() => ({
      id,
      email,
      name,
      phone,
      password,
    }));
  },
}));

