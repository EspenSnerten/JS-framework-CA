import { Router, Route, RootRoute } from "@tanstack/react-router";
import IndexPage from "./pages/index";
import ContactPage from "./pages/Contact";
import ItemPage from "./pages/Item";
import CheckoutPage from "./pages/Checkout";
import CheckoutSuccessPage from "./pages/CheckoutSuccess";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const checkoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: CheckoutPage,
});

const checkoutSuccessRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/checkoutsuccess",
  component: CheckoutSuccessPage,
});

const itemRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/item/$itemId",
  component: ItemPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  contactRoute,
  itemRoute,
  checkoutRoute,
  checkoutSuccessRoute,
]);

export const router = new Router({ routeTree });

export default router;
