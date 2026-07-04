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