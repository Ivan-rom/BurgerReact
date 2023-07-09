import { createSlice } from "@reduxjs/toolkit";

const modalDeliveySlice = createSlice({
  name: "modalDelivery",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalDeliveySlice.actions;
export default modalDeliveySlice.reducer;
