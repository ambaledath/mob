import { Page1, Page2, Page3 } from "./pages";

const routes = [
  {
    path: "/page1",
    element: Page1,
  },
  {
    path: "/page2",
    element: Page2,
  },
  {
    path: "/page3",
    element: Page3,
  },
];

const appRoutes = routes.map((route) => {
  return {
    ...route,
    element: route.element,
  };
});

export default appRoutes;
