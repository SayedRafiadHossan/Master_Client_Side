import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import "./App.css";
import Blog from "./Blog/Blog";
import Home from "./Home/Home";
import Login from "./Login/Login.js";
import Signup from "./Signup/Signup";
import Error from "./Error/Error";
import Faq from "./FAQ/Faq";
import Courses from "./Courses/Courses";
import Details from "./components/Details/Details";
import PremiumAcess from "./components/PremiumAcess/PremiumAcess";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Home",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          element: (
            <PrivateRoute>
              <Courses></Courses>
            </PrivateRoute>
          ),
          loader: () => fetch("http://localhost:5000/courses"),
        },
        {
          path: "/details/:id",
          element: (
            <PrivateRoute>
              <Details></Details>
            </PrivateRoute>
          ),
        },
        {
          path: "/premiumAcess/:id",
          element: (
            <PrivateRoute>
              <PremiumAcess></PremiumAcess>
            </PrivateRoute>
          ),
        },
        {
          path: "/Blog",
          element: (
            <PrivateRoute>
              <Blog></Blog>
            </PrivateRoute>
          ),
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/Signup",
          element: <Signup></Signup>,
        },
        {
          path: "/Faq",
          element: <Faq></Faq>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
