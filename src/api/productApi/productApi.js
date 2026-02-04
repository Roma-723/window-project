import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API="http://localhost:3000/data"

export const getUserProduct = createAsyncThunk(
    "product/getUserProduct",
    async () => {
        try {
            const  {data } = await axios.get(API) 
            return data
        } catch (error) {
            console.error(error);

        }
    }
);
