import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/home";
import Tasks from "./pages/tasks";
import Mainlayout from "./layout/mainlayout";
import LeaveRequest from "./pages/leave";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="request-leave" element={<LeaveRequest />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
