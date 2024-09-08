import IMarka from "../../models/IMarka";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
const initialStateMarka = {
    markaList: [],
    markaAdList: [],
    isLoding: false,
    isMarkaAdi: false
}

export const fetchMarkaEkle = createAsyncThunk(
    'marka/fetchMarkaEkle',
    async (payload: IMarka)=>{
        const response = await fetch(
            'http://localhost:9090/marka/add-marka',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(data=> data.json())
        return response;
    }
)


export const fetchMarkaListele = createAsyncThunk(
    'marka/fetchMarkaListele',
    async ()=>{
        return fetch('http://localhost:9090/marka/get-all').then(data=>data.json());
    }
)

export const fetchMarkaSil = createAsyncThunk(
    'marka/fetchMarkaSil',
    async (markaId: number)=>{
        const response = await  fetch(
            'http://localhost:9090/marka/delete?id='+markaId,
            {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(data=>data.json())
        return response;
    }
)

export const fetchMarkaEdit = createAsyncThunk(
    'marka/fetchMarkaEdit',
    async (payload: IMarka)=>{
        const response = await fetch(
            'http://localhost:9090/marka/edit-marka',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }
        ).then(data=>data.json())
        return response;
    }
)

export const fetchFindMarka = createAsyncThunk(
    'marka/fetchFindMarka',
    async (markaAdi: string)=>{
        return await fetch('http://localhost:9090/marka/find-by-marka-ad?markaAdi='+markaAdi)
            .then(data=>data.json());
    }
)


export const fetchMarkaAdList = createAsyncThunk(
    'marka/fetchMarkaAdList',
    async ()=>{
        return await fetch('http://localhost:9090/marka/get-all-marka-ad').then(data=>data.json());
    }
)
const markaSlice = createSlice({
    name: 'marka',
    initialState: initialStateMarka,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(fetchMarkaListele.fulfilled,(state,action)=>{
          state.markaList = action.payload.data;
        })
        builder.addCase(fetchFindMarka.fulfilled,(state,action)=>{
            state.isMarkaAdi = action.payload.data;
        })
        builder.addCase(fetchMarkaAdList.fulfilled,(state,action)=>{
            state.markaAdList = action.payload.data;
        })
    }
})

export default markaSlice.reducer;