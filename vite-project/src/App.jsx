import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./lib/appRoutes";
import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/RegisterPage/RegisterPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import MainPage from "./pages/MainPage/MainPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import TaskPage from "./pages/TaskPage/TaskPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import NewTaskPage from "./pages/NewTaskPage/NewTaskPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path={appRoutes.MAIN} element={<MainPage />}>
            <Route path={appRoutes.TASK} element={<TaskPage />} />
            <Route path={appRoutes.EXIT} element={<ExitPage />} />
            <Route path={appRoutes.NEWTASK} element={<NewTaskPage />} />
          </Route>
        </Route>
        <Route path={appRoutes.LOGIN} element={<Login />} />
        <Route path={appRoutes.REGISTER} element={<Register />} />
        <Route path={appRoutes.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </>
  );
}
