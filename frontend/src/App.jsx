import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import DashboardPage from "./pages/DashboardPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ResumeAIPage from "./pages/ResumeAIPage";

function App() {

    return (

        <MainLayout>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />

                <Route
                    path="/applications"
                    element={<ApplicationsPage />}
                />

                <Route
                    path="/analytics"
                    element={<AnalyticsPage />}
                />

                <Route
                    path="/resume-ai"
                    element={<ResumeAIPage />}
                />

            </Routes>

        </MainLayout>

    );

}

export default App;