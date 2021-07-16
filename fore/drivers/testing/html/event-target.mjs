
export class EventTarget {

    constructor() {
        this.listeners = new Map();
    }

    addEventListener(type, listener) {
        let listenerList = new Set();
        if (this.listeners.has(type)) {
            listenerList = this.listeners.get(type);
        } else {
            this.listeners.set(type, listenerList);
        }
        listenerList.add(listener);
    }

    dispatchEvent(event) {
        let result = true;
        const listenersForType = this.listeners.get(event.type);
        if (listenersForType?.size > 0) {
            for (const listener of listenersForType) {
                listener(event);
            }
        }
        if (this.parent) {
            this.parent.dispatchEvent(event);
        }
        return !event.defaultPrevented;
    }

    removeEventListener(type, listener) {
        if (this.listeners.has(type)) {
            listenerList = this.listeners.get(type);
            listenerList.delete(listener);
        }
    }

}

