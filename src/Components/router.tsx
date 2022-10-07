import { useState, useContext, createContext, ReactNode } from "react";

interface RoutesProps {
  children: ReactNode;
}

const RouterContext = createContext({
  state: { pathname: "" },
  actions: { setPathname: Function() },
});

const Router = ({ children }: RoutesProps) => {
  const [pathname, setPathname] = useState(window.location.pathname);
  const value = {
    state: { pathname },
    actions: { setPathname },
  };

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
};

export default Router;

export const useRouterContext = () => {
  return useContext(RouterContext);
};
