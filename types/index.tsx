export interface User {
  id: number;
  name: string;
  phone: string;
  password: string;
  setUser: (user: {id:number, email:string, name:string, phone:string, password:string}) => void;
}

export interface UserChat{
  id: number;
  name: string;
}

export interface Message{
  id: number;
  content: string;
}

