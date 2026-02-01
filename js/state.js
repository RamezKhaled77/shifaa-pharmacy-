
class StateManager {
    constructor() {
        this.state = {};
        this.listeners = [];
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
             this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }

    getState() {
        return this.state;
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

export const appState = new StateManager();
