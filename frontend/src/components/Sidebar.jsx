import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const getLinkStyle = ({ isActive }) =>

        isActive
            ? "mb-2 block w-full rounded-lg bg-blue-600 px-4 py-3 text-left font-medium text-white transition-all"
            : "mb-2 block w-full rounded-lg px-4 py-3 text-left text-slate-400 transition-all hover:bg-slate-800 hover:text-white";

    return (

        <div className="flex w-64 flex-col border-r border-slate-800 bg-slate-900">

            <div className="border-b border-slate-800 p-6">

                <h1 className="text-2xl font-bold">

                    ApplyFlow

                </h1>

                <p className="mt-1 text-sm text-slate-400">

                    Career Management

                </p>

            </div>

            <div className="flex-1 p-4">

                <NavLink
                    to="/dashboard"
                    className={getLinkStyle}
                >
                    📊 Dashboard
                </NavLink>

                <NavLink
                    to="/applications"
                    className={getLinkStyle}
                >
                    💼 Applications
                </NavLink>

                <NavLink
                    to="/analytics"
                    className={getLinkStyle}
                >
                    📈 Analytics
                </NavLink>

                <NavLink
                    to="/resume-ai"
                    className={getLinkStyle}
                >
                    🤖 Resume AI
                </NavLink>

            </div>

            <div className="border-t border-slate-800 p-4">

                <p className="text-sm text-slate-400">

                    Aravindan

                </p>

                <p className="text-xs text-slate-500">

                    Job Seeker

                </p>

            </div>

        </div>

    );

};

export default Sidebar;