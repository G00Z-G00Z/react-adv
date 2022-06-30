import { lazy, LazyExoticComponent } from 'react'
import {
  AboutPage,
  HomePage,
  ShoppingPage,
} from "../02-component-patterns/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<() => JSX.Element>;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/home",
    path: "home",
    Component: HomePage,
    name: "Home Page",
  },
  {
    to: "/about",
    path: "about",
    Component: AboutPage,
    name: "About Page",
  },
  {
    to: "/shopping",
    path: "shopping",
    Component: ShoppingPage,
    name: "Shopping Page",
  },
];
