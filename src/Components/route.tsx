import { useState, useEffect, ReactElement } from "react";
import { useRouterContext } from "./router";

interface RouteProps {
  path: string;
  component: ReactElement;
}

const Route = ({ path, component }: RouteProps) => {
  const [isPath, setIsPath] = useState(false);
  const {
    state: { pathname },
    actions: { setPathname },
  } = useRouterContext();

  useEffect(() => {
    path === pathname ? setIsPath(true) : setIsPath(false);

    window.onpopstate = (e) => {
      setPathname(window.location.pathname);
    };
  }, [pathname]);

  return isPath ? component : null;
};

export default Route;
