```bash

# Event :- Something that happens, like click of btn, api calls, login, logout, send emails, etc.
# Emitter :- Announcing it load.
# Event Emitter :- When Event occurs like login we need to send notificaton or multiples function need to executed like send welcome msg, update dashboards, saveAnalystics, etc. 

#  So instead of call all the function manually after login we use EventEmitter, the function who need to run after login will subscribe it and if it need to remove it simple unsubscribe. When we call emitter = new EventEmitter internally this things will happe.

export default class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(eventName, listener) {
        if(!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        this.events.get(eventName).push(listener);

        return this;
    }

    emit(eventName, ...args) {
        if(!this.events.has(eventName)) return false;

        for(const listener of this.events.get(eventName)) {
            listener(...args);
        }

        return true;
    }

    off(eventName, listener) {
        if(!this.events.has(eventName)) return;

        const listeners = this.events.get(eventName);

        this.events.set(
            eventName,
            listeners.filter(li => li !== listener)
        );

        return this;
    }
}

```
