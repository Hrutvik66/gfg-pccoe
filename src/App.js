import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
