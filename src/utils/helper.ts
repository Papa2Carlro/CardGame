import {Entries} from "./utilsTypes";

export const random = (min:number, max:number) : number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const entries = <T,>(obj: T): Entries<T> => Object.entries(obj as any) as any;
