import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // import Home from "./Home";
import Home from "./Home";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ]);

    return (
        <div
            className="App container"
            // style={{
            // 	minHeight: "100vh",
            // 	backgroundImage:
            // 		'url("https://static.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png")',
            // }}
        >
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
