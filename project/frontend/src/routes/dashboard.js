// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import FolderShared from "@material-ui/icons/FolderShared";
import School from "@material-ui/icons/School";
import MeetingRoom from "@material-ui/icons/MeetingRoom";
import Book from "@material-ui/icons/Book";
import CameraIcon from "@material-ui/icons/CenterFocusStrong";
// core components/views
import DashboardPage from "../views/Dashboard/Dashboard.jsx";
import UserProfile from "../views/UserProfile/UserProfile.jsx";
import StudentList from "../views/Students/StudentList";
import NewStudent from "../views/Students/NewStudent.jsx"
import RoomList from "../views/Rooms/RoomList";
import SubjectList from "../views/Subjects/SubjectList";
import CameraList from "../views/Cameras/CameraList";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    sidebarLink: true,
    component: DashboardPage
  },
  {
    path: "/students",
    sidebarName: "Students",
    navbarName: "Students",
    icon: School,
    sidebarLink: true,
    component: StudentList
  },
  {
    path: "/rooms",
    sidebarName: "Rooms",
    navbarName: "Rooms",
    icon: MeetingRoom,
    sidebarLink: true,
    component: RoomList
  },
  {
    path: "/subjects",
    sidebarName: "Subjects",
    navbarName: "Subjects",
    icon: Book,
    sidebarLink: true,
    component: SubjectList
  },
  {
    path: "/teachers",
    sidebarName: "Teachers",
    navbarName: "Teachers",
    icon: FolderShared,
    sidebarLink: true,
    component: SubjectList
  },
  {
    path: "/cameras",
    sidebarName: "Cameras",
    navbarName: "Cameras",
    icon: CameraIcon,
    sidebarLink: true,
    component: CameraList
  },
  {
    path: "/students/new",
    sidebarName: "New Student",
    navbarName: "New Student",
    icon: Person,
    sidebarLink: false,
    component: NewStudent
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
