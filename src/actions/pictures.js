import { createAsyncThunk } from "@reduxjs/toolkit";
import { default as axios, storageURL } from "../api";

export const addPicture = createAsyncThunk(
  "pictures/addPicture",
  async (payload) => {
    const res = await axios.post(storageURL, payload, {
      headers: {
        "Content-type": "image/png",
      },
    });
    return res.data;
  }
);

// {
//     filename: "temp.png",
//     size: 434912,
//     type: "image/png",
//     url: "https://cdn.filestackcontent.com/CSqOSgtkTESEC5SuHpyj",
// }
