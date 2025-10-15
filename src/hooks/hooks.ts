// hooks.ts
import {
  useDispatch,
  type TypedUseSelectorHook,
  useSelector,
} from "react-redux";

import type { RootState, AppDispatch } from "../redux/index";

// Typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Typed selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
