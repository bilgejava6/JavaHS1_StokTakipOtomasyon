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
        'auth/fetchLogin',
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
interface IRegisterPayload{
    userName: string,
    password: string,
    email: string
}
export const fetchRegister =
    createAsyncThunk(
        'auth/fetchRegister',
        async (payload: IRegisterPayload)=>{
                const  response = await fetch(
                    'http://localhost:9090/yonetici/register',{
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userName: payload.userName,
                            password: payload.password,
                            email: payload.email
                        })
                    }
                )
        }
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
                /**
                 * LocalStorage -> Browser in harddiski olarak görebilirsiniz ya da DataBase i olarak düşünebilirsiniz.
                 * SessionStorage -> Browser in ilgili siteye bağlı olduğu sürece geçerli data alanını ifade eder.
                 * DİKKAT!!!!
                 * Eğer kullanıcı beni hatırla derse localstorage kullanmak mantıklıdır. diğer durumlada session
                 * kullanmak daha doğru olacatır.
                */
                state.isLogin = true;
                state.token = action.payload.data.token;
                //localStorage.setItem("token", action.payload.data.token);
                sessionStorage.setItem("token",action.payload.data.token);
            }else{
                swal('UYARI!','Kullanıcı adı ya da Şifre hatalıdır.','error')
            }

        })
    }
});

export default authSlice.reducer;