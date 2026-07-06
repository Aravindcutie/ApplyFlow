import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import {
    createApplication,
    updateApplication
} from "../services/applicationService";

const AddApplicationForm = ({
    application,
    onApplicationAdded,
    onEditComplete
}) => {

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");
    const [loading, setLoading] = useState(false);
    const [highlight, setHighlight] = useState(false);

    const formRef = useRef(null);

    useEffect(() => {

        if (application) {

            setCompany(application.company);
            setRole(application.role);
            setStatus(application.status);

            formRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            setHighlight(true);

            setTimeout(() => {
                setHighlight(false);
            }, 1800);

        }

    }, [application]);

    const clearForm = () => {

        setCompany("");
        setRole("");
        setStatus("Applied");

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            if (application) {

                await updateApplication(
                    application.id,
                    {
                        company,
                        role,
                        status
                    }
                );

                toast.success("Application updated successfully!");

                clearForm();

                onApplicationAdded();

                onEditComplete();

            } else {

                await createApplication({
                    company,
                    role,
                    status
                });

                toast.success("Application added successfully!");

                clearForm();

                onApplicationAdded();

            }

        }

        catch (error) {

            console.error(error);

            toast.error("Operation failed.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div
            ref={formRef}
            className={`mt-8 rounded-xl bg-slate-900 p-6 transition-all duration-500 ${
                highlight
                    ? "border-2 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.9)] scale-[1.01]"
                    : "border border-slate-800"
            }`}
        >

            <h2
                className={`mb-5 text-xl font-semibold transition-all duration-300 ${
                    highlight
                        ? "animate-pulse text-blue-400"
                        : "text-white"
                }`}
            >

                {
                    application
                        ? `✏️ Editing: ${application.company}`
                        : "Add Application"
                }

            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
                />

                <input
                    type="text"
                    placeholder="Role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
                />

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3"
                >
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Rejected</option>
                </select>

                <div className="flex gap-3">

                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 rounded-lg bg-blue-600 p-3 font-medium transition-colors hover:bg-blue-700"
                    >
                        {
                            loading
                                ? "Saving..."
                                : application
                                    ? "Save Changes"
                                    : "Add Application"
                        }
                    </button>
                    {
                        application && (

                            <button
                                type="button"
                                onClick={() => {                                    
                                    onEditComplete();
                                    clearForm();
                                    toast("Edit cancelled");
                                }}
                                className="flex-1 rounded-lg border border-slate-600 bg-slate-800 p-3 font-medium transition-colors hover:bg-slate-700"
                            >

                                Cancel

                            </button>

                        )
                    }

                </div>

            </form>

        </div>

    );

};

export default AddApplicationForm;