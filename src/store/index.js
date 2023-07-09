import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import ProductReducer from "./product/ProductSlice";
import OrderReducer, { localStorageMiddleware } from "./order/OrderSlice";
import modalDeliveyReducer from "./modalDelivey/modalDeliveySlice";
import formDeliveryReducer from "./formDelivery/formDeliverySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: ProductReducer,
    order: OrderReducer,
    modalDelivery: modalDeliveyReducer,
    formDelivery: formDeliveryReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
