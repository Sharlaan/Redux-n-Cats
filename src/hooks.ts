import { createTypedHooks } from 'easy-peasy';
import { StoreModel } from './store';

const { useActions, useStore, useDispatch } = createTypedHooks<StoreModel>();

export { useActions, useDispatch, useStore };
