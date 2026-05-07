import { createBrowserRouter, Navigate } from "react-router";
import React from "react";
// import AppLayout from "@/shared/components/layout/AppLayout";

// // Auth
// import LoginPage from "@/features/auth/pages/LoginPage";
// import RegisterPage from "@/features/auth/pages/RegisterPage";

// // Dashboard
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

// // Startup
// import StartupPage from "@/features/startup/pages/StartupPage";

// // Leaderboard
// import LeaderboardPage from "@/features/leaderboard/pages/LeaderboardPage";

export const router = createBrowserRouter([
  // Public routes
  //   {
  //     path: "/login",
  //     element: <LoginPage />,
  //   },
  //   {
  //     path: "/register",
  //     element: <RegisterPage />,
  //   },
  {
    path: "/",
    element: React.createElement(DashboardPage),
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
  // Protected app
  // {
  //   path: "/",
  //   element: <AppLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Navigate to="/dashboard" replace />,
  //     },
  //     {
  //       path: "dashboard",
  //       element: <DashboardPage />,
  //     },
  //     {
  //       path: "startup/:id",
  //       element: <StartupPage />,
  //     },
  //     {
  //       path: "leaderboard",
  //       element: <LeaderboardPage />,
  //     },
  //   ],
  // },

  // 404
]);
