import { createBrowserRouter, RouterProvider } from "react-router";
import { Root } from "./pages/root";
import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { SearchPage } from "./pages/search";
import { HomePage } from "./pages/home";
import { AlbumPage } from "./pages/album";
import { ArtistPage } from "./pages/artist";
import { CollectionPage } from "./pages/collection";
import { UserPage } from "./pages/user";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
                    { path: "overview", element: <HomePage /> },
                    { path: ":id", element: <UserPage /> },
                    { path: "search", element: <SearchPage /> },
                    { path: "collection", element: <CollectionPage /> },
                    { path: "album/:id", element: <AlbumPage /> },
                    { path: "artist/:id", element: <ArtistPage /> },
                ],
            },
        ],
    },
]);

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);

export default App;
