import { lazyLoad } from 'utils/loadable';

export const Array = lazyLoad(
    () => import('./index'),
    module => module.Array,
);
