import loadable from '@loadable/component';
import HomeView from './views/HomeView';
import MenuLayout from './MenuLayout';

export const routers = [
  {
    path: '/',
    exact: true,
    component: HomeView,
    layout: MenuLayout,
  },
  {
    path: '/about',
    exact: true,
    component: loadable(() => import('./views/AboutView')),
    layout: MenuLayout,
  },
];
