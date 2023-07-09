import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { closeModal } from "../modalDelivey/modalDeliveySlice";
import { clearOrder } from "../order/OrderSlice";

const initialState = {
  name: "",
  phone: "",
  format: "delivery",
  address: "",
  floor: "",
  intercom: "",
};

export const submiFormDelivery = createAsyncThunk(
  "formDelivery/submit",
  async (data, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://cloudy-slash-rubidium.glitch.me/api/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error(`Ошибка: ${response.statusText}`);

      dispatch(clearOrder());
      dispatch(closeModal());

      return await response.json();
    } catch (e) {
      rejectWithValue(e.message);
    }
  }
);

const formDeliverySlice = createSlice({
  name: "formDelivery",
  initialState,
  reducers: {
    updateFormValue: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submiFormDelivery.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.response = null;
      })
      .addCase(submiFormDelivery.fulfilled, (state, action) => {
        state.status = "success";
        state.response = action.payload;
      })
      .addCase(submiFormDelivery.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { updateFormValue } = formDeliverySlice.actions;
export default formDeliverySlice.reducer;
