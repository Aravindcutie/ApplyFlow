import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const COLORS = [
    "#2563eb",
    "#16a34a",
    "#dc2626"
];

const StatusPieChart = ({ data }) => {

    return (

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-6 text-xl font-semibold">

                Status Distribution

            </h2>

            <div className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="count"
                            nameKey="status"
                            outerRadius={110}
                            label
                        >

                            {
                                data.map((entry, index) => (

                                    <Cell
                                        key={entry.status}
                                        fill={COLORS[index % COLORS.length]}
                                    />

                                ))
                            }

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

};

export default StatusPieChart;