import { configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'
import authSlice from './authSlice'
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})
type DispatchType = typeof store.dispatch
export const useAppDispatch = () => useDispatch<DispatchType>()
export type IrootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<IrootState> = useSelector
export default store
