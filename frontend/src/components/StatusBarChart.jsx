import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

const StatusBarChart = ({ data }) => {

    return (

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-6 text-xl font-semibold">

                Applications by Status

            </h2>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#334155"
                        />

                        <XAxis dataKey="status" />

                        <YAxis allowDecimals={false} />

                        <Tooltip />

                        <Bar
                            dataKey="count"
                            radius={[6, 6, 0, 0]}
                            fill="#2563eb"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};

export default StatusBarChart;