import DesktopIcon from "../assets/icons/desktop.png";
import AnchorIcon from "../assets/icons/anchor.png";
import PersonIcon from "../assets/icons/person.png";
import SettingsIcon from "../assets/icons/Vector.png";
import Ports from "../pages/Ports/Ports";
import Dashboard from "../pages/Dashboard/Dashboard";
import Customers from "../pages/Customers/Customers";
import Settings from "../pages/Settings/Settings";

const routes = [
  {
    name: "dashboard",
    icon: DesktopIcon,
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "ports",
    icon: AnchorIcon,
    path: "ports",
    element: <Ports />,
  },
  {
    name: "customers",
    icon: PersonIcon,
    path: "customers",
    element: <Customers />,
  },
  {
    name: "settings",
    icon: SettingsIcon,
    path: "settings",
    element: <Settings />,
  },
];

export default routes;
