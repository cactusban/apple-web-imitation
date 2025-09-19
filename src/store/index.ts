import { configureStore } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

const store = configureStore({
  reducer: {},
})
type DispatchType = typeof store.dispatch
type GetState = typeof store.getState
export const useAppDispatch = () => useDispatch<DispatchType>()
export type IrootState = ReturnType<GetState>
export const useAppSelector: TypedUseSelectorHook<IrootState> = useSelector
export default store
