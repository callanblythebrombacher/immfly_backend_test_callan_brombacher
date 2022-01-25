import { lazyLoad } from 'utils/loadable';

export const CountriesTable = lazyLoad(
    () => import('./index'),
    module => module.CountriesTable,
);
