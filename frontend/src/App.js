
import './App.css';
import Header from './components/Header/Header';
import Footer from "./components/Footer";
import TeacherCard from "./pages/home/TeacherCard"
import LandingPage from "./pages/home/Landing"
import Login from "./pages/Login/Login"
import SingUp from "./pages/Register/Signup"
import Dashboard from "./pages/Dashboard/Dashboard"
// import Landing from './home/Landing';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import TestPage from './pages/test/test';
import PrivateRoute from './components/Routes/Private';
import ForgetPassword from './pages/Login/ForgetPassword';
import ConfirmPassword from './pages/Login/ConfirmPassword';
// import { useDispatch } from "react-redux";




const Routing = () => {
  // const history = useNavigate();
  // const dispatch = useDispatch();
  // const user = "admin";
  // console.log(user)
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>  </Route>
      <Route path="/library" element={<TeacherCard />}>  </Route>
      <Route path="/login" element={<Login />}>  </Route>
      <Route path="/ForgetPassword" element={<ForgetPassword />}>  </Route>
      <Route path="/ConfirmPassword/:token" element={<ConfirmPassword />}>  </Route>
      <Route path="/SignUp" element={<SingUp />}>  </Route>
      <Route path="/TestPage" element={<TestPage />}>  </Route>
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="" element={<Dashboard />}>  </Route>
      </Route>
      {/*
      <Route path="/ucam" element={<Ucam />}>  </Route>
      <Route path="/teacher-dashboard" element={<TeacherDashboard />}>  </Route>
      <Route path="/admin-dashboard" element={<AdminDashboard />}>  </Route>
      <Route path="/admin/course-info" element={<AdminCourseInfo />}>  </Route>
      <Route path="/admin/student-info" element={<StudentInfo />}>  </Route>
      <Route path="/admin/teacher-info" element={<TeacherInfo />}>  </Route>
      <Route path="/messages" element={<Messages />}>  </Route>
      <Route path="/profile" element={<Profile />}>  </Route>
      <Route path="/settings" element={<Settings />}>  </Route>
      <Route path="/grades" element={<Grades />}>  </Route>
      <Route path="/login" element={<Login />}>  </Route>
      <Route path="/register" element={<Register />}>  </Route>
      <Route path="/all-courses" element={<AllCourses />}>  </Route>
      <Route path="/course/:courseId" element={<CourseInfo />}>  </Route>
      <Route path="*" element={<NotFound />}>  </Route> */}
    </Routes>
  );
};
// const LoginPage = () => {
//   return (
//     <Routes>
//       <Route path="/Login" element={<Login />}>  </Route>
//     </Routes>
//   );
// };


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
}

export default App;