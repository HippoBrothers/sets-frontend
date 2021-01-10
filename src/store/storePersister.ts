import {
    Store, createAction, DeepPartial,
} from '@reduxjs/toolkit';
import type { RootState } from './store';

const localStorageKey = 'redux:state';
const allowedStoredPaths = [
    'room',
];

export const storeHydrated = createAction<Partial<RootState>>('STORE_HYDRATED');

export const persistStore = (store: Store): void => {
    store.subscribe(() => {
        const state = store.getState();

        const newState : any = {};
        allowedStoredPaths.forEach((path: string): void => {
            newState[path] = state[path];
        });
        localStorage.setItem(localStorageKey, JSON.stringify(newState));
    });
};

export const hydrateStore = (store: Store, listeners: Array<Function> = []): void => {
    const stringSavedState = localStorage.getItem(localStorageKey);
    let savedState = {};
    if (stringSavedState) {
        savedState = JSON.parse(stringSavedState);
    }
    store.dispatch(storeHydrated(savedState));

    listeners.forEach((fct: Function) => {
        fct(store, savedState);
    });
};

