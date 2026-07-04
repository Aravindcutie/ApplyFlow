import toast from "react-hot-toast";
import { useState } from "react";
import { createApplication } from "../services/applicationService";

const AddApplicationForm = ({ onApplicationAdded }) => {

    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Applied");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        setLoading(true);
        try{
            await createApplication({
                company,
                role,
                status
            });

            toast.success("Application added successfully!");

            setCompany("");
            setRole("");
            setStatus("Applied");

            onApplicationAdded();
        }

        catch (error) {
            console.error(error);
            toast.error("Failed to add application.");
        }

        finally {
            setLoading(false);
        }
    
    };

    return (

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-5 text-xl font-semibold">
                Add Application
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

                <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 p-3 font-medium hover:bg-blue-700"
                    disabled={loading}
                >
                    {
                        loading
                            ? "Adding..."
                            : "Add Application"
                    }
                </button>

            </form>

        </div>

    );

};

export default AddApplicationForm;