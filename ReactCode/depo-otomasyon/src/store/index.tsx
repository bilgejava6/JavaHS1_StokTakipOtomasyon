import {configureStore} from "@reduxjs/toolkit";
import {
    authSlice
} from './feature';
import {useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        auth: authSlice
    }
});

export type depoGlobalDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDepoSelector = useSelector.withTypes<RootState>();
export default store;