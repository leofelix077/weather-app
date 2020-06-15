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
  graphs: {
    component: WorkInProgress,
    path: "/graphs",
    public: true,
    exact: true,
    label: "Random Graphs",
  },
  fancyGallery: {
    component: WorkInProgress,
    path: "/gallery",
    public: true,
    exact: true,
    label: "Fancy Gallery",
  },
  animation: {
    component: WorkInProgress,
    path: "/d3",
    public: true,
    label: "WeirD3",
    exact: true,
  },
  authenticated: {
    component: WorkInProgress,
    path: "/authenticated-route",
    public: false,
    label: "Logged-In Page",
    exact: true,
  },
  info: {
    component: WorkInProgress,
    path: "/info",
    public: true,
    topLevel: true,
    label: "Information",
    exact: true,
    children: {
      about: {
        component: WorkInProgress,
        path: "/about",
        public: false,
        label: "About",
      },
      contact: {
        component: WorkInProgress,
        path: "/contact",
        public: false,
        label: "Contact",
      },
      privacyPolicy: {
        component: WorkInProgress,
        path: "/privacy",
        public: false,
        label: "Privacy Policy",
      },
    },
  },
};

export default ROUTES;
