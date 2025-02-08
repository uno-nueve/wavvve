import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    AlbumPage,
    ArtistPage,
    CollectionPage,
    Dashboard,
    HomePage,
    Login,
    Root,
    SearchPage,
    UserPage,
} from "@/pages";

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
