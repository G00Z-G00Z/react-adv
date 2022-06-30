import { lazy, LazyExoticComponent } from 'react'
import { NoLazy } from '../01-lazyload/pages/NoLazy'

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<() => JSX.Element>;
  name: string;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/lazy-layout/*",
    to: "/lazy-layout/",
    Component: LazyLayout,
    name: "Lazy layout",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
