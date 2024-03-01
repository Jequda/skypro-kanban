import { Route, Routes, useNavigate } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function login(newUser) {
    setUser(newUser);
    navigate(appRoutes.MAIN);
  }
  function logout(evt) {
    setUser(null);
    evt.preventDefault();
    navigate(appRoutes.LOGIN);
  }

  return (
    <Routes>
      <Route element={<PrivateRoute user={user} />}>
        <Route path={appRoutes.MAIN} element={<MainPage user={user} />}>
          <Route path={appRoutes.TASK} element={<TaskPage />} />
          <Route path={appRoutes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={appRoutes.LOGIN} element={<Login login={login} />} />
      <Route path={appRoutes.REGISTER} element={<Register login={login} />} />
      <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
