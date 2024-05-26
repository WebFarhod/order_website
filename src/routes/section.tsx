import { lazy, Suspense } from "react";

import { Outlet, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/index";

export const HomePage = lazy(() => import("../pages/home/index"));

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <HomePage />, index: true },
        // { path: "teachers", element: <AdminTeachers /> },
        // { path: "classes", element: <AdminClasses /> },
        // { path: "programs", element: <AdminPrograms /> },
        // { path: "news", element: <AdminNews /> },
        // { path: "opinions", element: <AdminOpinions /> },
      ],
    },
  ]);

  return routes;
}
