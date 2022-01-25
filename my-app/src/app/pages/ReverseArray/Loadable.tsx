import { lazyLoad } from 'utils/loadable';

export const ReverseArray = lazyLoad(
    () => import('./index'),
    module => module.ReverseArray,
);
