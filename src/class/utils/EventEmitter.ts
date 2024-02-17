import {Record} from "../../utils/utilsTypes";

type EventCallback<T = any> = (data: T) => void;

class EventEmitter<T = any> {
  private events: Record<string, EventCallback<T>[]> = {};

  subscribe(eventName: string, callback: EventCallback<T>): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(callback);

    return () => {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    };
  }

  emit(eventName: string, data: T): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(data));
    }
  }
}

export default EventEmitter
