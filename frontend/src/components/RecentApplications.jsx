const RecentApplications = ({
    applications,
    selectedApplication,
    onEdit,
    onDelete
}) => {

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

    if (applications.length === 0) {

        return (

            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-12 text-center">

                <div className="text-6xl">
                    🔍
                </div>

                <h2 className="mt-4 text-2xl font-semibold">
                    No Applications Found
                </h2>

                <p className="mt-2 text-slate-400">
                    Try changing your search or filters.
                </p>

            </div>

        );

    }

    return (

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-4 text-xl font-semibold">

                Recent Applications

            </h2>

            <div className="space-y-4">

                {applications.map((app) => {

                    const isEditing =
                        selectedApplication?.id === app.id;

                    return (

                        <div
                            key={app.id}
                            className={`flex items-center justify-between rounded-lg p-4 transition-all duration-300 hover:-translate-y-1

                            ${
                                isEditing
                                    ? "border-2 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.45)]"
                                    : "border border-slate-800 hover:border-slate-600"
                            }`}
                        >

                            <div>

                                <h3 className="font-medium">

                                    {app.company}

                                </h3>

                                <p className="text-sm text-slate-400">

                                    {app.role}

                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <span
                                    className={`rounded-full px-3 py-1 text-sm ${getStatusStyle(
                                        app.status
                                    )}`}
                                >
                                    {app.status}
                                </span>

                                <button
                                    onClick={() => onEdit(app)}
                                    disabled={isEditing}
                                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300

                                    ${
                                        isEditing
                                            ? "cursor-default bg-blue-600"
                                            : "bg-slate-800 hover:scale-105 hover:bg-slate-700"
                                    }`}
                                >

                                    {
                                        isEditing
                                            ? "✏️ Editing"
                                            : "✏️ Edit"
                                    }

                                </button>

                                <button
                                    onClick={() => onDelete(app)}
                                    className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-red-700"
                                >

                                    🗑 Delete

                                </button>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

};

export default RecentApplications;  