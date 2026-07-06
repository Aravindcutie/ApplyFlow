import StatCard from "../components/StatCard";
import StatusBarChart from "../components/StatusBarChart";
import StatusPieChart from "../components/StatusPieChart";

import useApplications from "../hooks/useApplications";

const AnalyticsPage = () => {

    const {

        totalApplications,

        statusCounts,

        chartData

    } = useApplications();

    const interviewRate =

        totalApplications === 0

            ? 0

            : Math.round(

                ((statusCounts.Interview || 0) /

                    totalApplications) * 100

            );

    const rejectionRate =

        totalApplications === 0

            ? 0

            : Math.round(

                ((statusCounts.Rejected || 0) /

                    totalApplications) * 100

            );

    const mostCommonStatus = chartData.reduce(

        (max, current) =>

            current.count > max.count

                ? current

                : max

    );

    return (

        <div className="p-8">

            <h1 className="text-3xl font-bold">

                Analytics

            </h1>

            <p className="mt-2 text-slate-400">

                Understand your job search progress.

            </p>

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

            <div className="mt-8 grid gap-6 lg:grid-cols-2">

                <StatusBarChart
                    data={chartData}
                />

                <StatusPieChart
                    data={chartData}
                />

            </div>

            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

                <h2 className="text-xl font-semibold">

                    Insights

                </h2>

                <div className="mt-5 space-y-3 text-slate-300">

                    <p>

                        📌 Most Common Status:

                        <span className="ml-2 font-semibold text-white">

                            {mostCommonStatus.status}

                        </span>

                    </p>

                    <p>

                        🎯 Interview Rate:

                        <span className="ml-2 font-semibold text-green-400">

                            {interviewRate}%

                        </span>

                    </p>

                    <p>

                        ❌ Rejection Rate:

                        <span className="ml-2 font-semibold text-red-400">

                            {rejectionRate}%

                        </span>

                    </p>

                    <p>

                        📈 Keep applying consistently to improve your interview opportunities.

                    </p>

                </div>

            </div>

        </div>

    );

};

export default AnalyticsPage;