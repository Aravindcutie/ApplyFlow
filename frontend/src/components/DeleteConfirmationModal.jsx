import { useState } from "react";
import toast from "react-hot-toast";
import { deleteApplication } from "../services/applicationService";

const DeleteConfirmationModal = ({
    isOpen,
    application,
    onClose,
    onDeleteSuccess,
    onEditComplete
}) => {

    const [loading, setLoading] = useState(false);

    if (!isOpen || !application) {
        return null;
    }

    const handleDelete = async () => {

        setLoading(true);

        try {

            await deleteApplication(application.id);

            toast.success("Application deleted successfully!");

            onDeleteSuccess();

            onEditComplete();

            onClose();

        }

        catch (error) {

            console.error(error);

            toast.error("Failed to delete application.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

            <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl">

                <h2 className="text-2xl font-bold text-red-400">
                    Delete Application
                </h2>

                <p className="mt-4 text-slate-300">
                    Are you sure you want to delete
                </p>

                <div className="mt-4 rounded-lg border border-slate-700 bg-slate-800 p-4">

                    <h3 className="font-semibold text-lg">
                        {application.company}
                    </h3>

                    <p className="text-slate-400">
                        {application.role}
                    </p>

                </div>

                <p className="mt-4 text-sm text-red-400">
                    This action cannot be undone.
                </p>

                <div className="mt-6 flex gap-3">

                    <button
                        onClick={onClose}
                        disabled={loading}
                        className="flex-1 rounded-lg border border-slate-600 bg-slate-800 p-3 font-medium transition-colors hover:bg-slate-700"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleDelete}
                        disabled={loading}
                        className="flex-1 rounded-lg bg-red-600 p-3 font-medium transition-colors hover:bg-red-700"
                    >
                        {
                            loading
                                ? "Deleting..."
                                : "Delete"
                        }
                    </button>

                </div>

            </div>

        </div>

    );

};

export default DeleteConfirmationModal;