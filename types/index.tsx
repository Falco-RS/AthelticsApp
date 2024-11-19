/**
 * Interfaz `User`.
 * 
 * Representa los datos del usuario, incluyendo su `id`, `name`, `phone`, `password` y una función `setUser` 
 * para actualizar estos datos en el estado global.
 * 
 * @interface User
 */
export interface User {
  id: number;
  name: string;
  phone: string;
  password: string;
  setUser: (user: {id:number, email:string, name:string, phone:string, password:string}) => void;
}

/**
 * Interfaz `UserChat`.
 * 
 * Representa un usuario en el contexto de un chat. Esta interfaz almacena el `id` y el `name` de un usuario 
 * que puede ser seleccionado para interactuar en un chat.
 * 
 * @interface UserChat
 */
export interface UserChat{
  id: number;
  name: string;
}

/**
 * Interfaz `Message`.
 * 
 * Representa un mensaje enviado o recibido en un chat. Cada mensaje tiene un `id` único y un `content`
 * que almacena el texto del mensaje.
 * 
 * @interface Message
 */
export interface Message{
  id: number;
  content: string;
}

