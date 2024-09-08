import {configureStore} from "@reduxjs/toolkit";
import {
    authSlice, markaSlice, modelSlice
} from './feature';
import {useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        auth: authSlice,
        marka: markaSlice,
        model: modelSlice,
    }
});

export type depoGlobalDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDepoSelector = useSelector.withTypes<RootState>();
export default store;