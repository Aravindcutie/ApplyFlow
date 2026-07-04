
const RecentApplications = ({ applications }) => {
  
  const getStatusStyle = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-500/20 text-blue-400";

      case "Interview":
        return "bg-green-500/20 text-green-400";

      case "Rejected":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Recent Applications
      </h2>

      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between rounded-lg border border-slate-800 p-4"
          >
            <div>
              <h3 className="font-medium">
                {app.company}
              </h3>

              <p className="text-sm text-slate-400">
                {app.role}
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm ${getStatusStyle(
                app.status
              )}`}
            >
              {app.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentApplications;