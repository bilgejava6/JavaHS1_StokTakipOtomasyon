import {configureStore} from "@reduxjs/toolkit";
import {
    authSlice, markaSlice
} from './feature';
import {useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        auth: authSlice,
        marka: markaSlice,
    }
});

export type depoGlobalDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDepoSelector = useSelector.withTypes<RootState>();
export default store;