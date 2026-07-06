import { useEffect, useState } from "react";
import { getApplications } from "../services/applicationService";

const useApplications = () => {

    const [applications, setApplications] = useState([]);

    const fetchApplications = async () => {

        const data = await getApplications();

        setApplications(data);

    };

    useEffect(() => {

        fetchApplications();

    }, []);

    const totalApplications = applications.length;

    const statusCounts = applications.reduce(

        (counts, app) => {

            counts[app.status] = (counts[app.status] || 0) + 1;

            return counts;

        },

        {}

    );

    const chartData = [

        {
            status: "Applied",
            count: statusCounts.Applied || 0
        },

        {
            status: "Interview",
            count: statusCounts.Interview || 0
        },

        {
            status: "Rejected",
            count: statusCounts.Rejected || 0
        }

    ];

    return {

        applications,

        fetchApplications,

        totalApplications,

        statusCounts,

        chartData

    };

};

export default useApplications;