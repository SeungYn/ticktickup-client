import { useDispatch, useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from '../modules';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
