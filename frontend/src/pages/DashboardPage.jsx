import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationService";

import DashboardHeader from "../components/DashboardHeader";
import RecentApplications from "../components/RecentApplications";
import AddApplicationForm from "../components/AddApplicationForm";
import StatCard from "../components/StatCard";

const DashboardPage = () => {
    const [applications, setApplications] = useState([]);

    // Fetch data

    const fetchApplications = async () => {
        const data = await getApplications();
        setApplications(data);
    };
    
    useEffect(() => {
        fetchApplications();
    }, []);
    

    // Derived Statistics
    
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

  return (
    <div className="p-8">
      <DashboardHeader />

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Applications" value={totalApplications} />
        <StatCard title="Applied" value={appliedCount} />
        <StatCard title="Interviews" value={interviewCount} />
        <StatCard title="Rejections" value={rejectedCount} />
      </div>
      
      <AddApplicationForm
            onApplicationAdded={fetchApplications}
        />

      <RecentApplications
        applications={applications}
      />
    </div>
  );
};

export default DashboardPage;