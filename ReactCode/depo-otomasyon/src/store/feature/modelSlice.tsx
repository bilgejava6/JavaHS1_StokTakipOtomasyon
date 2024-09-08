import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import IModel from "../../models/IModel";
const initialStateModel = {
    modelList: [],
    loading: false,
}
export const fetchModelEkle = createAsyncThunk(
    'model/fetchModelEkle',async (payload: IModel)=>{
        const response = await fetch('http://localhost:9090/model/add-model',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                markaId: payload.markaId,
                modelAdi: payload.modelAdi
            })
        }).then(data=> data.json())
        return response;
})
export const fetchModelListele = createAsyncThunk(
    'model/fetchModelListele',async ()=>{
        return await fetch('http://localhost:9090/model/get-all').then(data=> data.json());
})
export const fetchModelDuzenle = createAsyncThunk(
    'model/fetchModelDuzenle',async (payload: IModel)=>{
        const response = await fetch('http://localhost:9090/model/edit-model',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(data=>data.json());
        return response;
})
export const fetchModelSil = createAsyncThunk(
    'model/fetchModelSil',async (modelId: number)=>{
        const response = fetch('http://localhost:9090/model/delete-by-id?modelId'+modelId,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(data=>data.json());
        return response;

})
const modelSlice = createSlice({
    name: 'model',
    initialState: initialStateModel,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchModelListele.fulfilled,(state,action)=>{
            state.modelList = action.payload.data
        })
    }
})
export  default  modelSlice.reducer;