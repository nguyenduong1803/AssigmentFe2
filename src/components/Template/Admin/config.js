import avatar from "../../../assets/illustrations/avatar_default.jpg";
// mui icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import ManageAccountsIcon from '@mui/icons-material//ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import StoreIcon from '@mui/icons-material/Store';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// ----------------------------------------------------------------------

 const navConfig = [
  {
    title: "Dashboard",
    path: "/manage/",
    icon: DashboardIcon,
  },
  {
    title: "User",
    path: "/manage/user",
    icon: ManageAccountsIcon,
  },
  {
    title: "Product",
    path: "/manage/product",
    icon: StoreIcon,
  },
  {
    title: "Category",
    path: "/manage/category",
    icon: CategoryIcon,
  },
  {
    title: "Blog",
    path: "/manage/blog",
    icon: CollectionsBookmarkIcon,
  },
  {
    title: "Reports",
    path: "/manage/blog",
    icon: BarChartIcon,
  },
];
const account = {
  displayName: "Duong Nguyen",
  email: "demo@minimals.cc",
  photoURL: avatar,
};

export { account, navConfig };
