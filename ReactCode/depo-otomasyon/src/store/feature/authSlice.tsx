import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import swal from "sweetalert";

const initialStateAuth = {
    token: null,
    isLogin: false,
    user: {},
    loading: false,
}
interface ILogin{
    userName: string,
    password: string,
}
export const fetchDoLogin =
    createAsyncThunk(
        '',
        async (payload: ILogin)=>{
            const response = await fetch(
                'http://localhost:9090/yonetici/login',
                {
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userName: payload.userName,
                        password: payload.password
                    })
                }
            ).then(data=> data.json());
            return response;
        }
    )

export const fetchRegister =
    createAsyncThunk(
        '',
        ()=>{}
    )

const authSlice =
    createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchDoLogin.pending,(state)=>{
            state.loading = true;
        });
        builder.addCase(fetchDoLogin.fulfilled,(state,action)=>{
            state.loading = false;
            console.log(action.payload)
            if (action.payload.code===200){
                state.isLogin = true;
                state.token = action.payload.data.token;
            }else{
                swal('UYARI!','Kullanıcı adı ya da Şifre hatalıdır.','error')
            }

        })
    }
});

export default authSlice.reducer;