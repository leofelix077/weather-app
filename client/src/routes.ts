import Home from "./components/Home";
import WeatherContainer from "./components/WeatherContainer";

export interface RouteConfig {
  public: boolean;
  exact?: boolean;
  icon?: any;
  path: string;
  search?: string;
  label?: string;
  component: any;
  topLevel?: boolean;
  translate: string;
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
    translate: "home",
  },
  weather: {
    component: WeatherContainer,
    path: "/weather",
    public: true,
    label: "Weather",
    translate: "weather",
  },
};

export default ROUTES;
