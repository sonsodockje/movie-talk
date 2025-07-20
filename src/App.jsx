import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Myinfo from "./pages/Myinfo";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "detail/:id", element: <DetailPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "account/:id", element: <Myinfo /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
