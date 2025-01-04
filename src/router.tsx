import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "./pages/root";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { Search } from "./pages/search";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "signin", element: <Login /> },
            {
                path: "app",
                element: <Dashboard />,
                children: [
                    { element: <Search />, index: true },
                    { path: ":id", element: <Search /> },
                ],
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
