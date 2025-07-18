import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import roundsReducer from "./slices/roundsSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    user: userReducer,
    rounds: roundsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
