import { useState } from "react";

import DashboardHeader from "../components/DashboardHeader";
import RecentApplications from "../components/RecentApplications";
import AddApplicationForm from "../components/AddApplicationForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import SearchFilterBar from "../components/SearchFilterBar";
import StatCard from "../components/StatCard";

import useApplications from "../hooks/useApplications";

const ApplicationsPage = () => {

    const {

        applications,

        fetchApplications,

        totalApplications,

        statusCounts

    } = useApplications();

    const [selectedApplication, setSelectedApplication] = useState(null);

    const [applicationToDelete, setApplicationToDelete] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");

    const [statusFilter, setStatusFilter] = useState("All");

    const [sortOption, setSortOption] = useState("Newest");

    let filteredApplications = applications.filter(

        (app) =>

            app.company
                .toLowerCase()
                .includes(searchTerm.toLowerCase())

            ||

            app.role
                .toLowerCase()
                .includes(searchTerm.toLowerCase())

    );

    if (statusFilter !== "All") {

        filteredApplications = filteredApplications.filter(

            (app) => app.status === statusFilter

        );

    }

    switch (sortOption) {

        case "Oldest":

            filteredApplications.sort(

                (a, b) => a.id - b.id

            );

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

            filteredApplications.sort(

                (a, b) => b.id - a.id

            );

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
                    value={statusCounts.Applied || 0}
                />

                <StatCard
                    title="Interviews"
                    value={statusCounts.Interview || 0}
                />

                <StatCard
                    title="Rejections"
                    value={statusCounts.Rejected || 0}
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
                totalApplications={totalApplications}
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

export default ApplicationsPage;