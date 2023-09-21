import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "src/ducks/store";
import {AppDispatch} from "src/ducks/store";


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
