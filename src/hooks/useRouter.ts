import { useRouterContext } from "../Components/routerComponent";

type PathProps = "/" | "/about";

export const useRouter = () => {
  const {
    actions: { setPathname },
  } = useRouterContext();

  const push = (path: PathProps) => {
    setPathname(path);

    window.history.pushState({}, "", path);
  };

  return { push };
};
