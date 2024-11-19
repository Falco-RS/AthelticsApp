import { create } from 'zustand'
import {User, UserChat} from "../types";

/**
 * Hook `useUserStore`.
 * 
 * Este hook crea y maneja un estado global utilizando `zustand` para almacenar la información del usuario
 * (como su `id`, `name`, `phone` y `password`). El estado se puede acceder y modificar a través de la función
 * `setUser`, que actualiza los datos del usuario en el store.
 * 
 * @returns {Object} - El objeto de estado global que contiene los datos del usuario y la función `setUser` para actualizarlos.
 */
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

