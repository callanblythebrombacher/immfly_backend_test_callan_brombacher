import { lazyLoad } from 'utils/loadable';

export const Countries = lazyLoad(
    () => import('./index'),
    module => module.Countries,
);
