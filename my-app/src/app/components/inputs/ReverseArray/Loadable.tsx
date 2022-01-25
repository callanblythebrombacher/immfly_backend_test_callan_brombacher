import { lazyLoad } from 'utils/loadable';

export const ReverseString = lazyLoad(
    () => import('./index'),
    module => module.ReverseString,
);
