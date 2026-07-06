import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationService";

import DashboardHeader from "../components/DashboardHeader";
import RecentApplications from "../components/RecentApplications";
import AddApplicationForm from "../components/AddApplicationForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import SearchFilterBar from "../components/SearchFilterBar";
import StatCard from "../components/StatCard";

const DashboardPage = () => {

    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);

    const [applicationToDelete, setApplicationToDelete] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [sortOption, setSortOption] = useState("Newest");

    // Fetch Data

    const fetchApplications = async () => {

        const data = await getApplications();

        setApplications(data);

    };

    useEffect(() => {

        fetchApplications();

    }, []);

    // Dashboard Statistics

    const totalApplications = applications.length;

    const statusCounts = applications.reduce(

        (counts, app) => {

            counts[app.status] = (counts[app.status] || 0) + 1;

            return counts;

        },

        {}

    );

    const appliedCount = statusCounts.Applied || 0;
    const interviewCount = statusCounts.Interview || 0;
    const rejectedCount = statusCounts.Rejected || 0;

    // Search

    let filteredApplications = applications.filter((app) =>

        app.company.toLowerCase().includes(searchTerm.toLowerCase()) ||

        app.role.toLowerCase().includes(searchTerm.toLowerCase())

    );

    // Status Filter

    if (statusFilter !== "All") {

        filteredApplications = filteredApplications.filter(

            (app) => app.status === statusFilter

        );

    }

    // Sorting

    switch (sortOption) {

        case "Oldest":

            filteredApplications.sort((a, b) => a.id - b.id);

            break;

        case "CompanyAZ":

            filteredApplications.sort(

                (a, b) => a.company.localeCompare(b.company)

            );

            break;

        case "CompanyZA":

            filteredApplications.sort(

                (a, b) => b.company.localeCompare(a.company)

            );

            break;

        default:

            filteredApplications.sort((a, b) => b.id - a.id);

    }

    return (

        <div className="p-8">

            <DashboardHeader />

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                <StatCard
                    title="Applications"
                    value={totalApplications}
                />

                <StatCard
                    title="Applied"
                    value={appliedCount}
                />

                <StatCard
                    title="Interviews"
                    value={interviewCount}
                />

                <StatCard
                    title="Rejections"
                    value={rejectedCount}
                />

            </div>

            <AddApplicationForm
                application={selectedApplication}
                onApplicationAdded={fetchApplications}
                onEditComplete={() => setSelectedApplication(null)}
            />

            <SearchFilterBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                sortOption={sortOption}
                onSortChange={setSortOption}
                totalApplications={applications.length}
                filteredApplicationsCount={filteredApplications.length}
            />

            <RecentApplications
                applications={filteredApplications}
                selectedApplication={selectedApplication}
                onEdit={setSelectedApplication}
                onDelete={(application) => {

                    setApplicationToDelete(application);

                    setShowDeleteModal(true);

                }}
            />

            <DeleteConfirmationModal
                isOpen={showDeleteModal}
                application={applicationToDelete}
                onClose={() => {

                    setShowDeleteModal(false);
                    setApplicationToDelete(null);

                }}
                onDeleteSuccess={fetchApplications}
                onEditComplete={() => setSelectedApplication(null)}
            />

        </div>

    );

};

export default DashboardPage;