import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";

import useApplications from "../hooks/useApplications";

const DashboardPage = () => {

    const {

        totalApplications,

        statusCounts

    } = useApplications();

    return (

        <div className="p-8">

            <DashboardHeader />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                <StatCard
                    title="Applications"
                    value={totalApplications}
                />

                <StatCard
                    title="Applied"
                    value={statusCounts.Applied || 0}
                />

                <StatCard
                    title="Interviews"
                    value={statusCounts.Interview || 0}
                />

                <StatCard
                    title="Rejections"
                    value={statusCounts.Rejected || 0}
                />

            </div>

            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-8">

                <h2 className="text-2xl font-semibold">

                    Welcome Back 👋

                </h2>

                <p className="mt-3 text-slate-400">

                    Track your applications, monitor interview progress,
                    and gain insights into your job search journey.

                </p>

                <div className="mt-6 rounded-lg border border-blue-500/20 bg-blue-500/10 p-5">

                    <p className="font-medium text-blue-300">

                        🚀 Coming Soon

                    </p>

                    <ul className="mt-3 space-y-2 text-slate-300">

                        <li>📈 Analytics Dashboard</li>

                        <li>🤖 AI Resume Matching</li>

                        <li>📄 ATS Resume Score</li>

                        <li>🎯 Personalized Suggestions</li>

                    </ul>

                </div>

            </div>

        </div>

    );

};

export default DashboardPage;