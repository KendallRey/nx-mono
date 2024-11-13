import { useDebounce, type Options } from 'use-debounce';
import { DEBOUNCE } from '../constants/config';

export const useAppDebounce = <T>(data: T, number?: number, options?: Options) => useDebounce(data, number ?? DEBOUNCE.DELAY, options);
