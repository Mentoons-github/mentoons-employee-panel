import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/home";
import Mainlayout from "./layout/mainlayout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
