import { lazyLoad } from 'utils/loadable';

export const SimpleArray = lazyLoad(
    () => import('./index'),
    module => module.SimpleArray,
);
