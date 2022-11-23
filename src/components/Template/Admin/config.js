import avatar from "../../../assets/illustrations/avatar_default.jpg";
// mui icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// ----------------------------------------------------------------------

 const navConfig = [
  {
    title: "Dashboard",
    path: "/",
    icon: DashboardIcon,
  },
  {
    title: "User",
    path: "/user",
    icon: ManageAccountsIcon,
  },
  {
    title: "Product",
    path: "/product",
    icon: StoreIcon,
  },
  {
    title: "Category",
    path: "/category",
    icon: CategoryIcon,
  },
  {
    title: "Blog",
    path: "/blog",
    icon: CollectionsBookmarkIcon,
  },
  {
    title: "Reports",
    path: "/login",
    icon: BarChartIcon,
  },
];
const account = {
  displayName: "Duong Nguyen",
  email: "demo@minimals.cc",
  photoURL: avatar,
};

export { account, navConfig };
