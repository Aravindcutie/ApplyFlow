import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getApplications = async () => {
    const response = await axios.get(
        `${API_URL}/applications`
    );

    return response.data;
};

export const createApplication = async (application) => {
    const response = await axios.post(
        `${API_URL}/applications`,
        application
    );

    return response.data;
};

export const updateApplication = async (id, application) => {
    const response = await axios.put(
        `${API_URL}/applications/${id}`,
        application
    );

    return response.data;
};

export const deleteApplication = async (id) => {
    const response = await axios.delete(
        `${API_URL}/applications/${id}`
    );

    return response.data;
};