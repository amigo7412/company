import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../pages/public";
import _ROUTERS from "../constants/menu.constant";
import HomePage from "../pages/public/home";
import AboutPage from "../pages/public/about";
import ProjectPage from "../pages/public/project";
import ContactPage from "../pages/public/contact";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: _ROUTERS.home,
                element: <HomePage />
            },
            {
                path: _ROUTERS.offers,
                element: <AboutPage />
            },
            {
                path: _ROUTERS.about,
                element: <AboutPage />
            },
            {
                path: _ROUTERS.project,
                element: <ProjectPage />
            },
            {
                path: _ROUTERS.services,
                element: <ProjectPage />
            },
            {
                path: _ROUTERS.pricing,
                element: <ProjectPage />
            },
            {
                path: _ROUTERS.contact,
                element: <ContactPage />
            }
        ],
    },
    {
        path: "*",
        element: <></>
    }
])

export default routers;
