import Home from "./components/Home";
import WorkInProgress from "./components/WorkInProgress";

export interface RouteConfig {
  public: boolean;
  exact?: boolean;
  icon?: any;
  path: string;
  search?: string;
  label?: string;
  component: any;
  topLevel?: boolean;
  children?: { [key: string]: RouteConfig };
}

export interface Routes {
  [key: string]: RouteConfig;
}
const ROUTES: Routes = {
  home: {
    component: Home,
    path: "/home",
    public: true,
    label: "Home",
    exact: true,
  },
  weather: {
    component: WorkInProgress,
    path: "/weather",
    public: true,
    exact: true,
    label: "Weather",
  },
};

export default ROUTES;
