interface RouteConfig {
  public: boolean;
  exact?: boolean;
  icon?: any;
  path: string;
  search?: string;
  label?: string;
  component: any;
  children?: { [key: string]: RouteConfig };
}

interface Routes {
  [key: string]: RouteConfig;
}
const ROUTES: Routes = {
  graphs: {
    component: null,
    path: "/graphs",
    public: true,
    label: "Random Graphs",
  },
  fancyGallery: {
    component: null,
    path: "/gallery",
    public: true,
    label: "Fancy Gallery",
  },
  animation: {
    component: null,
    path: "/graphs",
    public: true,
    label: "WeirD3",
  },
  authenticated: {
    component: null,
    path: "/authenticated-route",
    public: false,
    label: "Logged-In Page",
  },
  info: {
    component: null,
    path: "/info",
    public: false,
    label: "Information",
    children: {
      about: {
        component: null,
        path: "/about",
        public: false,
        label: "About",
      },
      contact: {
        component: null,
        path: "/contact",
        public: false,
        label: "Contact",
      },
      privacyPolicy: {
        component: null,
        path: "/contact",
        public: false,
        label: "Privacy Policy",
      },
    },
  },
};

export default ROUTES;
