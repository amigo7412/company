import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../pages/public";
import _ROUTERS from "../constants/menu.constant";
import HomePage from "../pages/public/home";
import AboutPage from "../pages/public/about";
import ProjectPage from "../pages/public/project";
import ContactPage from "../pages/public/contact";
import ServicePage from "pages/public/services";
import Service1Page from "pages/public/services1";
import Project1Page from "pages/public/project1";

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
                element: <ServicePage />
            },
            {
                path: 'services1',
                element: <Service1Page />
            },
            {
                path: 'project1',
                element: <Project1Page />
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
