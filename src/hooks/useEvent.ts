import {useEffect} from "react";
import EventEmitter from "../class/utils/EventEmitter";

export const eventEmitter = new EventEmitter();

type EventCallback<T> = (data: T) => void;

export function useEvent<T = any>(eventName: string, callback: EventCallback<T>): void {
  useEffect(() => {
    const unsubscribe = eventEmitter.subscribe(eventName, callback);
    return () => unsubscribe();
  }, [eventName, callback]);
}
