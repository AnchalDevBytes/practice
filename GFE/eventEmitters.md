```bash

# Event :- Something that happens, like click of btn, api calls, login, logout, send emails, etc.
# Emitter :- Announcing it loud.
# Event Emitter :- When Event occurs like login we need to send notificaton or multiples function need to executed like send welcome msg, update dashboards, saveAnalystics, etc. 

#  So instead of call all the function manually after login we use EventEmitter, the function who need to run after login will subscribe it and if it need to remove it simple unsubscribe. When we call emitter = new EventEmitter internally this things will happen.

export default class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    # on methods say whenever someone emit the event <eventName> call all the listener attached to it or subscribe to it.
    on(eventName, listener) {
        if(!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }

        this.events.get(eventName).push(listener);

        return this;
    }

    # emit methods say whenever we want to emit the event <eventName> call all the listener attached to it or subscribe to it.
    emit(eventName, ...args) {
        if(!this.events.has(eventName)) return false;

        for(const listener of this.events.get(eventName)) {
            listener(...args);
        }

        return true;
    }

    # off methods say whenever we want to unsubscribe from the event <eventName> collect all the listener attached to it or subscribe to it and removed the listener from the event which need to unsubscribe.
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
