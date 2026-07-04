const Sidebar = () => {
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
        <button className="mb-2 w-full rounded-lg bg-slate-800 px-4 py-3 text-left text-white">
          Dashboard
        </button>

        <button className="mb-2 w-full rounded-lg px-4 py-3 text-left text-slate-400 hover:bg-slate-800 hover:text-white">
          Applications
        </button>

        <button className="mb-2 w-full rounded-lg px-4 py-3 text-left text-slate-400 hover:bg-slate-800 hover:text-white">
          Analytics
        </button>

        <button className="mb-2 w-full rounded-lg px-4 py-3 text-left text-slate-400 hover:bg-slate-800 hover:text-white">
          Resume AI
        </button>
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