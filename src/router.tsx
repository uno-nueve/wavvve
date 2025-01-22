import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "./pages/root";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SearchPage } from "./pages/search";
import { HomePage } from "./pages/home";
import { AlbumPage } from "./pages/album";
import { ArtistPage } from "./pages/artist";

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
                    { element: <HomePage />, index: true },
                    { path: ":id", element: <HomePage /> },
                    { path: "search", element: <SearchPage /> },
                    { path: "album/:id", element: <AlbumPage /> },
                    { path: "artist/:id", element: <ArtistPage /> },
                ],
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
